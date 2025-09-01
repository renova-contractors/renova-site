// @ts-nocheck
/* eslint-disable */

"use client";

import React, { useState } from "react";
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

  const costMultiplier = getCostMultiplier(city);

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
      className="component-mb scroll-anchor container mx-auto p-6 bg-gradient-to-br from-blue-900 to-teal-400 rounded-2xl shadow-lg"
    >
      {/* Heading */}
      <h2 className="text-white text-3xl mb-6">
        {selectedCategory
          ? costHeading[selectedCategory]
          : "Remodeling Costs"}
        {city && ` in ${locationNames[city] || city}`}
      </h2>

      {/* Category Selector */}
      <div className="flex overflow-x-auto mb-4">
        <button
          aria-label="Show all remodeling services"
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 text-sm font-bold rounded ${
            selectedCategory === null ? "bg-black text-white" : "bg-white"
          }`}
        >
          All Services
        </button>
        {data.all_services.map((service, index) => (
          <button
            key={index}
            aria-label={`Show ${service.project} costs`}
            onClick={() => handleServiceClick(service.category)}
            className={`px-4 py-2 text-sm ${
              selectedCategory === service.category
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {service.project}
          </button>
        ))}
      </div>

      {/* Selected Service Table */}
      <div className="overflow-x-auto">
        {selectedCategory && selectedServiceData ? (
          <>
            <h3 className="text-xl text-white text-center mb-4">
              {selectedServiceData.project}
            </h3>
            <table className="table-auto min-w-full bg-white rounded-lg">
              <caption className="sr-only">
                Detailed remodeling cost breakdown for {selectedServiceData.project} in{" "}
                {locationNames[city] || city}
              </caption>
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    Service
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Cost Range
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Average Cost
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Labor Cost
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Material Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedServiceData.details.map((detail, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 whitespace-normal">
                      {detail.service}
                    </td>
                    <td className="px-4 py-2">
                      {applyMultiplier(detail.cost_range, costMultiplier)}
                    </td>
                    <td className="px-4 py-2">
                      {applyMultiplier(detail.average_cost, costMultiplier)}
                    </td>
                    <td className="px-4 py-2">
                      {applyMultiplier(detail.labor_cost, costMultiplier)}
                    </td>
                    <td className="px-4 py-2">
                      {applyMultiplier(detail.material_cost, costMultiplier)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button
                aria-label="Close detailed service table"
                onClick={handleCloseClick}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            {/* General Service Table */}
            <table className="table-auto min-w-full bg-white rounded-lg">
              <caption className="sr-only">
                Average remodeling cost ranges for main services in{" "}
                {locationNames[city] || city}
              </caption>
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    Project
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Size
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Cost Range
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Average Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedServices.map((service, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{service.project}</td>
                    <td className="px-4 py-2">{service.size}</td>
                    <td className="px-4 py-2">
                      {applyMultiplier(
                        service.total_cost_range,
                        costMultiplier
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {applyMultiplier(service.average_cost, costMultiplier)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button
                aria-label="Toggle between showing all or fewer services"
                onClick={handleToggleShowAll}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
