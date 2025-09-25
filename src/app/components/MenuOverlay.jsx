import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, pathname }) => {
  return (
    <ul className="flex flex-col py-6 items-center space-y-4 bg-header shadow-md">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            active={pathname === link.path}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

