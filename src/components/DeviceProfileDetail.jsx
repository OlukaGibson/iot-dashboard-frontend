import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config';
import Navbar from './Navbar';
import Footer from './Footer';

const DeviceProfileDetail = () => {
  const { deviceProfileID } = useParams(); // Ensure this matches the route parameter
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = config.baseURL;

  useEffect(() => {
    console.log(`Fetching profile details from: ${baseURL}/get_profile/${deviceProfileID}`);
    fetch(`${baseURL}/get_profile/${deviceProfileID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Profile details:', data);
        setProfile(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profile details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL, deviceProfileID]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <br />
        <div className="flex flex-col bg-cover mt-20">
            <div className="flex justify-center">
              <div className="text-center items-center py-10 px-6 md:px-20 w-full md:w-11/12 bg-gray-100 rounded-3xl bg-opacity-75 text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
              {profile ? (
                <>
                  {/* Centered Name and Description */}
                  <div className="text-center mb-6">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Description:</strong> {profile.description}</p>
                  </div>
                  {/* Fields and Configs in Two Columns */}
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    {/* Fields on the Left */}
                    <div className="text-left md:w-1/2">
                      <strong>Fields:</strong>
                      {Object.entries(profile.fields).map(([key, value]) => (
                        <p key={key}>{key}: {value}</p>
                      ))}
                    </div>
                    {/* Configs on the Right */}
                    <div className="text-right w-full">
                      <strong>Configs:</strong>
                      {Object.entries(profile.configs).map(([key, value]) => (
                        <p key={key}>{key}: {value}</p>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <p>Profile not found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DeviceProfileDetail;