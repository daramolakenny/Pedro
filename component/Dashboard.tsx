"use client";

import { useState } from "react";
import Link from "next/link";
import Analysis from "./Analysis";

type SectionKey = "dashboard" | "analysis" | "newsreport" | "exclusive-report" | "watchlist" | "settings";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("analysis"); // Typed with SectionKey

  // Static data (no API)
  const rigData = {
    totalRigs: 1200,
    activeRigs: 850,
    utilizationRate: "70.8%",
  };

  const marketTrends = [
    { month: "Jun 2025", pricePerBarrel: "$85.50", trend: "↑ 2.3%" },
    { month: "May 2025", pricePerBarrel: "$83.70", trend: "↓ 1.1%" },
    { month: "Apr 2025", pricePerBarrel: "$84.20", trend: "↑ 0.5%" },
  ];

  const vesselActivity = {
    psvCount: 300,
    ahtsCount: 150,
    operational: "85%",
  };

  // Simulated data for additional sections
  const newsReport = [
    { title: "Oil Prices Rise Amid OPEC Cuts", date: "Jul 10, 2025" },
    { title: "New Rig Deployed in North Sea", date: "Jul 9, 2025" },
  ];

  const exclusiveReport = {
    summary: "Q2 2025 Offshore Activity Report: 15% growth in rig utilization.",
    downloadLink: "#", // Placeholder
  };

  const watchlist = [
    { asset: "Brent Crude", price: "$85.60", change: "+1.2%" },
    { asset: "WTI Crude", price: "$82.30", change: "-0.5%" },
  ];

  const settings = {
    theme: "Dark Mode",
    notifications: "Enabled",
  };

  // Map activeSection to header titles with typed keys
  const sectionTitles: Record<SectionKey, string> = {
    dashboard: "Dashboard",
    analysis: "Analysis",
    newsreport: "News & Report",
    "exclusive-report": "Exclusive Report",
    watchlist: "Watchlist",
    settings: "Settings",
  };

  // Content to display based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Rig Overview</h2>
            <p className="mt-2">Total Rigs: <span className="font-bold">{rigData.totalRigs}</span></p>
            <p>Active Rigs: <span className="font-bold">{rigData.activeRigs}</span></p>
            <p>Utilization Rate: <span className="font-bold">{rigData.utilizationRate}</span></p>
          </div>
        );
      case "analysis":
        return (
          <Analysis />
        );
      case "newsreport":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">News & Report</h2>
            <ul className="mt-2 space-y-2">
              {newsReport.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.title} - {item.date}
                </li>
              ))}
            </ul>
          </div>
        );
      case "exclusive-report":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Exclusive Report</h2>
            <p className="mt-2 text-gray-600">{exclusiveReport.summary}</p>
            <a href={exclusiveReport.downloadLink} className="mt-2 inline-block text-blue-500 hover:underline">
              Download Report
            </a>
          </div>
        );
      case "watchlist":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Watchlist</h2>
            <ul className="mt-2 space-y-2">
              {watchlist.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.asset}: ${item.price} ({item.change})
                </li>
              ))}
            </ul>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Settings</h2>
            <p className="mt-2 text-gray-600">Theme: {settings.theme}</p>
            <p>Notifications: {settings.notifications}</p>
          </div>
        );
      default:
        return <div>Select a section to view content.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1b1b]">
      {/* Main Content with Sidebar */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Toggle for Mobile */}
        <button
          className="md:hidden p-2 text-[#002853] bg-white m-4 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Sidebar */}
        <aside className={`bg-[#020405] text-white p-4 ${isSidebarOpen ? "block" : "hidden"} md:block w-full md:w-64`}>
          <h1 className="text-bold text-2xl pb-12 px-4 font-bold">
            <span className="text-green-700">Petro</span>data
          </h1>
          <ul className="space-y-6">
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("dashboard");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "dashboard" ? " text-green-700" : "text-white"}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("analysis");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "analysis" ? " text-green-700" : "text-white"}`}
              >
                Analysis
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("newsreport");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "newsreport" ? " text-green-700" : "text-white"}`}
              >
                News & Report
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("exclusive-report");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "exclusive-report" ? " text-green-700" : "text-white"}`}
              >
                Exclusive Report
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("watchlist");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "watchlist" ? " text-green-700" : "text-white"}`}
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setActiveSection("settings");
                  setIsSidebarOpen(false);
                }}
                className={`block py-2 px-4 rounded ${activeSection === "settings" ? " text-green-700" : "text-white"}`}
              >
                Settings
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 px-4">
          <h1 className="text-3xl font-bold text-white mb-6">
            {sectionTitles[activeSection] || "Dashboard"}
          </h1>
          <div className="">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}