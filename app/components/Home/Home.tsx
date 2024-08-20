// app/home/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CardSelections from "../Atomic/CardSeletions";

const Home = () => {
  const router = useRouter();
  const My_URL = "http://localhost:3000";

  const optionsClient = [
    { value: `${My_URL}/screen/client/users`, label: "Get Users" },
    { value: `${My_URL}/screen/client/posts`, label: "Get Posts" },
  ];

  const optionsServer = [
    { value: `${My_URL}/screen/server/users`, label: "Get Users" },
    { value: `${My_URL}/screen/server/posts`, label: "Get Posts" },
  ];

  const optionsMovies = [
    { value: `${My_URL}/screen/movies`, label: "Get TMDB Movies" },
    { value: `${My_URL}/screen/amazonpro`, label: "Get Amazonpro Movies" },
  ];

  const optionsLearnUI = [
    { value: `${My_URL}/screen/products/animation`, label: "Learn UI One" },
    { value: `${My_URL}/screen/products`, label: "Products Paginations" },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue.startsWith(My_URL)) {
      router.push(selectedValue);
    } else {
      console.error("Invalid URL or path selected:", selectedValue);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gray-600 text-3xl text-gray-100 font-bold text-center mb-3 py-2 rounded-xl">
        Home Page
      </div>
      <div className="overflow-auto max-h-[calc(100vh-8rem)] px-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSelections
          id="client-select"
          title="Client Component"
          options={optionsClient}
          onChange={handleSelectChange}
        />
        <CardSelections
          id="server-select"
          title="Server Component"
          options={optionsServer}
          onChange={handleSelectChange}
        />
        <CardSelections
          id="movies-select"
          title="Movies Component"
          options={optionsMovies}
          onChange={handleSelectChange}
        />
        <CardSelections
          id="learn-ui-select"
          title="Learn UI"
          options={optionsLearnUI}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default Home;
