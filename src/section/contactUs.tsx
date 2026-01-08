"use client";
import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { backgroundEffects, sectionDivider } from "../styles/theme";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      {backgroundEffects}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            title="Get In"
            highlightText="Touch"
            description="Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            theme="light"
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-slate-400/40 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#20B2AA] to-[#4682B4] hover:from-[#4682B4] hover:to-[#20B2AA] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      {sectionDivider}
    </section>
  );
};

export default ContactUs;