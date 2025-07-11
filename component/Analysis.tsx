import React, { useState } from "react";
import Search from "./Search";
import RetailCard from "./RetailCard";
import Updateddata from "./Updateddata";

const Analysis = () => {
  const [activeTab, setActiveTab] = useState("retail-price-analysis"); 

  return (
    <div>
      <div className="flex w-full md:gap-10 mb-2 border-t border-[#24282c]">
        <button
          onClick={() => setActiveTab("retail-price-analysis")}
          className={`px-4 py-2 text-sm font-medium ${
              activeTab === "retail-price-analysis"
              ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
            }`}
        >
          Retail Price Analysis
        </button>

        <button
          onClick={() => setActiveTab("flights-analysis")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "flights-analysis"
            ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
          }`}
        >
          Flights Analysis
        </button>

        <button
          onClick={() => setActiveTab("depots-analysis")}
          className={`px-4 py-2 text-sm font-medium ${
              activeTab === "depots-analysis"
              ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
          }`}
        >
          Depots Analysis
        </button>

        <button
          onClick={() => setActiveTab("power-analysis")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "power-analysis"
              ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
          }`}
        >
          Power Analysis
        </button>

        <button
          onClick={() => setActiveTab("cargo-analysis")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "cargo-analysis"
              ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
          }`}
        >
          Cargo Analysis
        </button>

        <button
          onClick={() => setActiveTab("raw-data")}
          className={`px-4 py-2 text-sm font-medium ${
              activeTab === "raw-data"
              ? "border-t-2 border-green-500 text-green-700"
              : "text-[#5c5d5e]"
            }`}
        >
          Raw Data
        </button>
      </div>

        <RetailCard />
      {/* <div></div> */}

      <div className="flex w-full md:gap-10 border-t border-[#24282c]">
      </div>

      <Search />

      <Updateddata />
    </div>
  );
};

export default Analysis;