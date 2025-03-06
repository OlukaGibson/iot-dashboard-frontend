import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import config from "../config";

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = config.baseURL;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching devices from:", `${baseURL}/get_devices`);
    fetch(`${baseURL}/get_devices`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Devices data:", data);
        setDevices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching devices:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="mb-4">
        <button onClick={() => navigate("/add-device")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Device
        </button>
      </div>
      {devices.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Read Key</th>
              <th className="px-4 py-2">Write Key</th>
              <th className="px-4 py-2">Device ID</th>
              <th className="px-4 py-2">Current Firmware Version</th>
              <th className="px-4 py-2">Previous Firmware Version</th>
              <th className="px-4 py-2">Target Firmware Version</th>
              <th className="px-4 py-2">File Download State</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Fields</th>
              <th className="px-4 py-2">Field Marks</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index} onClick={() => navigate(`/devices/${device.deviceID}`)} className="cursor-pointer">
                <td className="border px-4 py-2">{device.name}</td>
                <td className="border px-4 py-2">{device.readkey}</td>
                <td className="border px-4 py-2">{device.writekey}</td>
                <td className="border px-4 py-2">{device.deviceID}</td>
                <td className="border px-4 py-2">{device.currentFirmwareVersion}</td>
                <td className="border px-4 py-2">{device.previousFirmwareVersion}</td>
                <td className="border px-4 py-2">{device.targetFirmwareVersion}</td>
                <td className="border px-4 py-2">{device.fileDownloadState ? "True" : "False"}</td>
                <td className="border px-4 py-2">{new Date(device.created_at).toLocaleString()}</td>
                <td className="border px-4 py-2">
                  {Object.values(device.fields).filter(field => field).map((field, i) => (
                    <div key={i}>{field}</div>
                  ))}
                </td>
                <td className="border px-4 py-2">
                  {Object.values(device.field_marks).filter(mark => mark).map((mark, i) => (
                    <div key={i}>{mark ? "✔️" : "❌"}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No devices currently</p>
      )}
    </div>
  );
};

export default DeviceList;