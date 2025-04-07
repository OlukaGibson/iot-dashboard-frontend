import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const AddDeviceProfileForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState(Array(15).fill(''));
  const [configs, setConfigs] = useState(Array(10).fill(''));
  const [visibleFields, setVisibleFields] = useState(2);
  const [visibleConfigs, setVisibleConfigs] = useState(2);
  const navigate = useNavigate();

  const handleFieldChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleConfigChange = (index, value) => {
    const newConfigs = [...configs];
    newConfigs[index] = value;
    setConfigs(newConfigs);
  };

  const handleAddField = () => {
    if (visibleFields < 15) {
      setVisibleFields(visibleFields + 1);
    }
  };

  const handleAddConfig = () => {
    if (visibleConfigs < 10) {
      setVisibleConfigs(visibleConfigs + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);

    fields.forEach((field, index) => {
      formData.append(`field${index + 1}`, field);
    });

    configs.forEach((config, index) => {
      formData.append(`config${index + 1}`, config);
    });

    try {
      const response = await axios.post(`${config.baseURL}/addprofile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      navigate('/device-profiles');
    } catch (error) {
      console.error('Error adding profile:', error);
      alert('Error adding profile');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container px-20 bg-blue-600 bg-opacity-50 rounded-3xl">
        <br />
        <h1 className="text-2xl flex-col font-bold mb-4">Add New Profile</h1>
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
            <label className="block text-gray-700 w-1/4">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          {fields.slice(0, visibleFields).map((field, index) => (
            <div className="mb-4 flex items-center" key={index}>
              <label className="block text-gray-700 w-1/4">{`Field ${index + 1}`}</label>
              <input
                type="text"
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              />
            </div>
          ))}
          {visibleFields < 15 && (
            <button type="button" onClick={handleAddField} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
              + Add Field
            </button>
          )}
          {configs.slice(0, visibleConfigs).map((config, index) => (
            <div className="mb-4 flex items-center" key={index}>
              <>
                <label className="block text-gray-700 w-1/4">{`Config ${index + 1}`}</label>
                <input
                  type="text"
                  value={config}
                  onChange={(e) => handleConfigChange(index, e.target.value)}
                  className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
                />
              </>
            </div>
          ))}
          {visibleConfigs < 10 && (
            <button type="button" onClick={handleAddConfig} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
              + Add Config
            </button>
          )}
          <br />
          <br />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Profile
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddDeviceProfileForm;