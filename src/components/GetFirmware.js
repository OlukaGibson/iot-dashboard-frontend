import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetFirmware() {
    const [firmware, setFirmware] = useState([]);

    useEffect(() => {
        const fetchFirmware = async () => {
            const result = await axios.get('http://127.0.0.1:5000/firmware');
            setFirmware(result.data);
        };
        fetchFirmware();
    }, []);

    return (
        <div>
            <h2>Firmware Versions</h2>
            <ul>
                {firmware.map((version, index) => (
                    <li key={index}>{version.firmwareVersion} - {version.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetFirmware;
