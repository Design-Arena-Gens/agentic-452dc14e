"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your interest! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-300 font-semibold text-lg">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing
            goals. Get a free consultation today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-300 text-xl" />
                  </div>
                  <div>
                    <div className="text-primary-300 font-semibold mb-1">
                      Email Us
                    </div>
                    <div className="text-white text-lg">
                      contact@clickautomate.com
                    </div>
                    <div className="text-gray-300">
                      support@clickautomate.com
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-300 text-xl" />
                  </div>
                  <div>
                    <div className="text-primary-300 font-semibold mb-1">
                      Call Us
                    </div>
                    <div className="text-white text-lg">+1 (555) 123-4567</div>
                    <div className="text-gray-300">Mon-Fri 9AM-6PM EST</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-300 text-xl" />
                  </div>
                  <div>
                    <div className="text-primary-300 font-semibold mb-1">
                      Visit Us
                    </div>
                    <div className="text-white text-lg">
                      123 Digital Avenue, Suite 100
                    </div>
                    <div className="text-gray-300">
                      San Francisco, CA 94102
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Work With Us?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  Custom strategy tailored to your needs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  Transparent pricing and reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
