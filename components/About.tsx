"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const achievements = [
    "Award-winning digital marketing campaigns",
    "AI-powered automation solutions",
    "SEO strategies with proven results",
    "Dedicated account management",
    "Transparent reporting and analytics",
    "Industry-leading ROI metrics",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-300 font-semibold text-lg">
              About ClickAutomate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Your Partner in Digital Growth
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              At ClickAutomate, we believe in the power of combining human
              creativity with artificial intelligence. Our team of experts
              specializes in crafting data-driven marketing strategies that
              deliver measurable results.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Founded with a vision to revolutionize digital marketing, we've
              helped hundreds of businesses scale their online presence,
              increase conversions, and automate their marketing workflows with
              cutting-edge AI technology.
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-primary-400 text-2xl flex-shrink-0" />
                  <span className="text-lg">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-white text-primary-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  {[
                    {
                      title: "Our Mission",
                      content:
                        "Empower businesses with innovative digital marketing solutions that drive growth and success in the digital era.",
                    },
                    {
                      title: "Our Vision",
                      content:
                        "To be the leading provider of AI-powered marketing solutions, helping businesses worldwide achieve their full potential.",
                    },
                    {
                      title: "Our Values",
                      content:
                        "Innovation, transparency, results-driven approach, and unwavering commitment to client success.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                      <h3 className="text-2xl font-bold mb-3 text-primary-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
