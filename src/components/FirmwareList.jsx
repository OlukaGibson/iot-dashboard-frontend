import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import config from "../config";

const FirmwareList = () => {
  const [firmware, setFirmware] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = config.baseURL;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching firmware from:", `${baseURL}/firmware/display`);
    fetch(`${baseURL}/firmware/display`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Firmware data:", data);
        setFirmware(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching firmware:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL]);

  const handleAddFirmware = () => {
    navigate("/add-firmware");
  };

  const handleDownload = (firmwareVersion) => {
    const downloadUrl = `${baseURL}/firmware/${firmwareVersion}/download/firwmwarehex`;
    window.location.href = downloadUrl;
  };

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="mb-4">
        <button onClick={handleAddFirmware} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Firmware
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : firmware.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Firmware Version</th>
              <th className="px-4 py-2">Description</th>
              {/* <th className="px-4 py-2">Firmware bin</th> */}
              {/* <th className="px-4 py-2">Bootloader hex</th> */}
              {/* <th className="px-4 py-2">Firmware hex</th> */}
              <th className="px-4 py-2">Changes</th>
              <th className="px-4 py-2">Created At</th>
              {/* <th className="px-4 py-2">Updated</th> */}
              <th className="px-4 py-2">Hex file</th>
            </tr>
          </thead>
          <tbody>
            {firmware.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <a href={`/firmware/${item.firmwareVersion}`} className="text-blue-500 hover:underline">
                    {item.firmwareVersion} 
                  </a>
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                {/* <td className="border px-4 py-2">{item.firmware_string || "N/A"}</td>
                <td className="border px-4 py-2">{item.firmware_string_bootloader || "N/A"}</td>
                <td className="border px-4 py-2">{item.firmware_string_hex || "N/A"}</td> */}
                <td className="border px-4 py-2">
                  {Object.values(item.changes).filter(change => change).map((change, i) => (
                    <div key={i}> 👉🏾 {change}</div>
                  ))}
                </td>
                <td className="border px-4 py-2">{new Date(item.created_at).toLocaleString()}</td>
                {/* <td className="border px-4 py-2">{new Date(item.updated_at).toLocaleString()}</td> */}
                <td className="border px-4 py-2">
                  <button onClick={() => handleDownload(item.firmwareVersion)} className="bg-green-500 text-white px-4 py-2 rounded">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No firmware currently</p>
      )}
    </div>
  );
};

export default FirmwareList;