import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AddDevice from './components/AddDevice';
import GetDevices from './components/GetDevices';
import GetDevice from './components/GetDevice';
import UpdateDevice from './components/UpdateDevice';
import GetDeviceData from './components/GetDeviceData';
import FirmwareUpload from './components/FirmwareUpload';
import FirmwareDownload from './components/FirmwareDownload';
import GetFirmware from './components/GetFirmware';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-device" element={<AddDevice />} />
                    <Route path="/get-devices" element={<GetDevices />} />
                    <Route path="/get-device/:deviceID" element={<GetDevice />} />
                    <Route path="/update-device/:deviceID" element={<UpdateDevice />} />
                    <Route path="/get-device-data/:deviceID" element={<GetDeviceData />} />
                    <Route path="/firmware-upload" element={<FirmwareUpload />} />
                    <Route path="/firmware-download" element={<FirmwareDownload />} />
                    <Route path="/get-firmware" element={<GetFirmware />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
