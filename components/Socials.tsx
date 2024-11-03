import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/maorsaadia/",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
