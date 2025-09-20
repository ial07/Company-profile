import React from "react";

type CardSosialProps = {
  numberText: string;
  subText: string;
};

const CardSosial: React.FC<CardSosialProps> = ({ numberText, subText }) => {
  return (
    <div className="h-[173px] w-[173px] md:h-[275px] md:w-[275px] bg-[#FAFAFA] dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 rounded-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-primary-200 font-bold">
        <span className="inline md:hidden display-lg">{numberText}</span>
        <span className="hidden md:inline display-2xl">{numberText}</span>
      </h1>
      <h2 className="text-sm md:text-xl font-semibold">{subText}</h2>
    </div>
  );
};

export default CardSosial;
