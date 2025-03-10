import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const AddDeviceProfileForm = () => {
  const [name, setName] = useState('');
  const [description, setReadkey] = useState('');
  const [fields, setFields] = useState(Array(20).fill(''));
  const [fieldMarks, setFieldMarks] = useState(Array(20).fill(false));
  const [visibleFields, setVisibleFields] = useState(2);
  const navigate = useNavigate();

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
    formData.append('description', description);

    fields.forEach((field, index) => {
      formData.append(`field${index + 1}`, field);
    });

    fieldMarks.forEach((mark, index) => {
      formData.append(`field${index + 1}_mark`, mark);
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
              onChange={(e) => setReadkey(e.target.value)}
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