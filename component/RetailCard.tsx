import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fuelData } from "@/data";
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
  const [isDailyModalOpen, setIsDailyModalOpen] = useState<boolean>(false);
  const [isDetailedModalOpen, setIsDetailedModalOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<DropdownOption | null>(null);
  const [selectedState, setSelectedState] = useState<DropdownOption | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<DropdownOption | null>(null);

  // Dynamically generate price data based on selected state
  const [priceData, setPriceData] = useState<Record<TabKey, PriceDataItem>>({
    "retail-price-analysis": { label: "PMS", price: 714.26, trend: [700, 705, 710, 712, 714.26] },
    "flights-analysis": { label: "AGO", price: 1249.06, trend: [698, 702, 708, 711, 1249.06] },
    "depots-analysis": { label: "ICE", price: 0.0, trend: [695, 703, 709, 713, 0.0] },
    "power-analysis": { label: "DPK", price: 1088.92, trend: [699, 704, 707, 710, 1088.92] },
    "cargo-analysis": { label: "LPQ", price: 1087.66, trend: [697, 701, 706, 712, 1087.66] },
  });

  useEffect(() => {
    const stateData = selectedState ? fuelData.find((data) => data.State.toLowerCase() === selectedState.value) : fuelData[0];
    if (stateData) {
      setPriceData({
        "retail-price-analysis": { label: "PMS", price: stateData.PMS, trend: [stateData.PMS - 14.26, stateData.PMS - 9.26, stateData.PMS - 4.26, stateData.PMS - 2.26, stateData.PMS] },
        "flights-analysis": { label: "AGO", price: stateData.AGO, trend: [stateData.AGO - 50.06, stateData.AGO - 47.06, stateData.AGO - 41.06, stateData.AGO - 38.06, stateData.AGO] },
        "depots-analysis": { label: "ICE", price: 0.0, trend: [695, 703, 709, 713, 0.0] },
        "power-analysis": { label: "DPK", price: stateData.DPK, trend: [stateData.DPK - 50.92, stateData.DPK - 45.92, stateData.DPK - 40.92, stateData.DPK - 35.92, stateData.DPK] },
        "cargo-analysis": { label: "LPQ", price: stateData.LPG, trend: [stateData.LPG - 37.66, stateData.LPG - 32.66, stateData.LPG - 27.66, stateData.LPG - 22.66, stateData.LPG] },
      });
    }
  }, [selectedState]);

  // Time periods and additional dropdown options
  const timePeriods: string[] = ["1D", "1W", "1M", "3M", "6M", "YTD", "All"];
  const regions: DropdownOption[] = [
    { value: "north", label: "Northern Region" },
    { value: "south", label: "Southern Region" },
    { value: "east", label: "Eastern Region" },
    { value: "west", label: "Western Region" },
  ];
  const states: DropdownOption[] = fuelData.map((data) => ({ value: data.State.toLowerCase(), label: data.State }));
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
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: "#ffffff" } } },
    scales: {
      x: { ticks: { color: "#5c5d5e", font: { size: 10 } } },
      y: { ticks: { display: false }, beginAtZero: true },
    },
  };

  // Sample PMS summary data with TypeScript typing
  const pmsSummary = {
    daily: {
      data: "Here's a quick summary of the PMS (Premium Motor Spirit) - Petrol Market in Nigeria breaking down demand, supply, and regional trends",
      price: `#${priceData["retail-price-analysis"].price.toFixed(2)}`,
      change: "+0.37 (+0.09%)",
      date: "July 11, 2025",
    },
    detailed: {
      averagePriceLastWeek: `#${(priceData["retail-price-analysis"].price - 0.37).toFixed(2)}`,
      region: selectedRegion?.label || "All Regions",
      state: selectedState?.label || "All States",
      priceRange: selectedPrice?.label || "All Prices",
    },
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mb-10 px-4 sm:px-6 lg:px-8">
      {/* Left Panel - Price Table */}
      <div className="bg-[#020405] rounded-2xl p-4 sm:p-6 w-full md:w-[40%]">
        <h3 className="font-medium text-white mb-4 text-lg sm:text-xl">Current product retail prices</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border-collapse">
            <tbody>
              <tr
                className="py-2 sm:py-4 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200 cursor-pointer"
                onClick={() => setIsDailyModalOpen(true)}
              >
                <td className="text-start text-white">
                  PMS <span className="font-medium text-[#5c5d5e] pl-2">Premium Motor Spirit</span>
                </td>
                <td className="text-start text-white">#{priceData["retail-price-analysis"].price.toFixed(2)}</td>
                <td className="text-start text-green-700">+0.37</td>
                <td className="text-center p-1 sm:p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</td>
              </tr>
              <tr className="py-2 sm:py-4 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  AGO <span className="font-medium text-[#5c5d5e] pl-2">Automotive Gas Oil</span>
                </td>
                <td className="text-start text-white">#{priceData["flights-analysis"].price.toFixed(2)}</td>
                <td className="text-start text-orange-500">-0.34</td>
                <td className="text-center p-1 sm:p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
              </tr>
              <tr className="py-2 sm:py-4 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  ICE <span className="font-medium text-[#5c5d5e] pl-2">ICE Brent Crude</span>
                </td>
                <td className="text-start text-white">#{priceData["depots-analysis"].price.toFixed(2)}</td>
                <td className="text-start text-green-700">+0.37</td>
                <td className="text-center p-1 sm:p-1.5 text-green-500 rounded-2xl bg-green-700">+0.00%</td>
              </tr>
              <tr className="py-2 sm:py-4 border-b border-[#24282c] hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  DPK <span className="font-medium text-[#5c5d5e] pl-2">Dual Purpose Kerosene</span>
                </td>
                <td className="text-start text-white">#{priceData["power-analysis"].price.toFixed(2)}</td>
                <td className="text-start text-orange-500">-50.90</td>
                <td className="text-center p-1 sm:p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.92%</td>
              </tr>
              <tr className="py-2 sm:py-4 hover:bg-[#0a0b0c] transition-colors duration-200">
                <td className="text-neutral-300 hover:text-green-100">
                  LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                </td>
                <td className="text-start text-white">#{priceData["cargo-analysis"].price.toFixed(2)}</td>
                <td className="text-start text-orange-500">-36.10</td>
                <td className="text-center p-1 sm:p-1.5 text-orange-500 rounded-2xl bg-orange-900">-0.67%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Panel - Chart and Controls */}
      <div className="bg-[#020405] rounded-2xl p-4 sm:p-6 w-full md:w-[60%] relative">
        <div className="w-full mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="font-medium text-white mb-2 sm:mb-4 text-lg sm:text-xl pr-0 sm:pr-10">Retail prices analysis (NGN)</h3>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-end w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("retail-price-analysis")}
              className={`py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm ${
                activeTab === "retail-price-analysis"
                  ? "border-t-2 border-green-500 text-green-700"
                  : "text-[#5c5d5e]"
              }`}
            >
              PMS
            </button>
            <button
              onClick={() => setActiveTab("flights-analysis")}
              className={`py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm ${
                activeTab === "flights-analysis"
                  ? "border-t-2 border-green-500 text-green-700"
                  : "text-[#5c5d5e]"
              }`}
            >
              AGO
            </button>
            <button
              onClick={() => setActiveTab("depots-analysis")}
              className={`py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm ${
                activeTab === "depots-analysis"
                  ? "border-t-2 border-green-500 text-green-700"
                  : "text-[#5c5d5e]"
              }`}
            >
              ICE
            </button>
            <button
              onClick={() => setActiveTab("power-analysis")}
              className={`py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm ${
                activeTab === "power-analysis"
                  ? "border-t-2 border-green-500 text-green-700"
                  : "text-[#5c5d5e]"
              }`}
            >
              DPK
            </button>
            <button
              onClick={() => setActiveTab("cargo-analysis")}
              className={`py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm ${
                activeTab === "cargo-analysis"
                  ? "border-t-2 border-green-500 text-green-700"
                  : "text-[#5c5d5e]"
              }`}
            >
              LPQ
            </button>
          </div>
        </div>
        
        <div className="mb-2 sm:mb-4 h-32 sm:h-40 md:h-48">
          <Line data={chartData} options={chartOptions} />
        </div>
        <button
          className="text-green-700 py-1 sm:py-2 w-full sm:w-auto mb-2"
          onClick={() => setIsDetailedModalOpen(true)}
        >
          View Detailed Summary
        </button>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <select
            className="text-green-700 p-1 sm:p-2 w-full sm:w-auto mb-2 sm:mb-0"
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
            className="text-green-700 p-1 sm:p-2 w-full sm:w-auto mb-2 sm:mb-0"
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
            className="text-green-700 p-1 sm:p-2 w-full sm:w-auto"
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

        {/* Daily Summary Modal */}
        {isDailyModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#020405] rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Summary</h3>
              <button
                className="text-white absolute top-4 right-4"
                onClick={() => setIsDailyModalOpen(false)}
              >
                ✕
              </button>
              <h2 className="text-[#5c5d5e] text-sm sm:text-base">Here's a quick summary of the PMS (Premium Motor Spirit) - Petrol Market in Nigeria breaking down demand, supply, and regional trends</h2>

              <div className="space-y-4 mt-4">
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <h4 className="font-medium">Petrochem daily wire</h4>
                  <h4 className="font-medium">{pmsSummary.daily.date}</h4>
                </div>
                <p className="text-[#5c5d5e] text-sm sm:text-base">Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by: Transportation (70-80%): cars, buses, trucks, motorcycles.</p>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Summary Modal */}
        {isDetailedModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#020405] rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">Detailed Summary</h3>
              <button
                className="text-white absolute top-4 right-4"
                onClick={() => setIsDetailedModalOpen(false)}
              >
                ✕
              </button>

              <h2 className="text-[#5c5d5e] text-sm sm:text-base">Here's a quick summary of the PMS (Premium Motor Spirit) - Petrol Market in Nigeria breaking down demand, supply, and regional trends</h2>

              <div className="space-y-4 mt-4">
                <div className="flex text-white text-sm sm:text-base">
                  <h4 className="font-medium">Demand</h4>
                </div>
                <ul className="px-2 sm:px-4 text-sm sm:text-base">
                  <li className="text-[#5c5d5e] list-disc">Nigeria consumes approximately 40-50 million liters of PMS per day.</li>
                  <li className="text-[#5c5d5e] list-disc">
                    Demand is driven by:
                    <ul className="list-disc pl-4">
                      <li>Transportation (70-80%): cars, buses, trucks, motorcycles.</li>
                      <li>Industrial and commercial activities (15-20%): generators, machinery.</li>
                      <li>Residential use (5-10%): cooking, lighting.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mt-4">
                <div className="flex text-white text-sm sm:text-base">
                  <h4 className="font-medium">Supply</h4>
                </div>
                <ul className="px-2 sm:px-4 text-sm sm:text-base">
                  <li className="text-[#5c5d5e] list-disc">Nigeria relies heavily on imported PMS (95-100%) due to limited refining capacity</li>
                  <li className="text-[#5c5d5e] list-disc">
                    Local refining capacity:
                    <ul className="list-disc pl-4">
                      <li>NNPC</li>
                      <li>Private refineries (e.g, Dangote Refinery): under construction or newly commissioned</li>
                    </ul>
                  </li>
                  <li className="text-[#5c5d5e] list-disc">
                    Importation challenges:
                    <ul className="list-disc pl-4">
                      <li>Foreign exchange rates</li>
                      <li>Supply chain disruptions</li>
                      <li>Quality control issues</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mt-4">
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <h4 className="font-medium">Regional Breakdown</h4>
                </div>
                <p className="text-[#5c5d5e] text-sm sm:text-base">
                  Region: {pmsSummary.detailed.region}, State: {pmsSummary.detailed.state}, Price Range: {pmsSummary.detailed.priceRange}, Average Price Last Week: {pmsSummary.detailed.averagePriceLastWeek}
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