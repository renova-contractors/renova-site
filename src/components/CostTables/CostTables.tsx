// @ts-nocheck
/* eslint-disable */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { data } from "@/constants/costData/costTable";
import { costHeading, locationNames } from "@/constants/costKeywords/costKeywords";

const cityCostIndices = {
  seattle: 1.0,
  bellevue: 1.1,
  redmond: 1.06,
  kirkland: 1.05,
  tacoma: 0.95,
  olympia: 0.91,
  everett: 0.97,
  bellingham: 0.96,
  renton: 1.01,
  kent: 0.98,
  auburn: 0.96,
  "federal-way": 0.95,
  shoreline: 1.02,
  lynnwood: 0.99,
  bothell: 1.02,
  edmonds: 1.03,
  issaquah: 1.05,
  sammamish: 1.06,
  kenmore: 1.02,
  "mill-creek": 1.04,
  "bainbridge-island": 1.07,
  bremerton: 0.92,
  "port-orchard": 0.9,
  "gig-harbor": 0.98,
  puyallup: 0.94,
  lakewood: 0.92,
  "university-place": 0.95,
  marysville: 0.93,
  "mount-vernon": 0.92,
  anacortes: 0.94,
  "oak-harbor": 0.91,
  "mercer-island": 1.3,
  burien: 0.97,
};

const getCostMultiplier = (city) =>
  cityCostIndices[city.toLowerCase()] || cityCostIndices["seattle"];

const formatCurrency = (num: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);

