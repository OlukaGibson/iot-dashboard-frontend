import React, { useState } from 'react';
import axios from 'axios';

function UpdateDevice({ deviceID }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:5000/device/${deviceID}/update`, {
                params: formData,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('There was an error updating the device!', error);
        }
    };

    return (
        <div>
            <h2>Update Device Data</h2>
            <form onSubmit={handleSubmit}>
                {/* Add form fields */}
                <button type="submit">Update Device</button>
            </form>
        </div>
    );
}

export default UpdateDevice;
