import React from "react";
import { Listbox } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { ControlLabel } from "./ControlLabel";

export const Dropdown = ({ label, value, options, onChange, type }) => {
  const selectedOption = options.find((o) => o.value === value) || options[0];
  return (
    <div className="flex flex-col mt-2">
      <ControlLabel label={label} controlType={type} />
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative text-brand-light">
            <Listbox.Button className="text-xs border w-full text-left p-2 rounded-md flex justify-between items-center">
              {selectedOption ? selectedOption.label : "Select"}
              <IoChevronDown
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                size={14}
              />
            </Listbox.Button>
            <Listbox.Options className="absolute z-50 w-full mt-1  bg-white border border-gray-200 rounded-md shadow-lg outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) =>
                    `cursor-pointer p-2 text-xs ${active ? "bg-gray-200" : "text-gray-700"}`
                  }
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
    </div>
  );
};
