import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="font-primary text-2xl tracking-[4px]">
        <span className="text-primary dark:text-white">Maor Saadia</span>
      </Link>
    </div>
  );
};

export default Logo;
