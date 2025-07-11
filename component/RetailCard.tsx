import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RetailCard = () => {
  const [activeTab, setActiveTab] = useState("retail-price-analysis");

  // Static price data for each product (based on "Current product retail prices")
  const priceData = {
    "retail-price-analysis": { label: "PMS", price: 714.26, trend: [700, 705, 710, 712, 714.26] },
    "flights-analysis": { label: "AGO", price: 714.26, trend: [698, 702, 708, 711, 714.26] },
    "depots-analysis": { label: "ICE", price: 714.26, trend: [695, 703, 709, 713, 714.26] },
    "power-analysis": { label: "DPK", price: 714.26, trend: [699, 704, 707, 710, 714.26] },
    "cargo-analysis": { label: "LPQ", price: 714.26, trend: [697, 701, 706, 712, 714.26] },
  };

  // Time periods for the x-axis (simulated)
  const timePeriods = ["1D", "1W", "1M", "3M", "6M", "YTD", "All"];

  const chartData = {
    labels: timePeriods,
    datasets: [
      {
        label: priceData[activeTab as keyof typeof priceData].label,
        data: priceData[activeTab as keyof typeof priceData].trend,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      x: { ticks: { color: "#5c5d5e" } },
      y: { ticks: { color: "#5c5d5e" }, beginAtZero: true },
    },
  };

  return (
    <div className="flex flex-row w-full md:gap-4 mb-10 justify-between">
      <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[40%]">
        <h3 className="font-medium text-white mb-4">Current product retail prices</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr className="py-10 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-start text-white">
                  PMS <span className="font-medium text-[#5c5d5e] pl-2">Premium Motor Spirit</span>
                </td>
                <td className="text-start text-white">#714.26</td>
                <td className="text-start text-green-700">+0.37</td>
                <td className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</td>
              </tr>

              <tr className="border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  AGO <span className="font-medium text-[#5c5d5e] pl-2">Automotive Gas Oil</span>
                </td>
                <td className="text-start text-white">#1249.06.26</td>
                <td className="text-start text-orange-500">+0.37</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
              </tr>

              <tr className="border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  ICE <span className="font-medium text-[#5c5d5e] pl-2">ICE Brent Crude</span>
                </td>
                <td className="text-start text-white">#0.00</td>
                <td className="text-start text-green-700">+0.37</td>
                <td className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</td>
              </tr>
              
              <tr className="border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  DPK <span className="font-medium text-[#5c5d5e] pl-2">Dual Purpose Kerosene</span>
                </td>
                <td className="text-start text-white">#1088.92</td>
                <td className="text-start text-orange-500">+0.37</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
              </tr>

              <tr className="hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                </td>
                <td className="text-start text-white">#1087.66</td>
                <td className="text-start text-orange-500">+0.37</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[60%]">
        <div className="w-full md:gap-10 mb-2 flex justify-between">
          <h3 className="font-medium text-white mb-4 pr-10">Retail prices analysis (NGN)</h3>
          <button
            onClick={() => setActiveTab("retail-price-analysis")}
            className={`py-2 text-sm ${
              activeTab === "retail-price-analysis"
                ? "border-t-2 border-green-500 text-green-700"
                : "text-[#5c5d5e]"
            }`}
          >
            PMS
          </button>

          <button
            onClick={() => setActiveTab("flights-analysis")}
            className={`py-2 text-sm ${
              activeTab === "flights-analysis"
                ? "border-t-2 border-green-500 text-green-700"
                : "text-[#5c5d5e]"
            }`}
          >
            AGO
          </button>
          
          <button
            onClick={() => setActiveTab("depots-analysis")}
            className={`py-2 text-sm ${
              activeTab === "depots-analysis"
                ? "border-t-2 border-green-500 text-green-700"
                : "text-[#5c5d5e]"
            }`}
          >
            ICE
          </button>

          <button
            onClick={() => setActiveTab("power-analysis")}
            className={`py-2 text-sm ${
              activeTab === "power-analysis"
                ? "border-t-2 border-green-500 text-green-700"
                : "text-[#5c5d5e]"
            }`}
          >
            DPK
          </button>

          <button
            onClick={() => setActiveTab("cargo-analysis")}
            className={`py-2 text-sm ${
              activeTab === "cargo-analysis"
                ? "border-t-2 border-green-500 text-green-700"
                : "text-[#5c5d5e]"
            }`}
          >
            LPQ
          </button>
        </div>
        
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default RetailCard;