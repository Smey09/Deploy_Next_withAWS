"use client";

import React from "react";
import useProducts from "../../../components/fetchData/FetchPhone";
import PhoneCard from "@/app/components/Card-Design/Dashboard/Phone";

const DashboardPhone: React.FC = () => {
  const { products, error } = useProducts();

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="mx-8 my-4">
      <div className="grid gap-1">
        <div className="flex h-[40px] items-center w-full bg-gradient-to-r from-pink-500 via-green-500 to-blue-500 animate-gradient rounded-sm border border-red-300 font-semibold px-4">
          <div className="w-[10%] text-start">ID</div>
          <div className="w-[20%] text-start text-black">Date</div>
          <div className="w-[30%] text-start text-blue-600">Title</div>
          <div className="w-[40%] text-start">Description</div>
        </div>

        {products.map((product) => (
          <PhoneCard
            key={product.id}
            id={product.id}
            date={product.date}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPhone;
