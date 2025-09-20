import React from "react";
import ButtonComp from "../../ui/ButtonComp";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="md:w-[75%] px-5 md:px-[10%] md:flex flex-col justify-center h-[inherit] bg-transparent">
        <div className="font-bold w-[inherit] mt-[20%] z-20">
          <span className="inline md:hidden display-lg">
            Your Tech Partner for
          </span>
          <span className="hidden md:inline display-3xl">
            Your Tech Partner for
          </span>
        </div>
        <div className="font-bold w-[inherit] text-primary-200 z-20">
          <span className="inline md:hidden display-lg">Smarter Growth</span>
          <span className="hidden md:inline display-3xl">Smarter Growth</span>
        </div>
        <p className="text-md md:text-xl font-semibold w-[inherit] mt-2 z-20">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
        <div className="my-10">
          <ButtonComp label="Let’s Talk" />
        </div>
      </div>

      <div className="inline md:absolute -top-25 right-0 z-10">
        {/* Light mode image */}
        <img
          src="./assets/img/hero-Light.png"
          alt="hero-light"
          className="lg:w-full md:w-[500px] inline dark:hidden"
        />
        {/* Dark mode image */}
        <img
          src="./assets/img/hero-Dark.png"
          alt="hero-dark"
          className="lg:w-full md:w-[500px] hidden dark:inline"
        />
      </div>
    </div>
  );
};

export default HeroSection;
