import Link from "next/link";

const Logo = ({ light = false }: { light?: boolean }) => {
  // determine the logo color based on light prop

  const colorClass = light ? "text-white" : "text-primary"; // default to black

  return (
    <div>
      <Link href="/" className="font-primary text-2xl tracking-[4px]">
        <span className={colorClass}>Maor Saadia</span>
      </Link>
    </div>
  );
};

export default Logo;
