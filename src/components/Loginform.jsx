import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginform = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("password", formData.password);

    try {
      const response = await axios.post(
        " http://127.0.0.1:5000/user/login",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      navigate("/"); // Gibson don't forget to edit this
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    // h-screen flex flex-col bg-cover
    <div className="min-h-screen flex justify-center items-center bg-cover">
      <div className="w-full max-w-md p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
