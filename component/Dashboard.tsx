"use client"

import { useState } from "react";
import Link from "next/link";
import Analysis from "./Analysis";

type SectionKey = "dashboard" | "analysis" | "newsreport" | "exclusive-report" | "watchlist" | "settings";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("analysis"); // Typed with SectionKey

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
            <h2 className="text-xl font-semibold text-gray-700">Coming soon</h2>
          </div>
        );
      case "analysis":
        return (
          <Analysis />
        );
      case "newsreport":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Coming soon</h2>
          </div>
        );
      case "exclusive-report":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Coming soon</h2>
          </div>
        );
      case "watchlist":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Coming soon</h2>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Coming soon</h2>
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
        <div className={`bg-[#020405] text-white p-4 ${isSidebarOpen ? "block" : "hidden"} md:block w-full md:w-64`}>
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
        </div>

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