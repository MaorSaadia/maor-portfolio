import Image from "next/image";
import React from "react";

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
  icon?: React.ReactNode;
  level?: "Beginner" | "Intermediate" | "Advanced" | string;
}

interface ProficiencyLevelProps {
  level: "Beginner" | "Intermediate" | "Advanced" | string;
}

const ProficiencyLevel: React.FC<ProficiencyLevelProps> = ({ level }) => {
  const dots = {
    Beginner: [true, false, false],
    Intermediate: [true, true, false],
    Advanced: [true, true, true],
  }[level] || [false, false, false];

  const colors =
    {
      Beginner: "bg-orange-400",
      Intermediate: "bg-yellow-400",
      Advanced: "bg-green-400",
    }[level] || "bg-gray-400";

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium dark:text-white/80">{level}</span>
      <div className="flex gap-1">
        {dots.map((isActive, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              isActive ? colors : "bg-gray-200 dark:bg-gray-600"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  type,
  logoUrl = "",
  position = "",
  duration = "",
  description = "",
  company = "",
  institution = "",
  qualification = "",
  name = "",
  icon = null,
  level,
}) => {
  return (
    <div className="w-full h-[300px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] border border-accent/80 bg-[#f4ffff] dark:bg-[#4b4b4b] rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white dark:bg-black/70 flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2">
              <Image
                src="/assets/journey/shape.svg"
                width={16}
                height={16}
                alt=""
              />
              <h3 className="text-lg font-semibold text-primary dark:text-white/90 text-center mb-0.5">
                {type === "experience"
                  ? position
                  : type === "education"
                  ? qualification
                  : type === "skill"
                  ? name
                  : duration}
              </h3>
            </div>
            <p className="text-base dark:text-white/90">{duration}</p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "skill" ? (
                <div className="w-max xl:w-[300px] h-full relative flex flex-col items-center justify-center gap-2">
                  <div className="text-5xl text-primary/90">{icon}</div>
                  {level && <ProficiencyLevel level={level} />}
                </div>
              ) : (
                <div className="relative w-[300px] h-[38px] xl:h-[44px]">
                  <Image src={logoUrl} fill alt="" className="object-contain" />
                </div>
              )}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                  {type === "experience"
                    ? company
                    : type === "education"
                    ? institution
                    : type === "skill"
                    ? name
                    : null}
                </h3>
                <p className="text-base max-w-[660px] dark:text-white/90">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
