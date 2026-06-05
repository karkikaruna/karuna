import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-third-bg/40 backdrop-blur-md border border-white/10 hover:border-white/10 hover:shadow-white/10 transition-all duration-500 group">
      <div
        className="h-56 md:h-64 relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-6">
          <Link
            href={gitUrl}
            className="h-12 w-12 border-2 border-white flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            <CodeBracketIcon className="h-7 w-7 text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 border-white flex items-center justify-center rounded-full hover:bg-[#00d4ff] transition"
          >
            <EyeIcon className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h5 className="text-xl md:text-2xl font-bold text-white mb-2 
          transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#7f5af0]">
          {title}
        </h5>
        <p className="text-textcolor text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;





