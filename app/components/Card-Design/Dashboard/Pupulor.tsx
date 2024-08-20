import React from "react";

export interface PupulorCardProps {
  id: number;
  name: string;
  model: string;
  brand: string;
  price: string;
}

const PupulorCard: React.FC<PupulorCardProps> = ({
  id,
  name,
  model,
  brand,
  price,
}) => {
  return (
    <div className="flex py-1 items-center bg-gray-200 rounded-sm border border-red-300 hover:bg-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-1 text-center">{id}</div>
      <div className="flex-1 text-center">{name}</div>
      <div className="flex-1 text-center">{model}</div>
      <div className="flex-1 text-center">{brand}</div>
      <div className="flex-1 text-center">{price}</div>
    </div>
  );
};

export default PupulorCard;
