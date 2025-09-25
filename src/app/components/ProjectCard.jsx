import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-third-bg hover:shadow-2xl transition-all duration-300 border border-bordercolor group">

      <div
        className="h-52 md:h-64 relative"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-background bg-opacity-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-12 w-12 border-2 flex items-center justify-center rounded-full border-bordercolor hover:border-white transition-all duration-300"
          >
            <CodeBracketIcon className="h-7 w-7 text-textcolor group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 flex items-center justify-center rounded-full border-bordercolor hover:border-white transition-all duration-300"
          >
            <EyeIcon className="h-7 w-7 text-textcolor group-hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="p-5 bg-background">
        <h5 className="text-xl font-semibold text-white mb-2 group-hover:text-fourth-bg transition-colors duration-300">
          {title}
        </h5>
        <p className="text-textcolor text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

