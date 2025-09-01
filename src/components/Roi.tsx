/* eslint-disable */
// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const SeattleRemodelCalculator = ({ category = 'kitchen' }) => {
  const ROI_CURVES = {
    kitchen: (cost) =>
      cost > 0 ? 0.82 - Math.min(0.18, (cost - 60000) * 0.0000025) : 0,
    bathroom: (cost) =>
      cost > 0 ? 0.65 / (1 + Math.exp(-0.000025 * (cost - 40000))) : 0,
    attic: (cost) => (cost > 0 ? Math.min(0.78, 0.6 + cost * 0.000002) : 0),
    basement: (cost) =>
      cost > 0 ? 0.68 + Math.log(Math.max(cost, 1) / 30000) * 0.03 : 0,
    roofing: (cost) =>
      cost > 0 ? 0.82 - Math.min(0.18, (cost - 60000) * 0.0000025) : 0,
    deck: (cost) =>
      cost > 0 ? 0.65 / (1 + Math.exp(-0.000025 * (cost - 40000))) : 0,
    siding: (cost) => (cost > 0 ? Math.min(0.78, 0.6 + cost * 0.000002) : 0),
    flooring: (cost) =>
      cost > 0 ? 0.68 + Math.log(Math.max(cost, 1) / 30000) * 0.03 : 0,
  };

  const PROJECT_DATA = {
    kitchen: { min: 25000, max: 150000, avg: 60000 },
    bathroom: { min: 15000, max: 85000, avg: 30000 },
    attic: { min: 20000, max: 120000, avg: 50000 },
    basement: { min: 30000, max: 200000, avg: 70000 },
    roofing: { min: 25000, max: 150000, avg: 40000 },
    deck: { min: 1500, max: 85000, avg: 18000 },
    siding: { min: 5000, max: 120000, avg: 25000 },
    flooring: { min: 1000, max: 20000, avg: 8000 },
  };

  const isValidCategory = category && PROJECT_DATA[category];

  const reorderedProjects = isValidCategory
    ? [[category, PROJECT_DATA[category]], ...Object.entries(PROJECT_DATA).filter(([key]) => key !== category)]
    : Object.entries(PROJECT_DATA);

  const [investments, setInvestments] = useState(() => {
    const initial = {};
    for (const key in PROJECT_DATA) {
      initial[key] = isValidCategory && key === category ? PROJECT_DATA[key].avg : 0;
    }
    return initial;
  });

  const [roiValues, setRoiValues] = useState({});
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const newRois = Object.entries(investments).reduce(
      (acc, [project, cost]) => {
        acc[project] = ROI_CURVES[project](cost);
        return acc;
      },
      {}
    );
    setRoiValues(newRois);
  }, [investments]);

  const totalDollarsSpent = Object.values(investments).reduce(
    (total, cost) => total + cost,
    0
  );
  const totalValueAdded = Object.entries(investments).reduce(
    (total, [project, cost]) => total + cost * roiValues[project],
    0
  );
  const netReturn = totalDollarsSpent - totalValueAdded;

  const handleInvestmentChange = (project) => (e) => {
    setInvestments((prev) => ({
      ...prev,
      [project]: Number(e.target.value),
    }));
  };

  const initialServices = reorderedProjects.slice(0, 2);
  const remainingServices = reorderedProjects.slice(2);

  return (
    <section
      id="roi"
      className="scroll-anchor container w-full mx-10 p-4 md:p-8 bg-gradient-to-br from-[#f8f9fa] to-[#e3f2fd] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] component-mb"
    >
      <header className="mb-4 md:mb-8 border-b border-[#90caf9] pb-3 md:pb-6">
        <h2 className="text-xl md:text-3xl font-bold text-[#1a237e] leading-tight">
          Remodel ROI Calculator 2025
        </h2>
      </header>

      <div className="md:flex md:gap-6 lg:gap-8">
        <div className="md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
          {initialServices.map(([project, range]) => (
            <article key={project} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#283593] capitalize">
                    {project}
                  </h3>
                  <p className="text-xs text-[#78909c] mt-1">
                    ${range.min.toLocaleString()} - ${range.max.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm md:text-base lg:text-lg font-medium text-[#1a237e]">
                    ${investments[project].toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-[#2e7d32]">
                    {investments[project] > 0
                      ? `${(roiValues[project] * 100).toFixed(1)}%`
                      : "—"}
                  </p>
                </div>
              </div>
              <div className="relative max-sm:px-5">
                <input
                  type="range"
                  min={0}
                  max={range.max}
                  step="1000"
                  value={investments[project]}
                  onChange={handleInvestmentChange(project)}
                  className="w-full h-1.5 md:h-2 bg-gradient-to-r from-[#bbdefb] to-[#64b5f6] rounded-full"
                  aria-label={`Set investment for ${project}`}
                />
                <div className="absolute top-2 md:top-3 h-0.5 bg-[#90caf9] left-0 right-0 -z-10" />
              </div>
            </article>
          ))}

          {showAllServices &&
            remainingServices.map(([project, range]) => (
              <article key={project} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg font-semibold text-[#283593] capitalize">
                      {project}
                    </h4>
                    <p className="text-xs text-[#78909c] mt-1">
                      ${range.min.toLocaleString()} - ${range.max.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm md:text-base lg:text-lg font-medium text-[#1a237e]">
                      ${investments[project].toLocaleString()}
                    </p>
                    <p className="text-xs md:text-sm font-medium text-[#2e7d32]">
                      {investments[project] > 0
                        ? `${(roiValues[project] * 100).toFixed(1)}%`
                        : "—"}
                    </p>
                  </div>
                </div>
                <div className="relative max-sm:px-5">
                  <input
                    type="range"
                    min={0}
                    max={range.max}
                    step="1000"
                    value={investments[project]}
                    onChange={handleInvestmentChange(project)}
                    className="w-full h-1.5 md:h-2 bg-gradient-to-r from-[#bbdefb] to-[#64b5f6] rounded-full"
                    aria-label={`Set investment for ${project}`}
                  />
                  <div className="absolute top-2 md:top-3 h-0.5 bg-[#90caf9] left-0 right-0 -z-10" />
                </div>
              </article>
            ))}

          <div className="flex justify-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="text-sm md:text-base font-medium text-[#1a237e] hover:text-[#283593] underline"
            >
              {showAllServices ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        <aside className="md:w-1/2 mt-4 md:mt-0">
          <div className="p-4 relative h-full md:p-6 bg-white rounded-xl border border-[#bbdefb] space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Total Investment</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]">
                  ${totalDollarsSpent.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Value Added</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]">
                  ${Math.round(totalValueAdded).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Net Remodel Cost</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2e7d32]">
                  ${Math.round(netReturn).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SeattleRemodelCalculator;
