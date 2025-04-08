import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config';
import Navbar from './Navbar';
import Footer from './Footer';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DeviceDetail = () => {
  const { deviceID } = useParams();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMetadata, setShowMetadata] = useState(true); // State to toggle between metadata and config data
  const baseURL = config.baseURL;

  useEffect(() => {
    console.log(`Fetching device details from: ${baseURL}/get_device/${deviceID}`);
    fetch(`${baseURL}/get_device/${deviceID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Device details:', data);
        setDevice(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching device details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL, deviceID]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const renderGraph = (data, field, label) => {
    const chartData = {
      labels: data.map(entry => new Date(entry.created_at).toLocaleTimeString()),
      datasets: [
        {
          label: label,
          data: data.map(entry => entry[field]),
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    return (
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">{label}</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Line data={chartData} options={{ maintainAspectRatio: false }} width={600} height={300} />
        </div>
      </div>
    );
  };

  const fields = Object.entries(device.profile.fields);
  const configs = Object.entries(device.profile.configs);

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        {device ? (
          <div className="flex flex-col bg-cover mt-20">
            <div className="flex justify-center">
              <div className="text-center items-center py-10 px-6 md:px-20 w-full md:w-11/12 bg-gray-100 rounded-3xl bg-opacity-75 text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Device Details</h1>
                <div className="flex justify-between w-full">
                  <div className="text-left">
                    <p><strong>Name:</strong> {device.name}</p>
                    <p><strong>Read Key:</strong> {device.readkey}</p>
                    <p><strong>Write Key:</strong> {device.writekey}</p>
                    <p><strong>Device ID:</strong> {device.deviceID}</p>
                    <p><strong>IMSI:</strong> {device.imsi}</p>
                    <p><strong>IMEI:</strong> {device.imei}</p>
                  </div>
                  <div className="text-right">
                    <p><strong>Current Firmware Version:</strong> {device.currentFirmwareVersion}</p>
                    <p><strong>Previous Firmware Version:</strong> {device.previousFirmwareVersion}</p>
                    <p><strong>Target Firmware Version:</strong> {device.targetFirmwareVersion}</p>
                    <p><strong>File Download State:</strong> {device.fileDownloadState ? "True" : "False"}</p>
                    <div>
                      <strong>Profile:</strong>
                      <p>{device.profile.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowMetadata(!showMetadata)}
              >
                {showMetadata ? 'Show Config Data' : 'Show Metadata'}
              </button>
            </div>
            <div className="flex flex-wrap justify-center mt-10">
              {showMetadata
                ? fields.map(([key, value]) => renderGraph(device.device_data, key, value))
                : configs.map(([key, value]) => renderGraph(device.config_data, key, value))}
            </div>
          </div>
        ) : (
          <p>Device not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DeviceDetail;