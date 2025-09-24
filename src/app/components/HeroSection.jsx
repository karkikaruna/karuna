"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-6 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-textcolor text-lg">Hi</p>
          
          <h1 className="text-5xl font-extrabold text-textcolor mt-2">
            I&apos;m <span className="text-textcolor">Karuna</span>
          </h1>
          
          <h2 className="text-2xl font-medium text-textcolor mt-3">
            a Full Stack Web Developer
          </h2>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
             >
  <div className="rounded-full overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    <Image
      src="/images/image1.jpeg"
      alt="hero image"
      fill
      className="object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


