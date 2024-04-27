import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-light mb-4">
          Contact Me
        </h2>
        <p className="text-gray-light mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="text-left">
          <label htmlFor="name" className="block mb-2 text-gray-light">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-light border border-gray-dark rounded-lg px-4 py-2 mb-4"
          />
          <label htmlFor="email" className="block mb-2 text-gray-light">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-light border border-gray-dark rounded-lg px-4 py-2 mb-4"
          />
          <label htmlFor="message" className="block mb-2 text-gray-light">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full bg-gray-light border border-gray-dark rounded-lg px-4 py-2 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-dark hover:bg-yellow-light text-gray-dark font-semibold py-2 px-4 rounded inline-block"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
