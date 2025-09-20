import React from "react";

type CardServiceProps = {
  title: string;
  subtitle: string;
};

const CardService: React.FC<CardServiceProps> = ({ title, subtitle }) => {
  return (
    <div className="relative text-start bg-neutral-50 border-[#DEDCDC] dark:bg-neutral-950 border dark:border-neutral-900 rounded-2xl px-5 pb-6 pt-16">
      <img
        src={`./assets/icon/${title}.svg`}
        alt={title}
        className="absolute -top-8 left-5"
      />
      <h3 className="text-md md:text-xl font-bold">{title}</h3>
      <p className="text-sm md:text-md text-neutral-400">{subtitle}</p>
    </div>
  );
};

export default CardService;
