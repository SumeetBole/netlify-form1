import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        name="contact"
        method="POST"
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        
      >
        {/* Hidden field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: 
          </label>
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
