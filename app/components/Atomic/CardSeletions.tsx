// components/CardSelections.tsx
import React from "react";

export interface CardSelectionsProps {
  id: string;
  title: string;
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CardSelections: React.FC<CardSelectionsProps> = ({
  id,
  title,
  options,
  onChange,
}) => {
  return (
    <div className="bg-gray-300 p-6 rounded-lg shadow-lg hover:bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="bg-blue-500 p-4 rounded-lg text-white text-center shadow-md">
        <div className="text-lg font-semibold mb-2">{title}</div>
        <select
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={onChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select {title}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CardSelections;
