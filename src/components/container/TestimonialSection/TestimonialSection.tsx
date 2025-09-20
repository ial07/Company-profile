import { SectionContainer } from "../Section";
import { TestimonialCarousel } from "../../ui/Carousel";
import { TestimonialConst } from "./TestimonialSection.contants";

const TestimonialSection = () => {
  return (
    <SectionContainer
      id="testimonials"
      title="What Partners Say About Working With Us"
      subtitle="Trusted voices. Real experiences. Proven results."
    >
      <TestimonialCarousel>
        {TestimonialConst.map((d) => (
          <div
            className={`relative w-200 rounded-xl shadow-lg inset-shadow-sm border-[#DEDCDC] dark:border-[#181D27] pt-6 pb-12 px-6 text-center`}
          >
            <img
              src="./assets/img/kutip.png"
              alt="kutip"
              className="absolute -top-6 left-10"
            />
            <div className="flex justify-center mb-4">
              <img src="./assets/img/Rating.png" alt="rating" />
            </div>
            <p className="mb-4">{d.paragraph}</p>
            <h4 className="font-bold">{d.person}</h4>
            <span className="text-primary-200">{d.job}</span>
            <img
              src={`./assets/img/${d.image}.png`}
              alt={d.image}
              className="absolute -bottom-10 left-35 md:left-60"
            />
          </div>
        ))}
      </TestimonialCarousel>
    </SectionContainer>
  );
};

export default TestimonialSection;
