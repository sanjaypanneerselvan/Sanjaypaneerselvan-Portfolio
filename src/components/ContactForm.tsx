import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mpwzrvnj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-gray-900/50 backdrop-blur-sm rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-violet-400"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;