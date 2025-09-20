import React, { useState, useEffect } from "react";
import ButtonComp from "../../ui/ButtonComp";

const Headers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent background scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 py-4 md:py-5 px-6 md:px-35 flex justify-between items-center backdrop-blur-sm z-20 bg-white/80 dark:bg-black/80">
      {/* Logo */}
      <div className="flex gap-2 items-center" id="logo">
        <img src="./assets/icon/icon-logo.svg" alt="logo" />
        <h1 className="hidden md:inline display-xs font-semibold text-black dark:text-white">
          ComTech
        </h1>
        <h1 className="inline md:hidden text-xl font-semibold text-black dark:text-white">
          ComTech
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:inline">
        <ul className="w-100 md:flex md:justify-between gap-6">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:inline">
        <ButtonComp label="Let’s Talk" />
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer text-black dark:text-white"
      >
        {/* // Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed py-4 px-6 inset-0 h-dvh w-full bg-white dark:bg-black flex flex-col gap-8 text-xl z-30">
          <div className="flex justify-between items-center">
            {/* Logo Mobile */}
            <div className="flex gap-2 items-center" id="logo">
              <img src="./assets/icon/icon-logo.svg" alt="logo" />
              <h1 className="hidden md:inline display-xs font-semibold text-black dark:text-white">
                ComTech
              </h1>
              <h1 className="inline md:hidden text-xl font-semibold text-black dark:text-white">
                ComTech
              </h1>
            </div>

            {/* // Close Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-pointer text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#service" onClick={() => setIsOpen(false)}>
                Service
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
            </li>
          </ul>
          <ButtonComp label="Let’s Talk" />
        </div>
      )}
    </header>
  );
};

export default Headers;
