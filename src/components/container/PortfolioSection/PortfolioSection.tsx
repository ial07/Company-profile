import React from "react";
import { SectionContainer } from "../Section";

const PortfolioSection = () => {
  return (
    <SectionContainer
      id="projects"
      title="From Vision to Launch! Projects We’re Proud Of"
      subtitle="Take a closer look at our recent work powering startups, enterprises, and everything in between."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <img
            src="./assets/img/Porto 1.png"
            alt="Porto 1"
            className="w-full rounded-xl"
          />
          <p className="text-sm md:text-md text-primary-200 my-3">
            Landing Page
          </p>
          <p className="text-md md:text-xl font-bold">Portofolio 1</p>
        </div>
        <div>
          <img
            src="./assets/img/Porto 2.png"
            alt="Porto 2"
            className="w-full rounded-xl"
          />
          <p className="text-sm md:text-md text-primary-200 my-3">
            Landing Page
          </p>
          <p className="text-md md:text-xl font-bold">Portofolio 2</p>
        </div>
        <div>
          <img
            src="./assets/img/Porto 3.png"
            alt="Porto 3"
            className="w-full rounded-xl"
          />
          <p className="text-sm md:text-md text-primary-200 my-3">
            Landing Page
          </p>
          <p className="text-md md:text-xl font-bold">Portofolio 3</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PortfolioSection;
