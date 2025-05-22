"use client";
import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const text =
  "I'd love to hear from you! Fill out the form below or reach out directly via email.";

const Contact = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-16 px-4 sm:px-8 lg:px-16">
      <BackgroundBeams />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/PlaygroundImage1.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="hidden md:block rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Form Section */}
        <div className=" p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-400 mb-8 text-center">{text}</p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
