"use client";

import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "journey",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[48px] z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          {/* logo */}
          <Logo />
          {/* nav & socials */}
          <div>nav</div>
          <div>socials</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
