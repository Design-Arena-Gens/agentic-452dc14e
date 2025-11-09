"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaBullhorn,
  FaRobot,
  FaChartBar,
  FaPencilAlt,
  FaAd,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description:
        "Dominate search rankings with advanced SEO strategies. We optimize your website to attract organic traffic and boost visibility.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing campaigns that drive engagement, conversions, and brand loyalty across all channels.",
      features: [
        "Social Media Marketing",
        "Email Campaigns",
        "Brand Strategy",
        "Market Analysis",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaRobot,
      title: "AI Automation",
      description:
        "Leverage cutting-edge AI technology to automate repetitive tasks, optimize workflows, and scale your operations efficiently.",
      features: [
        "Chatbot Integration",
        "Process Automation",
        "AI Analytics",
        "Smart Workflows",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: FaChartBar,
      title: "Analytics & Insights",
      description:
        "Data-driven insights to make informed decisions. Track performance, understand your audience, and measure ROI effectively.",
      features: [
        "Custom Dashboards",
        "Performance Tracking",
        "Conversion Analysis",
        "Competitor Research",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaPencilAlt,
      title: "Content Marketing",
      description:
        "Engaging content that resonates with your audience. From blog posts to videos, we create content that converts.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Production",
        "Copywriting",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaAd,
      title: "Paid Advertising",
      description:
        "Maximize your ad spend with targeted campaigns on Google, Facebook, Instagram, and other platforms for instant results.",
      features: [
        "Google Ads",
        "Social Media Ads",
        "Retargeting",
        "Ad Optimization",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-lg">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO to AI automation, we provide end-to-end digital marketing
            services to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div
                className={`h-2 bg-gradient-to-r ${service.color}`}
              />
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
