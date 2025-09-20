import React from "react";
import { SectionContainer } from "../Section";
import { CardService } from "../../ui/Card";
import { ServiceConst } from "./ServiceSection.contants";

const ServiceSection: React.FC = () => {
  return (
    <SectionContainer
      id="service"
      title="Smart IT Solutions That Grow With You"
      subtitle="Tailored tech to boost efficiency, security, and results."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card Smart IT */}
        {ServiceConst.map((cs, i) => (
          <CardService key={i} title={cs.title} subtitle={cs.subtitle} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServiceSection;
