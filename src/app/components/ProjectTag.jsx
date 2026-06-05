import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-5 py-2 rounded-full font-medium transition-all duration-300 
        ${isSelected 
          ? "bg-white/10 text-white shadow-lg scale-105" 
          : "bg-white/10 text-gray-300 hover:bg-white/20"}`
      }
    >
      {name}
    </button>
  );
};

export default ProjectTag;
