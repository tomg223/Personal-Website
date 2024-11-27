import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSent(true); 
  };

  return (
    <form
      className="bg-blue-900 bg-opacity-80"
      onSubmit={handleSubmit}
    >
      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-white-900 mb-1 text-xl">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-30 p-2 text-blue-900 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-white-900 mb-1 text-xl">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 text-blue-900 border border-gray-300 rounded"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-900 text-white mb-8 text-xl px-4 py-2 rounded hover:bg-blue-800"
        disabled={isSent} // Disable the button after submission
      >
        {isSent ? 'Sent!' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
