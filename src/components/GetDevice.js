import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetDevice({ deviceID }) {
    const [device, setDevice] = useState(null);

    useEffect(() => {
        const fetchDevice = async () => {
            const result = await axios.get(`http://127.0.0.1:5000/device/${deviceID}`);
            setDevice(result.data);
        };
        fetchDevice();
    }, [deviceID]);

    return (
        <div>
            <h2>Device Details</h2>
            {device ? (
                <div>
                    <p>Name: {device.name}</p>
                    {/* Add more details */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default GetDevice;
