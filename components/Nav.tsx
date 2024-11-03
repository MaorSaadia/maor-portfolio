"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home" },
  { name: "about" },
  { name: "journey" },
  { name: "work" },
  { name: "contact" },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  spy?: boolean;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  listStyles,
  linkStyles,
  spy,
}) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              to={link.name}
              smooth
              activeClass="active"
              className={linkStyles}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
