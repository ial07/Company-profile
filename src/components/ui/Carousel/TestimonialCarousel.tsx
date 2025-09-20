import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Custom hook to detect if screen is md or larger
function useIsMd() {
  const [isMd, setIsMd] = React.useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false
  );

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", handler);
    setIsMd(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMd;
}

type CarouselProps = {
  children: React.ReactNode;
};

const TestimonialCarousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMd = useIsMd();

  // Convert children to array for mapping
  const slidesArray = React.Children.toArray(children);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: isMd ? 2.5 : 1,
      spacing: 16,
      origin: "center",
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Handle bullet click
  const goToSlide = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {slidesArray.map((slide, idx) => (
          <div
            key={idx}
            className={`
              keen-slider__slide flex items-center justify-center
              transition-all duration-500 py-10
              ${
                currentSlide === idx
                  ? "scale-100 opacity-100 z-30"
                  : "scale-90 opacity-50 z-0"
              }
            `}
          >
            {slide}
          </div>
        ))}
      </div>
      {/* Bullets */}
      <div className="flex justify-center mt-4 gap-2">
        {slidesArray.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`
              w-3 h-3 rounded-full 
              transition-colors duration-300
              focus:outline-none mt-5 md:mt-10
              ${
                currentSlide === idx
                  ? "bg-primary-200"
                  : "bg-[#DEDCDC] dark:bg-neutral-900"
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
