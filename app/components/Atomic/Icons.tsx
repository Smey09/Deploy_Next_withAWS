import React from "react";

const Icons = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          className="fill-current text-white"
          stroke="blue"
          strokeWidth="1"
        />
        <path
          d="M10 8l4 4-4 4"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="50%" stop-color="#2b6cb0" />
            <stop offset="100%" stop-color="#434190" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Icons;
