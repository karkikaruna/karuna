import Link from "next/link";

const NavLink = ({ href, title, active }) => {
  return (
    <Link
      href={href}
      className={`
        relative px-1 py-2 text-[var(--color-text)] transition-colors duration-200
        ${active ? "font-bold after:w-full" : "hover:after:w-full"} 
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-hover)] after:w-0 after:transition-all
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;

