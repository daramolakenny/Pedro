import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the type for price data
interface PriceDataItem {
  label: string;
  price: number;
  trend: number[];
}

// Define types for dropdowns
interface DropdownOption {
  value: string;
  label: string;
}

const RetailCard: React.FC = () => {
  // Type for activeTab
  type TabKey = "retail-price-analysis" | "flights-analysis" | "depots-analysis" | "power-analysis" | "cargo-analysis";
  const [activeTab, setActiveTab] = useState<TabKey>("retail-price-analysis");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<DropdownOption | null>(null);
  const [selectedState, setSelectedState] = useState<DropdownOption | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<DropdownOption | null>(null);

  // Static price data for each product with TypeScript typing
  const priceData: Record<TabKey, PriceDataItem> = {
    "retail-price-analysis": { label: "PMS", price: 714.26, trend: [700, 705, 710, 712, 714.26] },
    "flights-analysis": { label: "AGO", price: 1249.06, trend: [698, 702, 708, 711, 1249.06] },
    "depots-analysis": { label: "ICE", price: 0.0, trend: [695, 703, 709, 713, 0.0] },
    "power-analysis": { label: "DPK", price: 1088.92, trend: [699, 704, 707, 710, 1088.92] },
    "cargo-analysis": { label: "LPQ", price: 1087.66, trend: [697, 701, 706, 712, 1087.66] },
  };

  // Time periods and additional dropdown options
  const timePeriods: string[] = ["1D", "1W", "1M", "3M", "6M", "YTD", "All"];
  const regions: DropdownOption[] = [
    { value: "north", label: "Northern Region" },
    { value: "south", label: "Southern Region" },
    { value: "east", label: "Eastern Region" },
    { value: "west", label: "Western Region" },
  ];
  const states: DropdownOption[] = [
    { value: "lagos", label: "Lagos" },
    { value: "kano", label: "Kano" },
    { value: "rivers", label: "Rivers" },
    { value: "abuja", label: "Abuja" },
  ];
  const prices: DropdownOption[] = [
    { value: "low", label: "Low (< #700)" },
    { value: "medium", label: "Medium (#700 - #1000)" },
    { value: "high", label: "High (> #1000)" },
  ];

  const chartData = {
    labels: timePeriods,
    datasets: [
      {
        label: priceData[activeTab].label,
        data: priceData[activeTab].trend,
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
      y: { ticks: { display: false }, beginAtZero: true },
    },
  };

  // Sample PMS summary data with TypeScript typing
  const pmsSummary = {
    daily: {
      data: "Here's a quick summary of the PMS (Premium Motor Spirit) - Petrol Market in Nigeria breaking down demand, supply, and regional trends",
      price: "#714.26",
      change: "+0.37 (+0.09%)",
    },
    detailed: {
      averagePriceLastWeek: "#713.89",
      region: selectedRegion?.label || "All Regions",
      state: selectedState?.label || "All States",
      priceRange: selectedPrice?.label || "All Prices",
    },
  };

  return (
    <div className="flex flex-row w-full md:gap-4 mb-10 justify-between">
      <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[40%]">
        <h3 className="font-medium text-white mb-4">Current product retail prices</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr
                className="py-10 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
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
                <td className="text-start text-white">#1249.06</td>
                <td className="text-start text-orange-500">-0.34</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
              </tr>
              <tr className="border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  ICE <span className="font-medium text-[#5c5d5e] pl-2">ICE Brent Crude</span>
                </td>
                <td className="text-start text-white">#0.00</td>
                <td className="text-start text-green-700">+0.37</td>
                <td className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.00%</td>
              </tr>
              <tr className="border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  DPK <span className="font-medium text-[#5c5d5e] pl-2">Dual Purpose Kerosene</span>
                </td>
                <td className="text-start text-white">#1088.92</td>
                <td className="text-start text-orange-500">-50.90</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.92%</td>
              </tr>
              <tr className="hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                </td>
                <td className="text-start text-white">#1087.66</td>
                <td className="text-start text-orange-500">-36.10</td>
                <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">-0.67%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[60%] relative">
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
        <div className="mb-4">
          <Line data={chartData} options={chartOptions} />
        </div>
        <button
          className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={() => setIsModalOpen(true)}
        >
          View Detailed Summary
        </button>
        <div className="flex justify-between mt-4">
          <select
            className="bg-[#020405] text-white p-2 rounded-lg border border-[#5c5d5e]"
            value={selectedRegion?.value || ""}
            onChange={(e) => setSelectedRegion(regions.find((r) => r.value === e.target.value) || null)}
          >
            <option value="" disabled>
              Select Region
            </option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
          <select
            className="bg-[#020405] text-white p-2 rounded-lg border border-[#5c5d5e]"
            value={selectedState?.value || ""}
            onChange={(e) => setSelectedState(states.find((s) => s.value === e.target.value) || null)}
          >
            <option value="" disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <select
            className="bg-[#020405] text-white p-2 rounded-lg border border-[#5c5d5e]"
            value={selectedPrice?.value || ""}
            onChange={(e) => setSelectedPrice(prices.find((p) => p.value === e.target.value) || null)}
          >
            <option value="" disabled>
              Select Price
            </option>
            {prices.map((price) => (
              <option key={price.value} value={price.value}>
                {price.label}
              </option>
            ))}
          </select>
        </div>

        {/* Modal for PMS Detailed Summary */}
        {isModalOpen && (
          <div
            className="fixed bg-black bg-opacity-50 flex items-end justify-end z-50"
            style={{ bottom: "20px", right: "20px" }}
          >
            <div className="bg-[#020405] rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">Detailed Summary</h3>
              <button
                className="text-white absolute top-4 right-4"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <div className="space-y-4">
                <p className="text-white">
                  Region: {pmsSummary.detailed.region}
                </p>
                <p className="text-white">
                  State: {pmsSummary.detailed.state}
                </p>
                <p className="text-white">
                  Price Range: {pmsSummary.detailed.priceRange}
                </p>
                <p className="text-white">
                  Average Price (Last Week): {pmsSummary.detailed.averagePriceLastWeek}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetailCard;