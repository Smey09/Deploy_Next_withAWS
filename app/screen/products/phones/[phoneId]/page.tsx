"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Icons from "@/app/components/Atomic/Icons";

interface Product {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  iconText: string;
}

const PhoneProduct: React.FC = () => {
  const params = useParams();
  const { phoneId } = params; // Ensure the param name matches your dynamic segment

  const [detail, setDetail] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!phoneId) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        const response = await fetch("/data-2.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        const detailData = data.find((item) => item.id.toString() === phoneId);
        if (detailData) {
          setDetail(detailData);
        } else {
          setError("Detail not found");
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [phoneId]);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4">Error: {error}</div>;
  }

  if (!detail) {
    return <div className="text-center p-4">No detail available</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-screen-lg text-black mx-auto p-4 bg-gray-100 rounded-lg shadow-lg m-2 hover:bg-white"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
      >
        {detail.title}
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[300px] w-full flex justify-center mb-4 px-10 py-5"
      >
        <img
          className="h-full w-full object-contain sm:object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-125"
          src={detail.imageUrl}
          alt={detail.title}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg"
      >
        <p className="mb-2">
          <strong>Date:</strong> {detail.date}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {detail.description}
        </p>
        <p className="text-blue-500 hover:underline">{detail.iconText}</p>
      </motion.div>
    </motion.div>
  );
};

export default PhoneProduct;
