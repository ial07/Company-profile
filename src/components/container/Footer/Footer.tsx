import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="md:px-35 py-10 md:py-20">
      <div className="mx-4 md:mx-0 p-5 md:p-10 bg-neutral-50 border-[#DFDFDF] dark:bg-neutral-950 border-1 dark:border-neutral-800 rounded-3xl">
        <div className="md:flex justify-between items-start">
          <div className="md:hidden flex items-center gap-2 mb-6" id="logo">
            <img src="./assets/icon/icon-logo.svg" alt="logo" />
            <h1 className="display-xs font-semibold">CompTech</h1>
          </div>
          <span className="inline md:hidden display-sm font-bold md:w-[30%] w-[90%]">
            LET'S DISCUSS YOUR IDEAS
          </span>
          <span className="hidden md:inline display-lg font-bold md:w-[30%] w-[90%]">
            LET'S DISCUSS YOUR IDEAS
          </span>
          <div className="hidden md:flex gap-2 items-center" id="logo">
            <img src="./assets/icon/icon-logo.svg" alt="logo" />
            <h1 className="text-xl font-semibold">CompTech</h1>
          </div>
        </div>
        <hr className="my-6 md:my-15" />
        <div className="md:flex justify-between">
          <div>
            <ul className="w-100 md:flex md:justify-between">
              <li className="my-2 md:my-0">
                <a href="#about">About</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#service">Service</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#projects">Projects</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="my-2 md:my-0">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="mt-7 md:mt-0">
            <ul className="flex md:justify-between">
              <li>
                <a href="#facebook">
                  <span
                    className="border border-[#DFDFDF] dark:border-neutral-800 rounded-full w-10 h-10 me-1 
                   inline-block bg-black dark:bg-white 
                   mask mask-center mask-contain mask-no-repeat"
                    style={{ maskImage: "url('./assets/icon/Facebook.svg')" }}
                  />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <span
                    className="border border-[#DFDFDF] dark:border-neutral-800 rounded-full w-10 h-10 mx-1 
                   inline-block bg-black dark:bg-white 
                   mask mask-center mask-contain mask-no-repeat"
                    style={{ maskImage: "url('./assets/icon/Instagram.svg')" }}
                  />
                </a>
              </li>
              <li>
                <a href="#linkedin">
                  <span
                    className="border border-[#DFDFDF] dark:border-neutral-800 rounded-full w-10 h-10 mx-1 
                   inline-block bg-black dark:bg-white 
                   mask mask-center mask-contain mask-no-repeat"
                    style={{ maskImage: "url('./assets/icon/Linkedin.svg')" }}
                  />
                </a>
              </li>
              <li>
                <a href="#tiktok">
                  <span
                    className="border border-[#DFDFDF] dark:border-neutral-800 rounded-full w-10 h-10 ms-1 
                   inline-block bg-black dark:bg-white 
                   mask mask-center mask-contain mask-no-repeat"
                    style={{ maskImage: "url('./assets/icon/Tik Tok.svg')" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
