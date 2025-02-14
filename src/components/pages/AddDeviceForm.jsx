import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const AddDeviceForm = () => {
  const [name, setName] = useState('');
  const [readkey, setReadkey] = useState('');
  const [writekey, setWritekey] = useState('');
  const [deviceID, setDeviceID] = useState('');
  const [currentFirmwareVersion, setCurrentFirmwareVersion] = useState('');
  const [fields, setFields] = useState(Array(20).fill(''));
  const [fieldMarks, setFieldMarks] = useState(Array(20).fill(false));
  const [visibleFields, setVisibleFields] = useState(2);
  const [firmwareOptions, setFirmwareOptions] = useState([]);
  const [showFirmwareFields, setShowFirmwareFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFirmwareOptions = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/firmware/display`);
        setFirmwareOptions(response.data);
      } catch (error) {
        console.error('Error fetching firmware options:', error);
      }
    };

    fetchFirmwareOptions();
  }, []);

  const handleFieldChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleFieldMarkChange = (index, value) => {
    const newFieldMarks = [...fieldMarks];
    newFieldMarks[index] = value;
    setFieldMarks(newFieldMarks);
  };

  const handleAddField = () => {
    if (visibleFields < 20) {
      setVisibleFields(visibleFields + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('readkey', readkey);
    formData.append('writekey', writekey);
    formData.append('deviceID', deviceID);
    formData.append('currentFirmwareVersion', currentFirmwareVersion);

    fields.forEach((field, index) => {
      formData.append(`field${index + 1}`, field);
    });

    fieldMarks.forEach((mark, index) => {
      formData.append(`field${index + 1}_mark`, mark);
    });

    try {
      const response = await axios.post(`${config.baseURL}/adddevice`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      navigate('/devices');
    } catch (error) {
      console.error('Error adding device:', error);
      alert('Error adding device');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container px-20 bg-blue-600 bg-opacity-50 rounded-3xl">
        <br />
        <h1 className="text-2xl flex-col font-bold mb-4">Add New Device</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Read Key</label>
            <input
              type="text"
              value={readkey}
              onChange={(e) => setReadkey(e.target.value)}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Write Key</label>
            <input
              type="text"
              value={writekey}
              onChange={(e) => setWritekey(e.target.value)}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Device ID</label>
            <input
              type="text"
              value={deviceID}
              onChange={(e) => setDeviceID(e.target.value)}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          {!showFirmwareFields && (
            <button type="button" onClick={() => setShowFirmwareFields(true)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
              + Add Firmware Versions
            </button>
          )}
          {showFirmwareFields && (
            <>
              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 w-1/4">Current Firmware Version</label>
                <select
                  value={currentFirmwareVersion}
                  onChange={(e) => setCurrentFirmwareVersion(e.target.value)}
                  className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
                >
                  <option value="">Select Firmware</option>
                  {firmwareOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.firmwareVersion}
                    </option>
                  ))}
                </select>
              </div>
              
            </>
          )}
          {fields.slice(0, visibleFields).map((field, index) => (
            <div className="mb-4 flex items-center" key={index}>
              <label className="block text-gray-700 w-1/4">{`Field ${index + 1}`}</label>
              <input
                type="text"
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
              />
              <label className="block text-gray-700 w-1/4">{`Field ${index + 1} Mark`}</label>
              <input
                type="checkbox"
                checked={fieldMarks[index]}
                onChange={(e) => handleFieldMarkChange(index, e.target.checked)}
                className="mt-1 block"
              />
            </div>
          ))}
          {visibleFields < 20 && (
            <button type="button" onClick={handleAddField} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
              + Add Field
            </button>
          )}
          <br />
          <br />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Device
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddDeviceForm;