"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title:"KD Bot",
    description: "KD-BOT is a simple personal assistant model programmed in C++.It includes user management functions, chat systems, calculators, and a simple tictactoe game. The bot is an all-in-one solution that incorporates a user-friendly interface to manage your day to day life.",
    image: "/images/projects/kd.png",
    tag: ["All"],
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "Toll Management System",
    description: "This project is a Toll Management System prototype developed during the Mini Hackathon organized by the Robotics Club.It demonstrates a simplified automated toll booth using embedded components and sensors.",
    image: "/images/projects/toll_management.png",
    tag: ["All","Robotics"],
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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