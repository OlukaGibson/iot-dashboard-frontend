import React, { useState } from 'react';
import axios from 'axios';

function FirmwareUpload() {
    const [file, setFile] = useState(null);
    const [firmwareVersion, setFirmwareVersion] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('firmwareVersion', firmwareVersion);
        formData.append('description', description);

        try {
            const response = await axios.post('https://iotdashboard-ny6n.onrender.com/firmwareupload', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('There was an error uploading the firmware!', error);
        }
    };

    return (
        <div>
            <h2>Upload Firmware</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <input
                    type="text"
                    name="firmwareVersion"
                    value={firmwareVersion}
                    onChange={(e) => setFirmwareVersion(e.target.value)}
                />
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default FirmwareUpload;
