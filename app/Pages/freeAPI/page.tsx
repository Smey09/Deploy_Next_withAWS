"use client";
import React, { useState } from "react";
import FreePhoneAPI from "@/app/components/fetchData/FreePhoneAPI";
import FreePupolorAPI from "@/app/components/fetchData/FreePupulorAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Phones");

  return (
    <div className="border-yellow-400 dark:border-yellow-400 mx-2">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-yellow-border-yellow-400 dark:text-yellow-border-yellow-400">
        <li className="me-2">
          <button
            onClick={() => setActiveTab("Phones")}
            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
              activeTab === "Phones"
                ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "text-yellow-border-yellow-400 border-transparent hover:text-yellow-border-yellow-400 hover:border-yellow-400 dark:text-yellow-border-yellow-400 dark:hover:text-yellow-border-yellow-400"
            }`}
            aria-current={activeTab === "Phones" ? "page" : undefined}
          >
            <svg
              className={`w-4 h-4 me-2 ${
                activeTab === "Phones"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-yellow-border-yellow-400 dark:text-yellow-border-yellow-400"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
            Phones
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("Popular")}
            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
              activeTab === "Popular"
                ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "text-yellow-border-yellow-400 border-transparent hover:text-yellow-border-yellow-400 hover:border-yellow-400 dark:text-yellow-border-yellow-400 dark:hover:text-yellow-border-yellow-400"
            }`}
            aria-current={activeTab === "Popular" ? "page" : undefined}
          >
            <svg
              className={`w-4 h-4 me-2 ${
                activeTab === "Popular"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-yellow-border-yellow-400 dark:text-yellow-border-yellow-400"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
            </svg>
            Popular
          </button>
        </li>
      </ul>
      <div className="h-[90vh] w-full overflow-auto border border-gray-300 rounded-lg">
        {activeTab === "Phones" && <FreePhoneAPI />}
        {activeTab === "Popular" && <FreePupolorAPI />}
      </div>
    </div>
  );
};

export default Page;
