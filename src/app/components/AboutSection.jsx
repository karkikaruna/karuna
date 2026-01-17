"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, BookOpen, MapPin } from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code size={18} />,
    content: [
      "C",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Python",
      "Arduino",
      "Raspberry Pi",
    ],
  },
  {
    title: "Education",
    id: "education",
    icon: <BookOpen size={18} />,
    content: [
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
    ],
  },
];

const SKILL_COLORS = [
  { gradient: "from-[#00f5d4] to-[#48bfe3]", shadow: "shadow-cyan-400/50 hover:shadow-cyan-400/80" },
  { gradient: "from-[#ff6b6b] to-[#f0a6ca]", shadow: "shadow-pink-400/50 hover:shadow-pink-400/80" },
  { gradient: "from-[#ffd6a5] to-[#ff758f]", shadow: "shadow-orange-400/50 hover:shadow-orange-400/80" },
  { gradient: "from-[#845ec2] to-[#d65db1]", shadow: "shadow-purple-400/50 hover:shadow-purple-400/80" },
  { gradient: "from-[#00b4d8] to-[#90e0ef]", shadow: "shadow-blue-400/50 hover:shadow-blue-400/80" },
  { gradient: "from-[#f72585] to-[#7209b7]", shadow: "shadow-pink-700/50 hover:shadow-pink-700/80" },
];

const TabButton = ({ active, children, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all
      ${active
        ? "bg-hover-color text-white shadow-lg"
        : "bg-third-background/40 text-text hover:bg-third-background/70"}
    `}
  >
    {children}
  </motion.button>
);

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id="about" className="bg-background text-text py-20 relative overflow-hidden">

     
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-hover-color/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-third-background/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
       
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          About Me
        </motion.h2>
        <div className="w-24 h-1 bg-hover-color mx-auto mb-12 rounded-full" />

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              active={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.icon}
              {t.title}
            </TabButton>
          ))}
        </div>

        
        <div className="bg-second-background/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
          <AnimatePresence mode="wait">

          
            {tab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              >
                {activeTab.content.map((skill, index) => {
                  const color = SKILL_COLORS[index % SKILL_COLORS.length];
                  return (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                      transition={{ type: "tween", duration: 0.4 }}
                      className={`
                        px-5 py-2 rounded-2xl
                        bg-gradient-to-r ${color.gradient}
                        text-white font-semibold
                        text-center
                        ${color.shadow}
                        backdrop-blur-sm bg-opacity-30
                        cursor-pointer
                        transition-all duration-300
                      `}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>
            )}

            {tab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {activeTab.content.map((edu, index) => (
                  <div
                    key={index}
                    className="
                      p-6 rounded-xl
                      bg-[#162338]
                      border-l-4 border-[#00b4d8]
                      shadow-lg
                      transition-all
                      hover:shadow-cyan-500/20
                    "
                  >
                    <h3 className="text-xl font-semibold text-[#e0e1dd]">
                      {edu.title}
                    </h3>

                    <p className="text-sm text-[#94a3b8] mt-1">{edu.name}</p>

                    <div className="flex items-center gap-1 text-sm text-[#7dd3fc] mt-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-sm text-[#7dd3fc] mt-1">{edu.period}</p>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

