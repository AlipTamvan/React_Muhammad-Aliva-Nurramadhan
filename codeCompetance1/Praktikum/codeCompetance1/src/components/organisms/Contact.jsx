import React, { useState } from "react";

const Contact = () => {
  // State untuk form fields dan error handling
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Validasi email sederhana
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle perubahan input dan perbarui error jika input valid
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perbarui error jika field telah diisi dengan benar
    if (value.trim() !== "") {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name]; // Hapus error jika input valid
        return updatedErrors;
      });
    }

    // Jika email diubah, cek validitas email
    if (name === "email" && validateEmail(value)) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors.email; // Hapus error jika email valid
        return updatedErrors;
      });
    }
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Cek field kosong
    if (!formData.firstName) newErrors.firstName = "First name cannot be empty";
    if (!formData.lastName) newErrors.lastName = "Last name cannot be empty";
    if (!formData.email) newErrors.email = "Email cannot be empty";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    // Jika tidak ada error, tampilkan data
    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="flex items-center justify-center bg-gradient-to-b from-blue-900 via-black to-black"
    >
      <div className="bg-dark-black p-8 lg:rounded-lg w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian kiri - Informasi kontak */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-6">
              Have questions or need help? Feel free to reach out to us using
              the form. We're here to assist you!
            </p>
            {/* Tampilkan data setelah form berhasil disubmit */}
            {submittedData && (
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Submitted Data:</h3>
                <p>First Name: {submittedData.firstName}</p>
                <p>Last Name: {submittedData.lastName}</p>
                <p>Email: {submittedData.email}</p>
                <p>Message: {submittedData.message}</p>
              </div>
            )}
          </div>

          {/* Bagian kanan - Formulir */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-white font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none ${
                      errors.firstName
                        ? "border-red-500"
                        : "focus:ring-2 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="w-full">
                  <label className="block text-white font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none ${
                      errors.lastName
                        ? "border-red-500"
                        : "focus:ring-2 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* What can we help you with */}
              <div>
                <label className="block text-white font-medium mb-2">
                  What can we help you with?
                </label>
                <textarea
                  name="message"
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none ${
                    errors.message
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-500"
                  }`}
                  rows="4"
                  placeholder="Describe your issue or question"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
