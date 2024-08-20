"use client";

import React from "react";
import { useFetchProducts } from "../../../components/fetchData/FetchPupulor";
import PupulorCard from "@/app/components/Card-Design/Dashboard/Pupulor";

const Pupulors: React.FC = () => {
  const { products, error } = useFetchProducts(); // Use the custom hook

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-8 my-4">
      <div className="grid gap-1">
        <div className="flex h-[40px] items-center bg-blue-300 rounded-sm border border-red-300 font-semibold">
          <div className="flex-1 text-center">ID</div>
          <div className="flex-1 text-center">Name</div>
          <div className="flex-1 text-center">Model</div>
          <div className="flex-1 text-center">Brand</div>
          <div className="flex-1 text-center">Price</div>
        </div>
        {products.map((product) => (
          <PupulorCard
            key={product.id}
            id={product.id}
            name={product.name}
            model={product.model}
            brand={product.brand}
            price={`${product.price} USD`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pupulors;
