"use client";
import React, { useState, useEffect, useRef } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Next.js</li>
        <li>Python</li>
        <li>Arduino</li>
        <li>C</li>
        <li>C++</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Bachelor in Computer Engineering (ongoing)</li>
        <li>IOE, Purwanchal Campus</li>
        <li>Completed HighSchool from Liverpool International College</li>
      </ul>
    ),
  },
];

const TabButton = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium transition-all duration-300 whitespace-nowrap cursor-pointer
        ${active
          ? "text-hover-color border-b-2 border-hover-color"
          : "text-textcolor hover:text-hover-color hover:border-b-2 hover:border-hover-color"
        }`}
    >
      {children}
    </button>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [minHeight, setMinHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setMinHeight(contentRef.current.scrollHeight);
    }
  }, [tab]);

  return (
    <section className="text-textcolor bg-background" id="about">
      <div className="py-16 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          About Me
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
          I am a Full-Stack Web Developer and Computer Engineering undergraduate
          passionate about building dynamic and scalable web applications using
          Next.js, React, Node.js, and MongoDB. Skilled in Python, C/C++, and
          Arduino, I enjoy bridging software and hardware, with a strong
          interest in robotics. I also serve as an executive member of the
          Robotics Club at IOE, Purwanchal Campus.
        </p>

        <div className="flex justify-center md:justify-start gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-hover-color scrollbar-track-third-background">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              active={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.title}
            </TabButton>
          ))}
        </div>

        <div
          ref={contentRef}
          style={{ minHeight: `${minHeight}px` }}
          className="mt-6 p-6 bg-third-background rounded-xl shadow-md transition-all duration-300"
        >
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
