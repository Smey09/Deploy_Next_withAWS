"use client";

import React, { useEffect, useState } from "react";
import SimpleCard from "@/app/components/Card-Design/SimpleCard";

interface CardData {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  iconText: string;
}

const Page = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/data-2.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: CardData[] = await response.json();
        setCards(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        cards.map((card) => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <SimpleCard
              id={card.id}
              imageUrl={card.imageUrl}
              date={card.date}
              title={card.title}
              description={card.description}
              iconText={card.iconText}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
