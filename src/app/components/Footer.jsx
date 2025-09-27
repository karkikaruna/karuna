import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#415a77] bg-[#1b263b] text-[#e0e1dd]">
      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-center lg:text-left">

        <span className="text-2xl font-extrabold tracking-wide 
                         text-textcolor">
          Karuna
        </span>

        <div className="flex flex-col items-center lg:items-end gap-2">
          <p className="text-3px text-textcolor">
            © {new Date().getFullYear()} Karuna. All rights reserved.
          </p>
          <p className=" font-light text-[#e0e1dd] italic text-4px
                        hover:text-[#00b4d8] transition-colors duration-300">
            Have a great Day❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





