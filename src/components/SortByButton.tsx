import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { on } from "events";
import { useState } from "react";
import { useEffect } from "react";

type SelectOption = {
  label: string;
  value: number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const borderStyling = "rounded border border-solid border-pink-500";
const hiddenOption = "hidden";
const bgOfHighlighted = "bg-pink-200";
const bgOfSelected = "bg-pink-300";

const SortByButton = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const selectOption = (option: SelectOption) => {
    onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <>
      <div className="flex min-w-[208px] items-center justify-between">
        <span>Sort by:</span>
        <div
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen((prev) => !prev)}
          tabIndex={0}
          className={`${borderStyling} relative flex min-h-[1.5rem] min-w-[140px] items-center justify-between gap-2 p-2 focus:outline-none`}
        >
          <span>{value?.label}</span>
          <div>
            <ChevronDownIcon className="h-5 w-5 cursor-pointer text-gray-500 hover:text-black focus:text-black" />
          </div>
          <ul
            className={`${borderStyling} ${
              isOpen ? "" : hiddenOption
            } absolute left-0 top-[115%] z-50 m-0 max-h-[15rem] w-full cursor-pointer overflow-y-auto bg-white`}
          >
            {options.map((option, index) => (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`${
                  isOptionSelected(option) ? bgOfSelected : ""
                } flex items-center px-[.5rem] py-[.25rem] ${
                  index === highlightedIndex ? bgOfHighlighted : ""
                }`}
                key={option.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortByButton;
