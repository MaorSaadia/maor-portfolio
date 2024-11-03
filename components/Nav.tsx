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
  containerStyles = "",
  listStyles = "",
  linkStyles = "",
  spy = true,
}) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.name}
            spy={spy}
            smooth
            activeClass="active"
            className={linkStyles}
          >
            {link.name}
          </ScrollLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;