interface CardProps {
  type?: string;
  logoUrl?: string;
  position?: string;
  duration?: string;
  description?: string;
  company?: string;
  institution?: string;
  qualification?: string;
  name?: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  company,
  institution,
  qualification,
  name,
  icon,
}) => {
  return (
    <div className="w-full h-[300px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] border border-accent/80 bg-[#f4ffff] rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rouded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
