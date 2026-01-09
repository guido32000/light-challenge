/* eslint-disable react/jsx-props-no-spreading */
import { InputProps } from "../../types/index";

const Input = ({
  As = "input",
  label,
  register = {},
  placeholder,
  required,
  helperText,
}: InputProps) => {
  const inputCSS =
    "scroll-input bg-neutro focus:bg-neutro-100 block w-full tracking-wides px-4 py-2 rounded-md text-black placeholder-gray-400 text-xs focus:outline-0 focus:outline-offset-0 focus:shadow-none focus:ring-0  box-border font-light border-1 border-white focus:border-white'";

  return (
    <div className="w-full">
      <label htmlFor={register.name}>
        <div className="block font-light tracking-wide text-xs px-3 py-1.5 text-neutro-300">
          {label}
          {required && <span className="text-blue"> *</span>}
        </div>
      </label>
      <div className="relative rounded-md">
        <As
          {...register}
          id={register.name}
          type="text"
          className={inputCSS}
          placeholder={placeholder}
        />
      </div>
      {helperText && (
        <div className="pt-2 pl-2 h-1 mb-5 flex items-start w-full">
          <p
            className="w-full leading-tight ml-1 mb-4 text-[11px] text-neutro-300"
            id="email-error"
          >
            {helperText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
