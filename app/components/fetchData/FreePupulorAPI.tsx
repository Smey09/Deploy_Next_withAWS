"use client";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const FreePupolorAPI: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/data-1.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError("Failed to fetch data"));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Populors Data</h1>
      <CopyToClipboard
        text={JSON.stringify(data, null, 2)}
        onCopy={() => setCopied(true)}
      >
        <button
          className={`mt-4 p-2 rounded-lg transition-transform duration-300 transform ${
            copied ? "bg-green-500 scale-105" : "bg-blue-500 scale-100"
          } text-white shadow-lg hover:shadow-xl`}
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>
      <pre
        className={`p-4 rounded-lg shadow-lg
                    ${copied ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default FreePupolorAPI;
