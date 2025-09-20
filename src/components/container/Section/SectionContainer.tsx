import React from "react";

type SectionContainerProps = {
  title: string;
  subtitle: string;
  id?: string;
  isCenter?: boolean;
  children: React.ReactNode;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  subtitle,
  isCenter = true,
  children,
  id,
}) => {
  return (
    <section className="px-4 md:px-35 py-10 md:py-20" id={id}>
      {/* Title Section */}
      <div className={isCenter ? "text-center" : "text-left"}>
        <div className="font-bold mb-3">
          <span className="inline md:hidden display-sm">{title}</span>
          <span className="hidden md:inline display-xl">{title}</span>
        </div>
        {/* Subtitle Section*/}
        <div className="text-[#717680] dark:text-[#A4A7AE] mb-10 md:mb-16">
          <span className="text-sm md:text-lg">{subtitle}</span>
        </div>
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
