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

  const renderGraph = (field, label) => {
    const data = {
      labels: device.device_data.map(entry => new Date(entry.created_at).toLocaleTimeString()),
      datasets: [
        {
          label: label,
          data: device.device_data.map(entry => entry[field]),
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    return (
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">{label}</h2>
        <Line data={data} />
      </div>
    );
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        {device ? (
        <div className="h-screen flex flex-col bg-cover">
          <div className="flex-grow flex justify-center items-center mt-20">
            <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-blue-600 rounded-3xl bg-opacity-75 text-white">
              <h1 className="text-2xl font-bold mb-4">Device Details</h1>
             
                <div>
                  <p><strong>Name:</strong> {device.name}</p>
                  <p><strong>Read Key:</strong> {device.readkey}</p>
                  <p><strong>Write Key:</strong> {device.writekey}</p>
                  <p><strong>Device ID:</strong> {device.deviceID}</p>
                  <p><strong>IMSI:</strong> {device.imsi}</p>
                  <p><strong>IMEI:</strong> {device.imei}</p>
                  <p><strong>Current Firmware Version:</strong> {device.currentFirmwareVersion}</p>
                  <p><strong>Previous Firmware Version:</strong> {device.previousFirmwareVersion}</p>
                  <p><strong>File Download State:</strong> {device.fileDownloadState ? "True" : "False"}</p>
                  <div>
                    <strong>Profile:</strong>
                    <p>{device.profile.name}</p>
                    {/* <p>{device.profile.description}</p> */}
                  </div>
                  {/* <div>
                    <strong>Fields:</strong>
                    {Object.entries(device.profile.fields).map(([key, value]) => (
                      <div key={key}>
                        {renderGraph(key, value)}
                      </div>
                    ))}
                  </div> */}
                </div>
              
              <br />
            </div>
          </div>
        </div>
        ) : (
          <p>Device not found</p>
        )}
        <div className="flex-grow flex justify-center items-center mt-20">
          <div>
            <strong>Fields:</strong>
            {Object.entries(device.profile.fields).map(([key, value]) => (
              <div key={key}>
                {renderGraph(key, value)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeviceDetail;