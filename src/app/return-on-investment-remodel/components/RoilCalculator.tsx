/* eslint-disable */
// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const RoiCalculator = ({ category = 'kitchen' }) => {
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

  // Only show the specific category passed as prop
  const isValidCategory = category && PROJECT_DATA[category];
  const projectData = isValidCategory ? PROJECT_DATA[category] : PROJECT_DATA.kitchen;
  const projectName = isValidCategory ? category : 'kitchen';

  const [investment, setInvestment] = useState(projectData.avg);
  const [roiValue, setRoiValue] = useState(0);

  useEffect(() => {
    const newRoi = ROI_CURVES[projectName](investment);
    setRoiValue(newRoi);
  }, [investment, projectName]);

  const valueAdded = investment * roiValue;
  const netReturn = investment - valueAdded;

  const handleInvestmentChange = (e) => {
    setInvestment(Number(e.target.value));
  };

  return (
    <section
      id="roi"
      className="scroll-anchor container w-full mx-10 p-4 md:p-8 bg-gradient-to-br from-[#f8f9fa] to-[#e3f2fd] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] component-mb"
      aria-label={`${projectName} remodel ROI calculator`}
      role="application"
    >
      <header className="mb-4 md:mb-8 border-b border-[#90caf9] pb-3 md:pb-6">
        <h1 className="text-xl md:text-3xl font-bold text-[#1a237e] leading-tight">
          {projectName.charAt(0).toUpperCase() + projectName.slice(1)} Remodel ROI Calculator 2025
        </h1>
        <p className="text-sm text-[#78909c] mt-2">
          Interactive calculator for {projectName} remodel return on investment in Seattle
        </p>
      </header>

      <div className="md:flex md:gap-6 lg:gap-8">
        <div className="md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
          <article className="space-y-2" role="region" aria-label={`${projectName} investment controls`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#283593] capitalize">
                  {projectName} Investment
                </h3>
                <p className="text-xs text-[#78909c] mt-1">
                  Range: ${projectData.min.toLocaleString()} - ${projectData.max.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm md:text-base lg:text-lg font-medium text-[#1a237e]" 
                   aria-label={`Current investment: $${investment.toLocaleString()}`}>
                  ${investment.toLocaleString()}
                </p>
                <p className="text-xs md:text-sm font-medium text-[#2e7d32]"
                   aria-label={`ROI percentage: ${investment > 0 ? (roiValue * 100).toFixed(1) : 0}%`}>
                  {investment > 0
                    ? `${(roiValue * 100).toFixed(1)}%`
                    : "—"}
                </p>
              </div>
            </div>
            <div className="relative max-sm:px-5">
              <label htmlFor={`${projectName}-investment-slider`} className="sr-only">
                Adjust {projectName} investment amount
              </label>
              <input
                id={`${projectName}-investment-slider`}
                type="range"
                min={0}
                max={projectData.max}
                step="1000"
                value={investment}
                onChange={handleInvestmentChange}
                className="w-full h-1.5 md:h-2 bg-gradient-to-r from-[#bbdefb] to-[#64b5f6] rounded-full"
                aria-label={`Set investment for ${projectName} remodel`}
                aria-valuemin={0}
                aria-valuemax={projectData.max}
                aria-valuenow={investment}
                aria-valuetext={`$${investment.toLocaleString()}`}
              />
              {/* Instructions Section */}
            <div className="max-sm:hidden mt-6 pt-4 border-t border-[#e3f2fd]">
              <h4 className="text-sm font-semibold text-[#1a237e] mb-2">How to Use This Calculator</h4>
              <div className="space-y-2 text-xs text-[#78909c]">
                <p>• <span className="font-medium text-[#1a237e]">Drag the slider</span> to set your planned {projectName} investment amount</p>
                <p>• <span className="font-medium text-[#1a237e]">View real-time calculations</span> for ROI percentage and value added</p>
                <p>• <span className="font-medium text-[#1a237e]">See your net cost</span> after the property value increase</p>
                <p>• <span className="font-medium text-[#1a237e]">Make informed decisions</span> about your {projectName} remodel investment</p>
              </div>
            </div>
              <div className="absolute top-2 md:top-3 h-0.5 bg-[#90caf9] left-0 right-0 -z-10" />
            </div>
          </article>
        </div>

        <aside className="md:w-1/2 mt-4 md:mt-0" role="complementary" aria-label="ROI calculation results">
          <div className="p-4 relative h-full md:p-6 bg-white rounded-xl border border-[#bbdefb] space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold text-[#1a237e] mb-4">Calculation Results</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Total Investment</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]"
                   aria-label={`Total investment amount: $${investment.toLocaleString()}`}>
                  ${investment.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Value Added</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]"
                   aria-label={`Value added to property: $${Math.round(valueAdded).toLocaleString()}`}>
                  ${Math.round(valueAdded).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#78909c]">Net Remodel Cost</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2e7d32]"
                   aria-label={`Net cost after value increase: $${Math.round(netReturn).toLocaleString()}`}>
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

export default RoiCalculator;
