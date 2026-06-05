"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, BookOpen, MapPin, Monitor, Server, Terminal, Database, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "programming",
    label: "Programming",
    icon: Terminal,
    accent: "#e0e1dd",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    id: "web",
    label: "Web Development",
    icon: Monitor,
    accent: "#e0e1dd",
    skills: ["HTML", "CSS", "Javascript", "React", "Next.js"],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    accent: "#e0e1dd",
    skills: ["MongoDB","Supabase"],
  },
  {
    id: "robotics",
    label: "Robotics",
    icon: Cpu,
    accent: "#e0e1dd",
    skills: ["Arduino", "Esp32","Raspberry Pi", "Ros2"],
  },
];

const EDUCATION = [
  {
        title: "Bachelor in Computer Engineering",
        period: "2024 – Present",
        name: "IOE Purwanchal Campus",
        location: "Dharan, Nepal",
      },
      {
        title: "Higher Secondary School (NEB)",
        period: "2021 – 2023",
        name: "Liverpool International College",
        location: "New Baneshwor, Kathmandu",
      },
      {
        title: "Secondary Education Examination (SEE)",
        period: "2020",
        name: "Sindhuli Little Flower English Boarding School",
        location: "Dudhauli, Sindhuli",
      },
];

const tabs = [
  { id: "skills", label: "Skills", icon: Code },
  { id: "education", label: "Education", icon: BookOpen },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section
      id="about"
      style={{ backgroundColor: "#0d1b2a" }}
      className="py-24 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">

       
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
            About Me
          </h2>
          <div
            style={{ backgroundColor: "white/10" }}
            className="w-10 h-0.5 mx-auto rounded-full"
          /></div>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: tab === id ? "#38bdf8" : "rgba(255,255,255,0.05)",
                color: tab === id ? "#0d1b2a" : "#94a3b8",
                border: tab === id ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {tab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {SKILL_CATEGORIES.map(({ id, label, icon: Icon, accent, skills }) => (
                <div
                  key={id}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "#111f2e",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
               
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="flex items-center justify-center w-7 h-7 rounded-lg"
                      style={{ backgroundColor: `${accent}18` }}
                    >
                      <Icon size={14} style={{ color: accent }} />
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: accent }}
                    >
                      {label}
                    </span>
                  </div>

              
                  <div
                    className="mb-4"
                    style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }}
                  />

               
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          color: "#cbd5e1",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {tab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "#111f2e",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "2px solid #38bdf8",
                  }}
                >
                  <h3 className="text-base font-semibold text-white mb-1">{edu.title}</h3>
                  {edu.name && <p className="text-sm text-slate-400">{edu.name}</p>}
                  {edu.location && (
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  {edu.period && (
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
