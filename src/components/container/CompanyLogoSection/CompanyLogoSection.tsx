import React from "react";

const CompanyLogoSection: React.FC = () => {
  return (
    <section className="inline w-full">
      <h3 className="text-center display-xs font-bold md:mt-32 z-20">
        Trusted by Global Innovators &amp; Leading Brands
      </h3>
      <div>
        <img
          className="inline dark:hidden grayscale w-[-webkit-fill-available]"
          src="./assets/img/trusted-light.png"
          alt="trusted"
        />
        <img
          className="hidden dark:inline grayscale w-[-webkit-fill-available]"
          src="./assets/img/trusted-dark.png"
          alt="trusted"
        />
      </div>
    </section>
  );
};

export default CompanyLogoSection;
