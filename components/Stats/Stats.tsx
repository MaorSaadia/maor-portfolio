import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 3,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 4,
    endCountText: "+",
    text: "Website Built",
  },
  {
    endCountNum: 2,
    endCountText: "+",
    text: "App Built",
  },
  {
    endCountNum: 95,
    endCountText: "+",
    text: "Clients Stastified",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            key={index}
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
          />
        );
      })}
    </section>
  );
};

export default Stats;
