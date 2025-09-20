import React from "react";
import { SectionContainer } from "../Section";
import { CardSosial } from "../../ui/Card";
import { AboutConstant } from "./AboutSection.constants";

const AboutSection: React.FC = () => {
  return (
    <SectionContainer
      id="about"
      title="End-to-End IT Solutions That Drive Results"
      subtitle="From strategy to execution, we deliver solutions that grow your business."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-6 md:mt-16 justify-center items-center">
        {AboutConstant.map((d, i) => (
          <CardSosial numberText={d.numberText} subText={d.subText} key={i} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
