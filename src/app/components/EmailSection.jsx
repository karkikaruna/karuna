"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import FacebookIcon from "../../../public/facebook.svg";
import InstagramIcon from "../../../public/instagram.svg";
import TwitterIcon from "../../../public/x.svg";
import GmailIcon from "../../../public/gmail.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        setErrorMessage(resData.message || "Failed to send email.");
      }
    } catch (err) {
      setErrorMessage("Failed to send email. Please try again later.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative grid md:grid-cols-2 gap-8 py-24 px-6 md:px-16 lg:px-24 bg-background overflow-hidden"
    >
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fourth-bg/20 rounded-full blur-2xl"></div>

      <div className="z-10">
        <h5 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative inline-block">
          Contact Me
          <span className="absolute -bottom-1 left-0 w-3/4 h-1 bg-primary-500 rounded-full"></span>
        </h5>
        <p className="text-textcolor opacity-80 leading-relaxed mb-6 max-w-md">
        I would love to hear from you.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <a
            href="mailto:yourgmail@gmail.com"
            className="flex items-center gap-3 text-textcolor hover:text-white group transition"
          >
            <Image
              src={GmailIcon}
              alt="Gmail"
              className="w-5 h-5 group-hover:scale-110 group-hover:brightness-125 transition"
            />
            <span className="border-b border-transparent group-hover:border-white transition">
              karunakarki840@gmail.com
            </span>
          </a>
          <a
            href="tel:+9779812345678"
            className="flex items-center gap-3 text-textcolor hover:text-white group transition"
          >
            
          </a>
        </div>

        <div className="flex gap-4 flex-wrap">
          {[
            { href: "https://github.com/karkikaruna", icon: GithubIcon, alt: "Github" },
            { href: "https://www.linkedin.com/in/karunakarki/", icon: LinkedinIcon, alt: "LinkedIn" },
            { href: "https://x.com/userkaruna", icon: TwitterIcon, alt: "x" },
            { href: "https://www.facebook.com/karuna.karki.452351", icon: FacebookIcon, alt: "Facebook" },
            { href: "https://www.instagram.com/_karuna.karki_/", icon: InstagramIcon, alt: "Instagram" },
            
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
              hover:shadow-[0_0_20px_rgba(0,153,255,0.7)] transition transform hover:scale-110"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                className="w-6 h-6 opacity-80 hover:opacity-100 transition"
              />
            </Link>
          ))}
        </div>
      </div>
      
<div className="z-10">
  <form
    className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8"
    onSubmit={handleSubmit}
  >

    {emailSubmitted && (
      <p className="text-green-400 text-sm mb-4 bg-green-900/20 px-3 py-2 rounded-lg border border-green-700/50">
        ✅ Your message has been sent successfully!
      </p>
    )}

    {errorMessage && (
      <p className="text-red-400 text-sm mb-4 bg-red-900/20 px-3 py-2 rounded-lg border border-red-700/50">
        ❌ {errorMessage}
      </p>
    )}

    <div className="mb-6">
      <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
      Email:
      </label>
      <input
        name="email"
        type="email"
        id="email"
        required
        className="bg-background/70 border border-bordercolor placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-primary-500 outline-none"
        placeholder=""
      />
    </div>

    <div className="mb-6">
      <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
        Subject:
      </label>
      <input
        name="subject"
        type="text"
        id="subject"
        required
        className="bg-background/70 border border-bordercolor placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-primary-500 outline-none"
        placeholder=" "
      />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        rows="5"
        className="bg-background/70 border border-bordercolor placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
        placeholder=" "
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className={`relative bg-gradient-to-r from-primary-500 via-third-bg to-fourth-bg 
        hover:from-fourth-bg hover:via-primary-600 hover:to-third-bg 
        transition-all duration-300 text-white font-bold py-3 px-6 rounded-xl 
        shadow-lg hover:shadow-[0_8px_25px_rgba(0,0,0,0.8)] transform hover:scale-105
        cursor-pointer ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  </form>
</div>

    </section>
  );
};

export default EmailSection;




