import React, { useState } from "react";
import { SectionContainer } from "../Section";
import TabContent from "../../ui/TabContent";
import { IndustryConst } from "./IndustrySection.contants";

const IndustrySection: React.FC = () => {
  const TabsIndustryTitle: string[] = IndustryConst.map((d) => d.title);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SectionContainer
      title="Built for Your Industry"
      subtitle="We’ve helped companies across industries launch smarter, faster, and more securely."
      isCenter={false}
    >
      <TabContent
        tabs={TabsIndustryTitle}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {IndustryConst.map((d) => (
          <div key={d.key}>
            <p className="text-sm md:text-lg mb-2 md:mb-5">{d.paragraph}</p>

            <div className="w-full h-55 md:h-100 overflow-hidden rounded-3xl">
              <img
                src={`./assets/img/Industry-${d.key}.png`}
                alt={`Industry-${d.key}`}
                className="bg-cover bg-center w-full h-55 md:h-100"
              />
            </div>
          </div>
        ))}
      </TabContent>
    </SectionContainer>
  );
};

export default IndustrySection;
