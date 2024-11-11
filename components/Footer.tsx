import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo />
          <div className="text-white/70 font-light">
            Copyright &copy; 2024. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
