import React from "react";

interface PhoneCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const PhoneCard: React.FC<PhoneCardProps> = ({
  id,
  date,
  title,
  description,
}) => {
  const truncatedDescription = truncateText(description, 50);
  const truncatedTitle = truncateText(title, 35);

  return (
    <div className="flex flex-col sm:flex-row py-2 sm:py-1 items-center bg-gray-200 rounded-sm border border-red-300 hover:bg-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-full sm:w-[10%] px-2 sm:px-5 text-center sm:text-start font-bold text-blue-600">
        {id}
      </div>
      <div className="w-full sm:w-[20%] px-2 sm:px-0 text-center sm:text-start text-black">
        {date}
      </div>
      <div className="w-full sm:w-[30%] px-2 sm:px-0 text-center sm:text-start text-blue-600">
        {truncatedTitle}
      </div>
      <div className="w-full sm:w-[40%] px-2 sm:px-0 text-center sm:text-start text-black">
        {truncatedDescription}
      </div>
    </div>
  );
};

export default PhoneCard;
