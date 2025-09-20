import React, { useState } from "react";
import { SectionContainer } from "../Section";
import { ProcessConstant } from "./ProcessSection.constants";

const ProcessSection: React.FC = () => {
  // Store the active indices as an array
  const [activeIndex, setActiveIndex] = useState<number[]>(
    Array.from({ length: ProcessConstant.length }, (_, i) => i)
  );

  // Push or pop index from activeIndex array
  const handleChange = (index: number) => {
    setActiveIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // pop
          : [...prev, index] // push
    );
  };
  return (
    <SectionContainer
      title="Our Process"
      subtitle="Clear steps. Smart execution. Results you can count on."
    >
      {ProcessConstant.map((data, index) => (
        <div className="flex items-center gap-6 my-4" key={data.id}>
          <div
            className={`bg-[#FAFAFA] dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 rounded-2xl p-4 md:p-6 w-full hidden md:inline ${
              index % 2 === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-md md:text-lg font-bold">{data.title}</h3>
              <div
                className="inline cursor-pointer transition-transform duration-300 ease-in-out"
                onClick={() => handleChange(index)}
              >
                <img
                  src={
                    activeIndex.includes(index)
                      ? "./assets/icon/chevron-up.svg"
                      : "./assets/icon/chevron-down.svg"
                  }
                  alt={activeIndex.includes(index) ? "icon-up" : "icon-down"}
                  className="transition duration-300 invert brightness-100 contrast-0"
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex.includes(index)
                  ? "max-h-24 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {activeIndex.includes(index) && (
                <p className="text-sm md:text-md text-neutral-400">
                  {data.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="relative flex flex-col items-center w-12">
            {index > 0 && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1/20 h-30 bg-neutral-800 opacity-50 z-0" />
            )}
            <div className="relative z-10 rounded-full bg-primary-200 flex justify-center items-center w-12 h-12">
              <span className="text-white text-lg">{index + 1}</span>
            </div>
          </div>
          <div
            className={`bg-[#FAFAFA] dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 rounded-2xl p-4 md:p-6 w-full ${
              index % 2 === 1 ? "opacity-100" : "opacity-100 md:opacity-0"
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-md md:text-lg font-bold">{data.title}</h3>
              <div
                className="inline cursor-pointer transition-transform duration-300 ease-in-out"
                onClick={() => handleChange(index)}
              >
                <img
                  src={
                    activeIndex.includes(index)
                      ? "./assets/icon/chevron-up.svg"
                      : "./assets/icon/chevron-down.svg"
                  }
                  alt={activeIndex.includes(index) ? "icon-up" : "icon-down"}
                  className="transition duration-300 invert brightness-100 contrast-0"
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex.includes(index)
                  ? "max-h-24 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {activeIndex.includes(index) && (
                <p className="text-sm md:text-md text-neutral-400">
                  {data.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default ProcessSection;
