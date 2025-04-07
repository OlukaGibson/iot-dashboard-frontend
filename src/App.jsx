import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/pages/HomeScreen';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Devices from './components/pages/Devices';
import Firmware from './components/pages/Firmware';
import AddFirmware from './components/pages/AddFirmware';
import AddDevice from './components/pages/AddDevice';
import FirmwareDetail from './components/FirmwareDetail';
import DeviceDetail from './components/DeviceDetail';
import AddDeviceProfile from './components/pages/AddDeviceProfile';
import DeviceProfile from './components/pages/DeviceProfile';
import DeviceProfileDetail from './components/DeviceProfileDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/firmware" element={<Firmware />} />
        <Route path="/add-firmware" element={<AddFirmware />} />
        <Route path="/firmware/:firmwareVersion" element={<FirmwareDetail />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/devices/:deviceID" element={<DeviceDetail />} />
        <Route path="/add-device-profile" element={<AddDeviceProfile />} />
        <Route path="/device-profiles" element={<DeviceProfile />} />
        <Route path="/device-profiles/:deviceProfileID" element={<DeviceProfileDetail />} />

        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;