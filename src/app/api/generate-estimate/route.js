// @ts-nocheck
/*eslint-disable*/

import { NextResponse } from "next/server";
import OpenAI from "openai";
/* import fs from 'fs';
import path from 'path' */ // I have a 65 sqft bathroom i need completely gut out/ convert bathtub to shower and replace all fixtures mid-grade and heated floors, install fan, move toilet

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

// Неструктурированные данные
const pricingData = `
  Installation of interior door: labor cost $200-600, material cost $150-500, total cost $350-1100.
  Installation of exterior door: labor cost $300-800, material cost $200-600, total cost $500-1400.
  Typical cost per square foot for basement finishing: labor cost $15-50, material cost $10-30, total cost $25-80.
  Installation of HVAC system: labor cost $3000-10000, material cost $2000-7000, total cost $5000-17000.


  BATHROOMS


  Replace in Place ($30,000 - $50,000+)
  Service	Low Cost	High Cost
  Demolition and Disposal	$1,500	$3,000
  Plumbing Fixtures	$3,000	$5,000
  Electrical Work	$2,000	$4,000
  Flooring	$3,000	$6,000
  Tile Work	$5,000	$8,000
  Cabinetry and Countertops	$5,000	$8,000
  Painting	$1,500	$2,500
  Miscellaneous	$1,000	$2,500
  Total	$22,000	$39,000
  Bathroom Reorganize in Place ($50,000 - $75,000)
  Service	Low Cost	High Cost
  Demolition and Disposal	$3,000	$5,000
  Plumbing Fixtures	$5,000	$10,000
  Electrical Work	$4,000	$8,000
  Flooring	$6,000	$12,000
  Tile Work	$8,000	$12,000
  Cabinetry and Countertops	$8,000	$12,000
  Painting	$2,500	$5,000
  Structural Changes	$10,000	$20,000
  Miscellaneous	$3,500	$6,000
  Total	$50,000	$90,000
  Add a Bathroom or Structural Changes ($50,000 - $150,000+)
  Service	Low Cost	High Cost
  Demolition and Disposal	$5,000	$10,000
  Plumbing Fixtures	$10,000	$20,000
  Electrical Work	$8,000	$15,000
  Flooring	$12,000	$25,000
  Tile Work	$12,000	$20,000
  Cabinetry and Countertops	$12,000	$25,000
  Painting	$5,000	$10,000
  Structural Changes	$20,000	$50,000
  Permits and Other Fees	$5,000	$15,000
  Miscellaneous	$11,000	$35,000
  Total	$100,000	$225,000
  Price per Square Foot Calculation for Bathrooms
  Assuming an average bathroom size of 60 square feet:
  Remodel Type	Low Cost per Sq Ft	High Cost per Sq Ft
  Replace in Place	$500	$833
  Bathroom Reorganize in Place	$833	$1,250
  Add a Bathroom or Structural Changes	$833	$2,500











  KITCHEN

  Plumbing and Appliance Locations Unchanged ($75,000 - $150,000+)
  Service	Low Cost	High Cost
  Demolition and Disposal	$3,000	$5,000
  Plumbing Fixtures	$5,000	$10,000
  Electrical Work	$10,000	$20,000
  Flooring	$7,000	$15,000
  Cabinetry	$20,000	$40,000
  Countertops	$10,000	$20,000
  Backsplash	$5,000	$10,000
  Painting	$2,500	$5,000
  Appliances	$12,000	$25,000
  Miscellaneous	$5,500	$10,000
  Total	$80,000	$160,000
  Kitchen Reorganized in Place (No Walls Moved) ($100,000 - $200,000+)
  Service	Low Cost	High Cost
  Demolition and Disposal	$5,000	$10,000
  Plumbing Fixtures	$10,000	$20,000
  Electrical Work	$15,000	$30,000
  Flooring	$10,000	$20,000
  Cabinetry	$30,000	$50,000
  Countertops	$15,000	$30,000
  Backsplash	$8,000	$15,000
  Painting	$5,000	$10,000
  Appliances	$20,000	$40,000
  Miscellaneous	$10,000	$25,000
  Total	$128,000	$280,000
  Re-envision the Space with Structural Changes ($200,000+)
  Service	Low Cost	High Cost
  Demolition and Disposal	$10,000	$20,000
  Plumbing Fixtures	$15,000	$30,000
  Electrical Work	$20,000	$40,000
  Flooring	$20,000	$35,000
  Cabinetry	$50,000	$80,000
  Countertops	$20,000	$40,000
  Backsplash	$10,000	$20,000
  Painting	$10,000	$20,000
  Appliances	$30,000	$60,000
  Structural Changes	$40,000	$80,000
  Permits and Other Fees	$5,000	$15,000
  Miscellaneous	$10,000	$40,000
  Total	$240,000	$480,000
  Price per Square Foot Calculation for Kitchens
  Assuming an average kitchen size of 161 square feet:
  Remodel Type	Low Cost per Sq Ft	High Cost per Sq Ft
  Plumbing and Appliance Locations Unchanged	$466	$932
  Kitchen Reorganized in Place (No Walls Moved)	$621	$1,242
  Re-envision the Space with Structural Changes	$1,242	$2,484







  ROOFING

  Detailed Breakdown by Roofing Type
  Asphalt Shingles
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$200 – $300	$4,000 – $6,000
  Material Cost	$80 – $130	$1,600 – $2,600
  Total Cost	$280 – $430	$5,600 – $8,600
  Architectural / Dimensional Shingles
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$300 – $350	$6,000 – $7,000
  Material Cost	$100 – $250	$2,000 – $5,000
  Total Cost	$400 – $600	$8,000 – $12,000
  Metal
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$400 – $800	$8,000 – $16,000
  Material Cost	$100 – $800	$2,000 – $16,000
  Total Cost	$500 – $1,600	$10,000 – $32,000
  Tile
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$500 – $1,700	$10,000 – $34,000
  Material Cost	$200 – $1,200	$4,000 – $24,000
  Total Cost	$700 – $2,900	$14,000 – $58,000
  Wood Shakes
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$400 – $800	$8,000 – $16,000
  Material Cost	$300 – $700	$6,000 – $14,000
  Total Cost	$700 – $1,500	$14,000 – $30,000
  Slate / Stone
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$400 – $1,400	$8,000 – $28,000
  Material Cost	$600 – $1,600	$12,000 – $32,000
  Total Cost	$1,000 – $3,000	$20,000 – $60,000
  Flat / Rolled / Built-up
  Service	Cost Range per Square	Total Cost (for 20 squares)
  Labor Cost	$200 – $450	$4,000 – $9,000
  Material Cost	$15 – $800	$300 – $16,000
  Total Cost	$215 – $1,250	$4,300 – $25,000





  CABINETS

  Cost Type	Low Cost per Linear Foot	High Cost per Linear Foot	Total Low Cost (25 Linear Feet)	Total High Cost (25 Linear Feet)
  Materials	$150	$380	$3,750	$9,500
  Labor (estimated at 50% of total cost)	$75	$190	$1,875	$4,750
  Total	$225	$570	$5,625	$14,250


  COUNTERTOPS

  Countertop Type	Cost per Square Foot	Range (Low - High)	Total Low Cost (50 sqft)	Total High Cost (50 sqft)
  Granite (1.25 inch level 1 custom slab)	$102.87	$97.08 - $108.66	$4,854.00	$5,433.00
  Marble (1.25 inch standard grade slab)	$141.73	$132.51 - $150.94	$6,625.50	$7,547.00
  Quartz (1.25 inch slab)	$93.34	$81.81 - $104.86	$4,090.50	$5,243.00
  Corian (standard corian)	$62.85	$57.60 - $68.10	$3,142.50	$3,405.00
  Laminate (mid-grade laminate installed)	$45.52	$41.48 - $49.55	$2,276.00	$2,477.50
  Tile (includes mid-grade tile)	$18.70	$16.42 - $20.97	$935.00	$1,048.50



  SIDING

  Siding Material	Cost per Square Foot	Range (Low - High)	Total Low Cost (2,000 sqft)	Total High Cost (2,000 sqft)
  Vinyl Siding	$3.56 - $11.55	$3.37 - $11.55	$6,740	$23,100
  Wood Siding	$5.20 - $12.10	$2.11 - $12.10	$10,400	$24,200
  Fiber Cement Siding	$5.20 - $13.13	$4.60 - $13.13	$10,400	$26,260
  Metal Siding	$2.81 - $8.14	$5.16 - $6.92	$10,320	$13,840
  Stucco Siding	$5.14 - $9.05	$7.88 - $9.13	$15,760	$18,260
  Composite Siding	$3.90 - $6.40	$3.90 - $6.40	$7,800	$12,800
  Insulated Vinyl Siding	$3.67 - $11.63	$3.67 - $11.63	$7,340	$23,260
  Brick Siding	$5.04 - $15.05	$5.04 - $15.05	$10,080	$30,100
  Natural Stone Siding	$28.01 - $50.25	$28.01 - $50.25	$56,020	$100,500




  TILE

  Space	Tile Type	Low Material Cost per Square Foot	High Material Cost per Square Foot	Low Labor Cost per Square Foot	High Labor Cost per Square Foot	Total Low Cost (sqft)	Total High Cost (sqft)
  Kitchen Floor	Ceramic	$6.90	$9.53	$13.80	$19.06	$3,105 (150 sqft)	$4,287 (150 sqft)
	  Porcelain	$8.00	$15.00	$16.00	$30.00	$3,600 (150 sqft)	$6,750 (150 sqft)
	  Natural Stone	$10.00	$30.00	$20.00	$60.00	$4,500 (150 sqft)	$13,500 (150 sqft)
	  Glass	$20.00	$50.00	$40.00	$100.00	$9,000 (150 sqft)	$22,500 (150 sqft)
  Kitchen Backsplash	Ceramic	$10.00	$20.00	$20.00	$40.00	$900 (30 sqft)	$1,800 (30 sqft)
	  Porcelain	$12.00	$25.00	$24.00	$50.00	$1,080 (30 sqft)	$2,250 (30 sqft)
	  Natural Stone	$15.00	$30.00	$30.00	$60.00	$1,350 (30 sqft)	$2,700 (30 sqft)
	  Glass	$20.00	$50.00	$40.00	$100.00	$1,800 (30 sqft)	$4,500 (30 sqft)
  Bathroom Floor	Ceramic	$6.90	$9.53	$13.80	$19.06	$2,070 (100 sqft)	$2,859 (100 sqft)
	  Porcelain	$8.00	$15.00	$16.00	$30.00	$2,400 (100 sqft)	$4,500 (100 sqft)
	  Natural Stone	$10.00	$30.00	$20.00	$60.00	$3,000 (100 sqft)	$9,000 (100 sqft)
	  Glass	$20.00	$50.00	$40.00	$100.00	$6,000 (100 sqft)	$15,000 (100 sqft)
  Shower Area	Ceramic	$7.00	$25.00	$14.00	$50.00	$1,680 (80 sqft)	$6,000 (80 sqft)
	  Porcelain	$8.00	$30.00	$16.00	$60.00	$1,920 (80 sqft)	$7,200 (80 sqft)
	  Natural Stone	$15.00	$35.00	$30.00	$70.00	$3,600 (80 sqft)	$8,400 (80 sqft)
	  Glass	$25.00	$50.00	$50.00	$100.00	$6,000 (80 sqft)	$12,000 (80 sqft)
  Bathroom Walls	Ceramic	$7.00	$25.00	$14.00	$50.00	$2,100 (100 sqft)	$7,500 (100 sqft)
	  Porcelain	$8.00	$30.00	$16.00	$60.00	$2,400 (100 sqft)	$9,000 (100 sqft)
	  Natural Stone	$10.00	$35.00	$20.00	$70.00	$3,000 (100 sqft)	$10,500 (100 sqft)
	  Glass	$25.00	$50.00	$50.00	$100.00	$7,500 (100 sqft)	$15,000 (100 sqft)
  Living Area Floor	Ceramic	$6.90	$9.53	$13.80	$19.06	$4,140 (200 sqft)	$5,718 (200 sqft)
	  Porcelain	$8.00	$15.00	$16.00	$30.00	$4,800 (200 sqft)	$9,000 (200 sqft)
	  Natural Stone	$10.00	$30.00	$20.00	$60.00	$6,000 (200 sqft)	$18,000 (200 sqft)
	  Glass	$20.00	$50.00	$40.00	$100.00	$12,000 (200 sqft)	$30,000 (200 sqft)


  FLOORING

  Flooring Type	Low Material Cost per Square Foot	High Material Cost per Square Foot	Low Labor Cost per Square Foot	High Labor Cost per Square Foot	Total Low Cost per Square Foot	Total High Cost per Square Foot	Suitable Areas
  Hardwood	$5.00	$10.00	$5.00	$8.00	$10.00	$18.00	Living areas, bedrooms, kitchens
  Laminate	$1.00	$3.00	$2.00	$5.00	$3.00	$8.00	Living areas, bedrooms, kitchens
  Carpet	$2.00	$5.00	$2.00	$4.00	$4.00	$9.00	Living areas, bedrooms
  Vinyl	$1.50	$5.00	$2.00	$4.00	$3.50	$9.00	Kitchens, bathrooms, high-moisture areas





  LANDSCAPING

  Landscaping Service	Low Material Cost per Unit	High Material Cost per Unit	Low Labor Cost per Unit	High Labor Cost per Unit	Total Low Cost per Unit	Total High Cost per Unit	Unit of Measurement
  Basic Lawn Care	N/A	N/A	$25.75	$33.33	$25.75	$33.33	Per Hour
  Sod Installation	$0.87	$1.76	$1.00	$2.00	$1.87	$3.76	Per Square Foot
  Mulching	$15.00	$60.00	$10.00	$20.00	$25.00	$80.00	Per Cubic Yard
  Plant Installation	$5.00	$50.00	$5.00	$15.00	$10.00	$65.00	Per Plant
  Tree Planting	$30.00	$150.00	$50.00	$100.00	$80.00	$250.00	Per Tree
  Irrigation System	$800.00	$2,500.00	$500.00	$1,200.00	$1,300.00	$3,700.00	Per System
  Patio Installation	$10.00	$30.00	$8.00	$15.00	$18.00	$45.00	Per Square Foot
  Retaining Wall	$30.00	$50.00	$20.00	$35.00	$50.00	$85.00	Per Linear Foot
  Brick/Stone Work: Includes various projects like block or retaining walls, tuckpointing, stone or paver patios. Costs range from $20 to $70 per square foot.
  Cinder Block Wall: Costs for building a cinder block wall range from $1,500 to $6,000 per project.
  Garden/Retaining Wall: Costs for garden or retaining walls range from $2,000 to $8,000 per project.
  Brick Repair: Includes repairs to existing brick structures, with costs ranging from $150 to $2,000 per project.
  Brick Mailbox: Costs for constructing a brick mailbox range from $600 to $1,500 per project.
  Tuckpointing/Repointing: Costs for tuckpointing or repointing range from $500 to $2,500 per project.
  Chimney Rebuilding: Costs for rebuilding a chimney range from $1,000 to $3,500 per project.
  Paver Patio: Costs for installing a paver patio range from $18 to $45 per square foot.
  Paver Driveway: Costs for installing a paver driveway range from $40 to $90 per square foot.
  Stone Patio/Walkway: Costs for installing a stone patio or walkway range from $30 to $70 per square foot.
  Stone Steps: Costs for constructing stone steps range from $1,000 to $6,000 per project.
  Fireplace Installation: Costs for installing a fireplace range from $4,000 to $15,000 per project.
  Brick Siding: Costs for installing brick siding range from $10,000 to $22,000 per project.
  Stone Siding: Costs for installing stone siding range from $24,000 to $43,000 per project.
  Concrete Block Foundation: Costs for building a concrete block foundation range from $8,000 to $40,000 per project.





  MASONRY
  Masonry Service	Low Cost per Square Foot	High Cost per Square Foot
  Brick/Stone Work	$20.00	$70.00
  Paver Patio	$18.00	$45.00
  Paver Driveway	$40.00	$90.00
  Stone Patio/Walkway	$30.00	$70.00
  Brick Siding	$10.00	$22.00
  Stone Siding	$24.00	$43.00
  * Brick/Stone Work: This includes various projects like block or retaining walls, tuckpointing, and stone or paver patios.
  * Paver Patio: This includes the cost for installing paver patios.
  * Paver Driveway: This includes the cost for installing paver driveways.
  * Stone Patio/Walkway: This includes the cost for installing stone patios or walkways.
  * Brick Siding: This includes the cost for installing brick siding on buildings.
  * Stone Siding: This includes the cost for installing stone siding on buildings.



  `;

const generateEstimate = async (prompt) => {
	try {
		const response = await openai.chat.completions.create({
			model: "gpt-4o",
			messages: [
				{
					role: "system",
					content: `You're a professional remodel and construction estimator that uses our data: ${pricingData}. You give recommendations, suggestions on how to make it better. additionally in the end you explain why someone should give us a call to get a more detailed quote`,
				},
				{
					role: "user",
					content: `user: ${prompt}`,
				},
			],
		});

		const completion = response.choices[0].message.content;
		return completion;
	} catch (error) {
		console.error("Error generating estimate:", error);
		throw new Error("Failed to generate estimate");
	}
};

export async function POST(request) {
	const { prompt } = await request.json();

	if (!prompt) {
		return NextResponse.json(
			{ error: "Prompt is required" },
			{ status: 400 },
		);
	}

	try {
		const result = await generateEstimate(prompt);
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
