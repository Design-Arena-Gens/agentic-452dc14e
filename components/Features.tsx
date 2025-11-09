"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaTrophy,
  FaHeadset,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaLightbulb,
      title: "Innovative Strategies",
      description:
        "Stay ahead with cutting-edge marketing techniques and the latest industry trends",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description:
        "Certified professionals with years of experience in digital marketing and AI",
    },
    {
      icon: FaClock,
      title: "Fast Turnaround",
      description:
        "Quick implementation and rapid results without compromising on quality",
    },
    {
      icon: FaShieldAlt,
      title: "Data Security",
      description:
        "Enterprise-grade security measures to protect your business data and customer information",
    },
    {
      icon: FaTrophy,
      title: "Proven Results",
      description:
        "Track record of delivering measurable ROI and exceeding client expectations",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to ensure your campaigns run smoothly",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-lg">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity, technology, and data to deliver exceptional
            results for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
