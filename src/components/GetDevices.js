import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetDevices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const result = await axios.get('http://127.0.0.1:5000/devices');
            setDevices(result.data);
        };
        fetchDevices();
    }, []);

    return (
        <div>
            <h2>Devices List</h2>
            <ul>
                {devices.map((device) => (
                    <li key={device.deviceID}>{device.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetDevices;
