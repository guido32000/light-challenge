import { FC } from "react";
import { ButtonProps } from "../../types/index";

const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  text,
}: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={
        "inline-flex leading-6 justify-center items-center relative text-sm rounded-md h-14 sm:h-10 py-3 px-5 leading-3 font-semibold focus:border-0 focus:outline-0 focus:outline-offset-0 focus:shadow-none focus:ring-0 box-border bg-[#4687B8] text-white hover:bg-primary cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200"
      }
      onClick={onClick}
    >
      <span className="tracking-wide">{text}</span>
    </button>
  );
};

export default Button;
