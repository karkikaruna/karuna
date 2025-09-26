"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "KD Bot",
    description:
      "KD-BOT is a simple personal assistant model programmed in C++. It includes user management functions, chat systems, calculators, and a simple TicTacToe game. A compact all-in-one solution.",
    image: "/images/projects/kd.png",
    tag: ["All"],
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "Toll Management System",
    description:
      "A Toll Management System prototype developed during a Robotics Club Hackathon. Demonstrates an automated toll booth using embedded components and sensors.",
    image: "/images/projects/toll_management.png",
    tag: ["All", "Robotics"],
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="bg-background py-20 px-6 md:px-12 relative">

      <div className="text-center mb-14">
  <h2 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block">
    My Projects
    <span className="absolute left-0 bottom-[-8px] h-1 w-full rounded-full 
      bg-gradient-to-r from-[#00d4ff] via-[#7f5af0] to-[#00d4ff] shadow-[0_0_8px_rgba(127,90,240,0.6)]">
    </span>
  </h2>
</div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Robotics"
          isSelected={tag === "Robotics"}
        />
      </div>

      <ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


