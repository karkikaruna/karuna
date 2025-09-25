"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavLink = ({ href, title, active, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative px-1 py-2 text-[var(--color-text)] transition-colors duration-200
        ${active ? "font-bold after:w-full" : "after:w-0 hover:after:w-full"} 
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-hover)] after:w-0 after:transition-all
      `}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", title: "Home", path: "#home" },
    { id: "about", title: "About", path: "#about" },
    { id: "projects", title: "Projects", path: "#projects" },
    { id: "contact", title: "Contact Me", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setNavbarOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-header shadow-lg">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-6 py-3 lg:py-5">

        <Link
          href="#home"
          className="text-2xl md:text-4xl font-bold tracking-wide text-[var(--color-text)] hover:text-[var(--color-hover)] transition-colors"
          onClick={handleLinkClick}
        >
          KARUNA
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-bordercolor text-textcolor hover:text-hovercolor transition-colors"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8">
          {sections.map((link) => (
            <li key={link.id}>
              <NavLink
                href={link.path}
                title={link.title}
                active={activeSection === link.id}
                onClick={handleLinkClick}
              />
            </li>
          ))}
        </ul>
      </div>

      {navbarOpen && (
        <div className="md:hidden bg-header shadow-lg px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {sections.map((link) => (
              <li key={link.id}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  active={activeSection === link.id}
                  onClick={handleLinkClick}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


