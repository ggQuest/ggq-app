import { FC } from 'react';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  id,
  type = 'text',
  className,
  /*
  The className that will be applied to the outer div containing the label and the input
  */
  outerClassName,
  disabled = false,
  error = false,
}) => {
  return (
    <div className={`flex flex-col ${outerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-black-40" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        placeholder={placeholder}
        className={`text-black	 block rounded-lg border-[1.5px] border-black-30 px-4 py-3 black font-medium text-black-90 outline-none placeholder:text-black-50 hover:border-black-40 focus:border-black-50 ${
          disabled && 'cursor-not-allowed border-black-30 bg-black-10'
        } ${error && 'border-red-500'} ${className}`}
        disabled={disabled}
      />
    </div>
  );
};
