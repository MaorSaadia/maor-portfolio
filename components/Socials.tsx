import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/maorsaadia/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/MaorSaadia/",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles: string;
  isDarkMode?: boolean;
}

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconStyles,
  isDarkMode,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${iconStyles} ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
            target="_blank"
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
