import React from "react";

type TabContentProps = {
  tabs: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode[]; // Array of children, one for each tab
};

const TabContent: React.FC<TabContentProps> = ({
  tabs,
  activeIndex,
  setActiveIndex,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <ul className="text-md md:text-xl text-[#AAAAAA] dark:text-[#535862] font-bold w-full md:w-100">
        {tabs.map((t, idx) => (
          <li
            key={t}
            className={`flex items-center gap-2 mb-3 md:mb-6 cursor-pointer hover:text-neutral-500 hover:dark:text-white transition-colors duration-300 ${
              activeIndex === idx ? "text-[#0A0D12] dark:text-white" : ""
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            <span
              className={`-translate-x w-1 h-6 rounded-full transition-colors duration-300 ${
                activeIndex === idx ? "bg-primary-200" : "bg-neutral-600"
              }`}
            />
            {t}
          </li>
        ))}
      </ul>

      <div className="w-full h-70 md:h-110 relative">
        {children.map((child, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-500 ease-in-out absolute inset-0 ${
              idx === activeIndex
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
            aria-hidden={idx !== activeIndex}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;
