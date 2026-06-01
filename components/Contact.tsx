"use client";
import { useState } from "react";

const services = [
  "UI/UX Design",
  "Web Design",
  "App Design",
  "Branding",
  "Video Editing",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    alert("Message sent!");
  };

  return (
    <section id="contact-me" className="bg-[#0d0d0d] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3">
            Contact me
          </h2>
          <p className="text-gray-400 text-sm">
            Cultivating Connections: Reach Out And Connect With Me.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
            />
            {/* Service dropdown */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors appearance-none"
              style={{ color: form.service ? "#fff" : "#6b7280" }}
            >
              <option value="" disabled className="text-gray-500">
                Service Of Interest
              </option>
              {services.map((s) => (
                <option key={s} value={s} className="text-white bg-[#1a1a1a]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline */}
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            value={form.timeline}
            onChange={handleChange}
            className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
          />

          {/* Project Details */}
          <textarea
            name="details"
            placeholder="Project Details..."
            value={form.details}
            onChange={handleChange}
            rows={5}
            className="w-full bg-[#141414] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
          />

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-3 bg-[#ff6b35] hover:bg-[#e55a28] text-white font-semibold text-sm rounded transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
