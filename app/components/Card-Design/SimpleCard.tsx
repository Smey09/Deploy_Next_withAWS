import React from "react";
import Icons from "../Atomic/Icons";
import Image from "next/image";

export interface SimpleCardProps {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  iconText: string;
}
const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const SimpleCard: React.FC<SimpleCardProps> = ({
  id,
  imageUrl,
  date,
  title,
  description,
  iconText,
}) => {
  const truncatedDescription = truncateText(description, 140);
  return (
    <a href={`/screen/products/phones/${id}`}>
      <div className="w-full h-[460px] max-w-sm bg-white border border-b-gray-400 m-2 flex flex-col justify-between hover:bg-gray-200 hover:border-blue-400 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <Image src={imageUrl} alt="Profile" className="w-full h-auto" />
        <div className="px-6 py-4 flex flex-col flex-grow">
          <div>
            <p className="font-semibold text-sm text-gray-400 align-text-bottom">
              {date}
            </p>
            <h1 className="font-bold text-xl py-3">{title}</h1>
            <p className="w-auto text-xs font-sans text-gray-500">
              {truncatedDescription}
            </p>
          </div>
          <div className="mt-auto flex items-center">
            <div className="h-8 w-8">
              <Icons />
            </div>
            <p className="text-blue-500 font-sans text-sm px-1">{iconText}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SimpleCard;
