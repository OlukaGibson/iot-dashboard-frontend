import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
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
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.image) newErrors.image = "Profile image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);

    try {
      const response = await axios.post(
        " http://127.0.0.1:5000/user/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      navigate("/user/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    // h-screen flex flex-col bg-cover
    <div className="min-h-screen flex justify-center items-center bg-cover">
      <div className="w-full max-w-md p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
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
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
