"use client";

import React, { useState } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="md:flex">
      <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
        <li>
          <button
            onClick={() => setActiveTab("Profile")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "Profile"
                ? "text-white bg-blue-700 dark:bg-blue-600"
                : "text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            <svg
              className={`w-4 h-4 mr-2 ${
                activeTab === "Profile"
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("Dashboard")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "Dashboard"
                ? "text-white bg-blue-700 dark:bg-blue-600"
                : "text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            <svg
              className={`w-4 h-4 mr-2 ${
                activeTab === "Dashboard"
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("Employees")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "Employees"
                ? "text-white bg-blue-700 dark:bg-blue-600"
                : "text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            <svg
              className={`w-4 h-4 mr-2 ${
                activeTab === "Employees"
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8 0c-0.61 0-1.23 0.05-1.84 0.15 0.95 0.73 1.84 1.73 1.84 3.85v1.5h8v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Employees
          </button>
        </li>

        <li>
          <button
            disabled
            className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500"
          >
            <svg
              className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10Z" />
            </svg>
            Disabled
          </button>
        </li>
      </ul>

      <div className="flex-grow bg-gray-400 border border-blue-400 rounded-lg mx-2 min-h-screen">
        {activeTab === "Profile" && <Home />}
        {activeTab === "Dashboard" && <Dashboard />}
      </div>
    </div>
  );
};

export default TabBar;
