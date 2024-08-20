import React from "react";
import { BackgroundGradientAnimation } from "./components/Atomic/Bg-animations";
import HomePage from "./Pages/home/HomePage"; // Adjust path if necessary

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
          <HomePage />
        </div>
      </BackgroundGradientAnimation> */}
      <HomePage />
    </main>
  );
}
