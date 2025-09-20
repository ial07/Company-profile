import React, { type InputHTMLAttributes } from "react";

type InputCompProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string; // optional error message
};

const InputComp: React.FC<InputCompProps> = ({
  label,
  className,
  error,
  disabled,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 mb-5 w-full">
      {/* Label */}
      <label className={`text-sm font-bold`}>{label}</label>

      {/* Input */}
      <input
        {...rest}
        disabled={disabled}
        className={`border py-2 px-4 rounded-xl mt-2 text-neutral-700 dark:text-neutral-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
          focus:border-neutral-600 dark:focus:border-neutral-400 outline-none
          ${
            error
              ? "border-red-500 dark:border-red-400"
              : "border-[#DFDFDF] dark:border-neutral-800"
          }
          ${
            disabled
              ? "bg-neutral-100 dark:bg-neutral-900 cursor-not-allowed opacity-70"
              : ""
          }
          ${className ?? ""}
        `}
        placeholder={rest.placeholder ?? `Enter your ${label.toLowerCase()}`}
      />

      {/* Error text */}
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default InputComp;
