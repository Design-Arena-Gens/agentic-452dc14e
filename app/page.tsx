"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
