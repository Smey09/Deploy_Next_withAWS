import React from "react";

export interface ButtonCatagoriesProps {
  text: string;
  onClick?: () => void;
}

const ButtonCatagories: React.FC<ButtonCatagoriesProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center h-auto w-52 bg-gray-200 border border-blue-500 py-2 rounded-lg hover:bg-gray-100 hover:border-red-500 transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {text}
    </button>
  );
};

export default ButtonCatagories;
