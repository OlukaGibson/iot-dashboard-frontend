import React, { useState } from 'react';

function FirmwareDownload() {
    const [firmwareVersion, setFirmwareVersion] = useState('');

    const handleDownload = () => {
        window.open(`http://127.0.0.1:5000/firmware/${firmwareVersion}/download`);
    };

    return (
        <div>
            <h2>Download Firmware</h2>
            <input
                type="text"
                value={firmwareVersion}
                onChange={(e) => setFirmwareVersion(e.target.value)}
            />
            <button onClick={handleDownload}>Download</button>
        </div>
    );
}

export default FirmwareDownload;
