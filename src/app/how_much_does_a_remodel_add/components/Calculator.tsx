/* eslint-disable */
// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const SeattleRemodelCalculator = ({category}) => {
  // ROI functions for all services
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
	decking: (cost) =>
	  cost > 0 ? 0.65 / (1 + Math.exp(-0.000025 * (cost - 40000))) : 0,
	siding: (cost) => (cost > 0 ? Math.min(0.78, 0.6 + cost * 0.000002) : 0),
	flooring: (cost) =>
	  cost > 0 ? 0.68 + Math.log(Math.max(cost, 1) / 30000) * 0.03 : 0,
  };

  const PROJECT_DATA = {
	kitchen: { min: 25000, max: 150000, avg: 68000 },
	bathroom: { min: 15000, max: 85000, avg: 32000 },
	attic: { min: 20000, max: 120000, avg: 45000 },
	basement: { min: 30000, max: 200000, avg: 75000 },
	roofing: { min: 25000, max: 150000, avg: 68000 },
	decking: { min: 15000, max: 85000, avg: 32000 },
	siding: { min: 20000, max: 120000, avg: 45000 },
	flooring: { min: 30000, max: 200000, avg: 75000 },
  };

  const [investments, setInvestments] = useState({
	kitchen: 0,
	bathroom: 0,
	attic: 0,
	basement: 0,
	roofing: 0,
	decking: 0,
	siding: 0,
	flooring: 0,
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

  // Calculate totals
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

  // Get the first 4 services and the remaining services
  const initialServices = Object.entries(PROJECT_DATA).slice(0, 2);
const remainingServices = [...Object.entries(PROJECT_DATA).slice(2, 4),
  ...Object.entries(PROJECT_DATA).slice(4)

];


  return (
	<section
	  className="container w-full mx-10 p-4 md:p-8 bg-gradient-to-br from-[#f8f9fa] to-[#e3f2fd] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] component-mb"
	>
	  {/* Header */}
	  <div className="mb-4 md:mb-8 border-b border-[#90caf9] pb-3 md:pb-6">
		<h3 className="text-xl md:text-3xl font-bold text-[#1a237e] leading-tight">
		Remodel ROI Calculator 2025
		</h3>
	  </div>

	  <div className="md:flex md:gap-6 lg:gap-8">
		{/* Services Column */}
		<div className="md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
		  {/* Show initial 4 services */}
		  {initialServices.map(([project, range]) => (
			<div key={project} className="space-y-2">
			  <div className="flex justify-between items-start">
				<div>
				  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#283593] capitalize">
					{project}
				  </h3>
				  <p className="text-xs text-[#78909c] mt-1">
					${range.min.toLocaleString()}-${range.max.toLocaleString()}
				  </p>
				</div>
				<div className="text-right">
				  <p className="text-sm md:text-base lg:text-lg font-medium text-[#1a237e]">
					${investments[project].toLocaleString()}
				  </p>
				  <p className="text-xs md:text-sm font-medium text-[#2e7d32]">
					{(roiValues[project] * 100).toFixed(1)}%
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
				/>
				<div className="absolute top-2 md:top-3 h-0.5 bg-[#90caf9] left-0 right-0 -z-10" />
			  </div>
			</div>
		  ))}

		  {/* Show remaining services if expanded */}
		  {showAllServices &&
			remainingServices.map(([project, range]) => (
			  <div key={project} className="space-y-2">
				<div className="flex justify-between items-start">
				  <div>
					<h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#283593] capitalize">
					  {project}
					</h3>
					<p className="text-xs text-[#78909c] mt-1">
					  ${range.min.toLocaleString()}-${range.max.toLocaleString()}
					</p>
				  </div>
				  <div className="text-right">
					<p className="text-sm md:text-base lg:text-lg font-medium text-[#1a237e]">
					  ${investments[project].toLocaleString()}
					</p>
					<p className="text-xs md:text-sm font-medium text-[#2e7d32]">
					  {(roiValues[project] * 100).toFixed(1)}%
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
				  />
				  <div className="absolute top-2 md:top-3 h-0.5 bg-[#90caf9] left-0 right-0 -z-10" />
				</div>
			  </div>
			))}

		  {/* Expand/Collapse Button */}
		  <div className="flex justify-center">
			<button
			  onClick={() => setShowAllServices(!showAllServices)}
			  className="text-sm md:text-base font-medium text-[#1a237e] hover:text-[#283593] underline"
			>
			  {showAllServices ? "Show Less" : "Show More"}
			</button>
		  </div>
		</div>

		{/* Results Panel */}
		<div className="md:w-1/2  mt-4 md:mt-0">
		  <div className="p-4 relative h-full md:p-6 bg-white rounded-xl border border-[#bbdefb] space-y-4 md:space-y-6">
			<div className="space-y-3 md:space-y-4">
			  <div>
				<p className="text-xs md:text-sm text-[#78909c]">
				  Total Investment
				</p>
				<p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]">
				  ${totalDollarsSpent.toLocaleString()}
				</p>
			  </div>
			  <div>
				<p className="text-xs md:text-sm text-[#78909c]">
				  Value Added
				</p>
				<p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e]">
				  ${Math.round(totalValueAdded).toLocaleString()}
				</p>
			  </div>
			  <div>
				<p className="text-xs md:text-sm text-[#78909c]">
				  Net Remodel Cost
				</p>
				<p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2e7d32]">
				  ${Math.round(netReturn).toLocaleString()}
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>

	  {/* Global Styles */}
	  <style jsx global>{`
		input[type="range"]::-webkit-slider-thumb {
		  transition: transform 0.2s, box-shadow 0.2s;
		  width: 1rem;
		  height: 1rem;
		}
		@media (min-width: 768px) {
		  input[type="range"]::-webkit-slider-thumb {
			width: 1.5rem;
			height: 1.5rem;
		  }
		}
		input[type="range"]:hover::-webkit-slider-thumb {
		  transform: scale(1.1);
		  box-shadow: 0 2px 6px rgba(26, 35, 126, 0.2);
		}
		input[type="range"]:active::-webkit-slider-thumb {
		  transform: scale(1.15);
		}
	  `}</style>
	</section>
  );
};

export default SeattleRemodelCalculator;
