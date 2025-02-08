import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const AddFirmwareForm = () => {
  const [file, setFile] = useState(null);
  const [firmwareVersion, setFirmwareVersion] = useState('');
  const [description, setDescription] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [documentationLink, setDocumentationLink] = useState('');
  const [changes, setChanges] = useState(Array(10).fill(''));
  const [visibleChanges, setVisibleChanges] = useState(1);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (index, value) => {
    const newChanges = [...changes];
    newChanges[index] = value;
    setChanges(newChanges);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('firmwareVersion', firmwareVersion);
    formData.append('description', description);
    formData.append('documentation', documentation);
    formData.append('documentationLink', documentationLink);
    changes.forEach((change, index) => {
      formData.append(`change${index + 1}`, change);
    });

    try {
      const response = await axios.post(`${config.baseURL}/firmwareupload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      navigate('/firmware');
    } catch (error) {
      console.error('Error uploading firmware:', error);
      alert('Error uploading firmware');
    }
  };

  const handleAddChange = () => {
    if (visibleChanges < 10) {
      setVisibleChanges(visibleChanges + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container px-20 bg-blue-600 bg-opacity-50 rounded-3xl">
        <br />
        <h1 className="text-2xl flex-col font-bold mb-4">Add New Firmware</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Firmware File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-3/4 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Firmware Version</label>
            <input
              type="text"
              value={firmwareVersion}
              onChange={(e) => setFirmwareVersion(e.target.value)}
              className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Documentation</label>
            <textarea
              value={documentation}
              onChange={(e) => setDocumentation(e.target.value)}
              className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 w-1/4">Documentation Link</label>
            <input
              type="text"
              value={documentationLink}
              onChange={(e) => setDocumentationLink(e.target.value)}
              className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
            />
          </div>
          {changes.slice(0, visibleChanges).map((change, index) => (
            <div className="mb-4 flex items-center" key={index}>
              <label className="block text-gray-700 w-1/4">{`Change ${index + 1}`}</label>
              <input
                type="text"
                value={change}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mt-1 block w-1/2 p-2 text-lg rounded-lg"
              />
            </div>
          ))}
          {visibleChanges < 10 && (
            <button type="button" onClick={handleAddChange} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
              + Add Change
            </button>
          )}
          <br />
          <br />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Upload Firmware
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddFirmwareForm;