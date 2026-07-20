"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-background py-20 overflow-hidden"
    >

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-fourth-bg rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-third-bg rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-6 gap-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-lg text-textcolor">Hi</p>

          <h1 className="text-5xl font-extrabold mt-3 leading-tight text-textcolor">
            I&apos;m{" "}
            <span className="text-textcolor text-transparent">
              Karuna
            </span>
          </h1>

          <motion.h2
            className="text-2xl font-medium text-textcolor mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            an <span className="text-hovercolor">Undergraduate Computer Engineering Student</span>
          </motion.h2>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-fourth-bg text-header font-semibold rounded-xl shadow-md hover:bg-hovercolor hover:text-header transition"
               >
              View Projects
              </a>
             <a
              href="#contact"
              className="px-6 py-3 border border-hovercolor text-hovercolor rounded-xl shadow-md hover:bg-hovercolor hover:text-header transition"
               >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-third-bg to-bordercolor">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/images/profile.jpeg"
                  alt="hero image"
                  fill
                  className="object-cover relative z-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


