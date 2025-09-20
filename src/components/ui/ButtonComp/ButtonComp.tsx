import React from "react";

type ButtonCompProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
};

const ButtonComp: React.FC<ButtonCompProps> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-white font-bold cursor-pointer rounded-full
        w-full ${!fullWidth && "md:w-[197px]"} h-[44px] p-2
        bg-primary-200 hover:bg-orange-700
        disabled:opacity-50 disabled:cursor-not-allowed
        inset-shadow-white
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default ButtonComp;
