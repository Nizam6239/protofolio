import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-400">I'd love to hear from you! Fill out the form below or reach out directly via email.</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" id="name" className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg" placeholder="Your Name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg" placeholder="Your Email" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg" placeholder="Your Message" ></textarea>
          </div>

          <div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

