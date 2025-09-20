import React from "react";

type ModalCompProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  error?: boolean;
  children: React.ReactNode;
};

const ModalComp: React.FC<ModalCompProps> = ({
  isOpen,
  onClose,
  title,
  children,
  error,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-black/80"
      onClick={onClose}
    >
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg w-full max-w-md relative mx-5">
        {/* Image */}
        <div className="w-full h-40 md:h-60 flex justify-center bg-neutral-50 dark:bg-neutral-950">
          <img
            src={`./assets/img/${
              error ? "Message-error" : "Message-success"
            }.png`}
            alt="msg"
          />
        </div>
        {/* Title */}
        {title && (
          <h2 className="text-lg font-bold mb-4 text-center pt-6 md:pt-8">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default ModalComp;
