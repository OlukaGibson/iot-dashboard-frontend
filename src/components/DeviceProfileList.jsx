import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import config from "../config";

const DeviceProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = config.baseURL;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching profiles from:", `${baseURL}/get_profiles`);
    fetch(`${baseURL}/get_profiles`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Profiles data:", data);
        setProfiles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching profiles:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL]);

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="mb-4">
        <button onClick={() => navigate("/add-device-profile")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Profile
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : profiles.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Created At</th>
              {/* <th className="px-4 py-2">Fields</th> */}
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={index} onClick={() => navigate(`/device-profiles/${profile.id}`)} className="cursor-pointer">
                <td className="border px-4 py-2">{profile.name}</td>
                <td className="border px-4 py-2">{profile.description}</td>
                <td className="border px-4 py-2">{new Date(profile.created_at).toLocaleString()}</td>
                {/* <td className="border px-4 py-2">
                  {Object.values(profile.fields).filter(field => field).map((field, i) => (
                    <div key={i}>{field}</div>
                  ))}
                </td>
                    <div key={i}>{mark ? "✔️" : "❌"}</div> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No profiles currently</p>
      )}
    </div>
  );
};

export default DeviceProfileList;