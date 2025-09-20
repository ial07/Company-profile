import React, { useState } from "react";
import { FaqConstant } from "./FaqSection.constants";

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const handleChange = (index: number) => {
    setActiveIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // remove
          : [...prev, index] // add
    );
  };

  return (
    <section className="px-4 md:px-35 py-10 md:py-20" id="faq">
      {/* Title Section */}
      <div className="inline md:flex justify-between items-baseline">
        <div className="font-bold mb-3 md:w-100">
          <span className="inline md:hidden display-sm">
            Need Help? Start Here.
          </span>
          <span className="hidden md:inline display-xl">
            Need Help? Start Here.
          </span>
        </div>
        {/* Subtitle Section*/}
        <div className="text-[#717680] dark:text-[#A4A7AE] mb-10 md:mb-16 md:text-right md:w-50">
          <span className="text-sm md:text-lg">
            Everything you need to know — all in one place.
          </span>
        </div>
      </div>
      <hr className="border border-[#DFDFDF] dark:border-[#252B37] mb-6 md:mb-12" />
      <div className="inline md:flex gap-18">
        <div className="w-full">
          {FaqConstant.map((d) => {
            const isActive = activeIndex.includes(d.id);
            return (
              <div
                className="border-b border-[#DFDFDF] dark:border-[#252B37] py-7"
                key={d.id}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="inline md:hidden text-lg font-bold">
                    {d.title}
                  </span>
                  <span className="hidden md:inline display-xs font-bold">
                    {d.title}
                  </span>

                  {/* Icon toggle */}
                  <button
                    onClick={() => handleChange(d.id)}
                    className="ml-2 focus:outline-none"
                    aria-expanded={isActive}
                    aria-controls={`help-${d.id}`}
                  >
                    {isActive ? (
                      // Minus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-primary-500 cursor-pointer transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      // Plus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-primary-500 cursor-pointer transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Expandable content */}
                {isActive && (
                  <p id={`help-${d.id}`} className="pt-4">
                    {d.subtitle}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-100 rounded-3xl p-6 bg-primary-300 h-fit">
          <span className="inline md:hidden display-sm font-bold text-white">
            Let’s talk it through
          </span>
          <span className="hidden md:inline display-lg font-bold text-white">
            Let’s talk it through
          </span>
          <p className="text-sm md:text-lg mt-1 text-white">
            book a free consultation with our team.
          </p>
          <img
            src="./assets/img/Help-image.png"
            alt="help-img"
            className="my-6"
          />
          <button className="text-md md:text-lg shadow-inner w-full bg-black dark:bg-white hover:bg-white hover:dark:bg-black text-white hover:text-black dark:text-black hover:dark:text-white font-bold p-2 rounded-full">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
