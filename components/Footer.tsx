import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-12 bg-accent/60 dark:bg-accent/90">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo />
          <div className="text-black/60 dark:text-white/60 font-light">
            Copyright &copy; 2024. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
