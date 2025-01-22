import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetDeviceData({ deviceID }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://127.0.0.1:5000/device/${deviceID}/data`);
            setData(result.data);
        };
        fetchData();
    }, [deviceID]);

    return (
        <div>
            <h2>Device Data</h2>
            <ul>
                {data.map((entry, index) => (
                    <li key={index}>{JSON.stringify(entry)}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetDeviceData;
