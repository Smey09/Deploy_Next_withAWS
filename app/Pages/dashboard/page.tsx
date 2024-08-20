"use client";

import ButtonCatagories from "@/app/components/Atomic/ButtonCatagories";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleDashboardPhone = () => {
    router.push("/Pages/dashboard/phones");
  };

  const handleDashboardPhonePupulor = () => {
    router.push("/Pages/dashboard/pupulor");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <ButtonCatagories text="Phones" onClick={handleDashboardPhone} />
        <ButtonCatagories
          text="Pupulor Products"
          onClick={handleDashboardPhonePupulor}
        />
        <ButtonCatagories text="Laptop Catagories" />
        <ButtonCatagories text="Others Catagories" />
      </div>
    </div>
  );
};

export default Page;
