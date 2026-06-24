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
      "KD-BOT is a personal assistant model programmed in C++. It includes user management functions, chat systems, calculators, and a TicTacToe game which can even track user mood and behaves accordingly and tries to make user feel better. It also has....for more visit the url.",
    image: "/images/projects/kd.png",
    tag: ["All"],
    gitUrl: "https://github.com/karkikaruna/KD-bot",
    previewUrl: "https://github.com/karkikaruna/KD-bot",
  },
  {
    id: 2,
    title: "Toll Management System",
    description:
      "An automated Toll Management System prototype that detects vehicles, processes user input, displays relevant information, and controls a barrier, showcasing a simplified and interactive toll collection process.",
    image: "/images/projects/toll_management.png",
    tag: ["All", "Robotics"],
    gitUrl: "https://github.com/karkikaruna/TollManagementSystem",
    previewUrl: "https://github.com/karkikaruna/TollManagementSystem",
  },
  {
    id:3,
    title: "Samsarga",
    description:
       "A full-stack job board where employers post jobs and job seekers apply with resume uploads. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, featuring JWT authentication, role-based access, and Cloudinary file storage. ",
       image: "/images/projects/samsarga.png",
       tag: ["All"],
       gitUrl: "https://github.com/karkikaruna/samsarga",
       previewUrl: "https://github.com/karkikaruna/samsarga",
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
    <span className="absolute left-0 bottom-[-8px] h-1 w-full rounded-full ]">
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


