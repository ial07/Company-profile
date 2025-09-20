// TextareaComp.tsx
import React, { type TextareaHTMLAttributes } from "react";

type TextareaCompProps = {
  label: string;
  error?: string; // error message
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaComp: React.FC<TextareaCompProps> = ({
  label,
  error,
  className,
  disabled,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <label className="text-sm font-bold">{label}</label>
      <textarea
        {...rest}
        disabled={disabled}
        className={`border py-2 px-4 rounded-xl mt-2 text-neutral-700 dark:text-neutral-300 
          focus:border-neutral-600 focus:outline-none 
          ${
            error
              ? "border-red-500"
              : "border-[#DFDFDF] dark:border-neutral-800"
          }
          ${
            disabled
              ? "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500 cursor-not-allowed"
              : ""
          }
          ${className ?? ""}`}
        placeholder={rest.placeholder ?? `Enter your ${label.toLowerCase()}`}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default TextareaComp;
