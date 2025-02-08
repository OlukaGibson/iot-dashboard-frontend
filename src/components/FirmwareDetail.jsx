import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import config from "./config";

const FirmwareDetail = () => {
  const { firmwareVersion } = useParams();
  const [firmware, setFirmware] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = config.baseURL;

  useEffect(() => {
    console.log("Fetching firmware details from:", `${baseURL}/firmware/${firmwareVersion}`);
    fetch(`${baseURL}/firmware/${firmwareVersion}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Firmware details:", data);
        setFirmware(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching firmware details:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [baseURL, firmwareVersion]);

  const handleDownload = () => {
    const downloadUrl = `${baseURL}/firmware/${firmwareVersion}/download`;
    window.location.href = downloadUrl;
  };

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
              <h1 className="text-2xl font-bold mb-4">Firmware Details</h1>
              {firmware ? (
                <div>
                  <p><strong>Firmware Version:</strong> {firmware.firmwareVersion}</p>
                  <p><strong>Description:</strong> {firmware.description}</p>
                  <p><strong>Documentation:</strong> {firmware.documentation}</p>
                  <p><strong>Documentation Link:</strong> {firmware.documentationLink}</p>
                  <p><strong>Created At:</strong> {new Date(firmware.created_at).toLocaleString()}</p>
                  <div>
                    <strong>Changes:</strong>
                    {Object.values(firmware.changes).filter(change => change).map((change, i) => (
                      <div key={i}>{change}</div>
                    ))}
                  </div>
                  <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                    Download Firmware
                  </button>
                </div>
              ) : (
                <p>Firmware not found</p>
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

export default FirmwareDetail;