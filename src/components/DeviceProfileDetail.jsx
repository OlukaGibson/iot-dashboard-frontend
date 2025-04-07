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
        <div className="h-screen flex flex-col bg-cover">
          <div className="flex-grow flex justify-center items-center mt-20">
            <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-blue-600 rounded-3xl bg-opacity-75 text-white">
              <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
              {profile ? (
                <div>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Description:</strong> {profile.description}</p>
                  <div>
                    <strong>Fields:</strong>
                    {Object.entries(profile.fields).map(([key, value]) => (
                      <div key={key}>{key}: {value}</div>
                    ))}
                  </div>
                  <div>
                    <strong>Configs:</strong>
                    {Object.entries(profile.configs).map(([key, value]) => (
                      <div key={key}>{key}: {value}</div>
                    ))}
                  </div>
                </div>
                // <div key={key}>{key}: {value ? "✔️" : "❌"}</div>
              ) : (
                <p>Profile not found</p>
              )}
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeviceProfileDetail;