import React, { useState } from "react";
import { SectionContainer } from "../Section";
import { CheckboxComp, InputComp } from "../../ui/Input";
import TextareaComp from "../../ui/Input/TextareaComp";
import ButtonComp from "../../ui/ButtonComp";
import ModalComp from "../../ui/Popup";

const QnASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent form submit
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="px-0 lg:px-60">
      <SectionContainer
        title="Ready to Start? Let’s Talk."
        subtitle="Tell us what you need, and we’ll get back to you soon."
      >
        <form>
          <InputComp label="Name" type="text" />
          <InputComp label="Email" type="email" />
          <TextareaComp label="Message" rows={4} />

          <label className="text-sm font-bold mb-3">Service</label>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <CheckboxComp label="Web Development" checked />
            <CheckboxComp label="Cloud Solutions" />
            <CheckboxComp label="Mobile App Development" />
            <CheckboxComp label="Software Development" />
            <CheckboxComp label="UI/UX Design" />
            <CheckboxComp label="Other" />
          </div>
          <ButtonComp
            label="Send"
            fullWidth={true}
            className="mt-10"
            onClick={openModal}
          />
        </form>

        <ModalComp
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Message Received!"
        >
          <p className="text-center">
            Thanks for reaching out — we’ll get back to you as soon as possible.
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-2 mt-8 bg-primary-200 text-white rounded-full hover:bg-primary-100 cursor-pointer w-full font-bold"
          >
            Back to Home
          </button>
        </ModalComp>
      </SectionContainer>
    </div>
  );
};

export default QnASection;
