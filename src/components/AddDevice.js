import React, { useState } from 'react';
import axios from 'axios';

function AddDevice() {
    const [formData, setFormData] = useState({
        name: '',
        readkey: '',
        writekey: '',
        deviceID: '',
        currentFirmwareVersion: '',
        previousFirmwareVersion: '',
        fileDownloadState: '',
        // Include additional fields if needed
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/device', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('There was an error adding the device!', error);
        }
    };

    return (
        <div>
            <h2>Add a New Device</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Read Key:
                    <input
                        type="text"
                        name="readkey"
                        value={formData.readkey}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Write Key:
                    <input
                        type="text"
                        name="writekey"
                        value={formData.writekey}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Device ID:
                    <input
                        type="text"
                        name="deviceID"
                        value={formData.deviceID}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Current Firmware Version:
                    <input
                        type="text"
                        name="currentFirmwareVersion"
                        value={formData.currentFirmwareVersion}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Previous Firmware Version:
                    <input
                        type="text"
                        name="previousFirmwareVersion"
                        value={formData.previousFirmwareVersion}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    File Download State:
                    <input
                        type="text"
                        name="fileDownloadState"
                        value={formData.fileDownloadState}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {/* Add additional fields if necessary */}
                <button type="submit">Add Device</button>
            </form>
        </div>
    );
}

export default AddDevice;