export const CostTables = ({ category = null, city = "seattle" }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [showAll, setShowAll] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const costMultiplier = getCostMultiplier(city);

  // Check scroll position for category buttons
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    };

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const applyMultiplier = (value, multiplier) => {
    if (typeof value === "string" && value.includes("$")) {
      if (value.includes("-")) {
        const [minValue, maxValue] = value.split("-").map((v) => v.trim());
        const minNumber = parseFloat(minValue.replace(/[^0-9.-]+/g, ""));
        const maxNumber = parseFloat(maxValue.replace(/[^0-9.-]+/g, ""));
        return `${formatCurrency(minNumber * multiplier)} - ${formatCurrency(
          maxNumber * multiplier
        )}`;
      }
      const numberValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
      return formatCurrency(numberValue * multiplier);
    }
    return value;
  };

  const handleServiceClick = (serviceCategory) => {
    setSelectedCategory(serviceCategory);
    // Smooth scroll to top of section
    document.getElementById("cost_table")?.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest" 
    });
  };

  const handleCloseClick = () => {
    setSelectedCategory(null);
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedServices = showAll
    ? data.all_services
    : data.all_services.slice(0, 4);
  const selectedServiceData = data.all_services.find(
    (service) => service.category === selectedCategory
  );

  return (
    <section
      id="cost_table"
      aria-label="Remodeling cost table"
      className="container scroll-anchor"
    >
      <div className="component-mb relative flex flex-col bg-gradient-to-br from-blue-900 via-blue-700 to-teal-500 rounded-3xl p-4 md:p-6 lg:p-10 shadow-2xl backdrop-blur-sm">
        {/* Heading with improved typography */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight tracking-tight">
            {selectedCategory
              ? costHeading[selectedCategory]
              : "Remodeling Costs"}
            {city && (
              <span className="block md:inline md:ml-2 text-teal-200 text-xl md:text-2xl lg:text-3xl font-medium">
                in {locationNames[city] || city}
              </span>
            )}
          </h2>
          {!selectedCategory && (
            <p className="text-blue-100 text-sm md:text-base opacity-90">
              Explore average costs for remodeling projects in your area
            </p>
          )}
        </div>

        {/* Category Selector with modern design */}
        <div className="relative mb-6 md:mb-8 -mx-4 md:-mx-6 lg:-mx-10 px-4 md:px-6 lg:px-10">
          {/* Fade gradients */}
          {canScrollLeft && (
            <div className="absolute left-4 md:left-6 lg:left-10 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-4 md:right-6 lg:right-10 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-teal-500 via-teal-500/80 to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <button
              aria-label="Show all remodeling services"
              onClick={() => handleServiceClick(null)}
              className={`group relative px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full whitespace-nowrap transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 ${
                selectedCategory === null
                  ? "bg-white text-blue-900 shadow-lg shadow-white/20"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              <span className="relative z-10">All Services</span>
              {selectedCategory === null && (
                <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-full opacity-50 animate-pulse" />
              )}
            </button>
            {data.all_services.map((service, index) => (
              <button
                key={index}
                aria-label={`Show ${service.project} costs`}
                onClick={() => handleServiceClick(service.category)}
                className={`group relative px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full whitespace-nowrap transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 ${
                  selectedCategory === service.category
                    ? "bg-white text-blue-900 shadow-lg shadow-white/20"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                <span className="relative z-10">{service.project}</span>
                {selectedCategory === service.category && (
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-full opacity-50 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tables with modern design */}
        <div className="relative -mx-4 md:-mx-6 lg:-mx-10 px-4 md:px-6 lg:px-10">
          <div className="w-full">
            {selectedCategory && selectedServiceData ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {selectedServiceData.project}
                  </h3>
                  <p className="text-blue-100 text-sm opacity-80">
                    Detailed cost breakdown
                  </p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl w-full">
                  <table className="w-full">
                    <caption className="sr-only">
                      Detailed remodeling cost breakdown for {selectedServiceData.project} in{" "}
                      {locationNames[city] || city}
                    </caption>
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-500">
                        <th scope="col" className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                          Service
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                          Cost Range
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                          Average
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                          Labor
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                          Materials
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedServiceData.details.map((detail, index) => (
                        <tr
                          key={index}
                          className="transition-all duration-200 hover:bg-blue-50/50 group cursor-pointer"
                        >
                          <td className="px-3 md:px-4 py-3 md:py-4 whitespace-normal text-xs md:text-sm font-medium text-gray-900 group-hover:text-blue-900 transition-colors min-w-[120px]">
                            {detail.service}
                          </td>
                          <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-900 whitespace-nowrap">
                            {applyMultiplier(detail.cost_range, costMultiplier)}
                          </td>
                          <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-blue-700 whitespace-nowrap">
                            {applyMultiplier(detail.average_cost, costMultiplier)}
                          </td>
                          <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm text-gray-700 whitespace-nowrap">
                            {applyMultiplier(detail.labor_cost, costMultiplier)}
                          </td>
                          <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm text-gray-700 whitespace-nowrap">
                            {applyMultiplier(detail.material_cost, costMultiplier)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl w-full">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <caption className="sr-only">
                        Average remodeling cost ranges for main services in{" "}
                        {locationNames[city] || city}
                      </caption>
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-blue-500">
                          <th scope="col" className="px-3 md:px-4 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider min-w-[150px]">
                            Project
                          </th>
                          <th scope="col" className="px-3 md:px-4 py-3 md:py-4 text-left text-xs md:text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
                            Size
                          </th>
                          <th scope="col" className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
                            Cost Range
                          </th>
                          <th scope="col" className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">
                            Average Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {displayedServices.map((service, index) => (
                          <tr
                            key={index}
                            className="transition-all duration-200 hover:bg-blue-50/50 group cursor-pointer"
                            onClick={() => handleServiceClick(service.category)}
                          >
                            <td className="px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-semibold text-gray-900 group-hover:text-blue-900 transition-colors min-w-[150px]">
                              {service.project}
                            </td>
                            <td className="px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm text-gray-600 whitespace-nowrap">
                              {service.size}
                            </td>
                            <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-900 whitespace-nowrap">
                              {applyMultiplier(
                                service.total_cost_range,
                                costMultiplier
                              )}
                            </td>
                            <td className="px-3 md:px-4 py-3 md:py-4 text-right text-xs md:text-sm font-bold text-blue-700 whitespace-nowrap">
                              {applyMultiplier(service.average_cost, costMultiplier)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons with modern design */}
        <div className="flex justify-center mt-6 md:mt-8 gap-3">
          {selectedCategory && selectedServiceData ? (
            <button
              aria-label="Close detailed service table"
              onClick={handleCloseClick}
              className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close Details
              </span>
            </button>
          ) : (
            <button
              aria-label="Toggle between showing all or fewer services"
              onClick={handleToggleShowAll}
              className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    Show More Services
                  </>
                )}
              </span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};
