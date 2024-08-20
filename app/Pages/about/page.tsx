"use client";

// app/about/page.tsx
import React from "react";
import AboutMe from "../../components/AboutMe";
import { BackgroundGradientAnimation } from "../../components/Atomic/Bg-animations";

const AboutPage = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center">
        <AboutMe />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default AboutPage;
