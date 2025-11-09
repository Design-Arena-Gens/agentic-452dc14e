"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "SJ",
      content:
        "ClickAutomate transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Absolutely phenomenal results!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthHub",
      image: "MC",
      content:
        "The AI automation solutions they implemented saved us countless hours and significantly improved our campaign performance. Best investment we've made!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StyleBox",
      image: "ER",
      content:
        "Professional, responsive, and results-driven. The team at ClickAutomate truly understands digital marketing and delivers on their promises every time.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "VP Sales, CloudNet",
      image: "DT",
      content:
        "Their paid advertising campaigns generated a 450% ROI in the first quarter. The data-driven approach and constant optimization made all the difference.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "CMO, HealthFirst",
      image: "LA",
      content:
        "Working with ClickAutomate has been a game-changer for our business. Their content marketing strategy helped us establish thought leadership in our industry.",
      rating: 5,
    },
    {
      name: "James Parker",
      role: "Owner, Retail Pro",
      image: "JP",
      content:
        "The automation tools they set up streamlined our entire marketing workflow. We're now able to focus on strategy while the AI handles the repetitive tasks.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-lg">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses that have
            transformed their digital presence with ClickAutomate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <FaQuoteLeft className="text-4xl text-primary-300 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
