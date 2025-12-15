import React from "react";
import Image from "next/image";

import styles from "./Styles.module.css";

//images
import contract from "/public/perks-grid/contract-document-svgrepo-com.svg";
import reporting from "/public/perks-grid/smart-phone-screen-with-message-bubbles-sms-design-template-for-messenger-chat-free-vector.jpg";
import licensing from "/public/perks-grid/id-card-svgrepo-com.svg";
import fullService from "/public/perks-grid/technical-support-service-2-svgrepo-com.svg";
import prices from "/public/perks-grid/pngtree-best-price-discount-sale-label-vector-and-png-png-image_4460371.webp";
import material from "/public/perks-grid/medal-quality-svgrepo-com.svg";
import all_day from "/public/perks-grid/24_7.png";
import budget from "/public/perks-grid/budget-cost-svgrepo-com.svg";

const PerksComponentGrid = () => {
	return (
		<section
			className="container"
			aria-label="Perks of remodeling with Renova Contractors LLC"
		>
			<h2 className="custom-heading first-letter:text-main-yellow">
				What is it like to remodel with us?
			</h2>
			<div className="grid grid-cols-6 max-sm:flex max-sm:flex-col max-sm:overflow-y-auto max-sm:max-h-[600px] slider-gap w-full component-mb max-sm:gap-4">
				<article
					className={`${styles.mobile} bg-white flex max-sm:flex-row-reverse col-span-3 max-sm:col-span-full max-sm:w-full h-[250px] rounded-3xl py-10 px-10 custom-mobile-class items-start`}
				>
					<Image
						quality={30}
						height={120}
						src={contract}
						alt="Contract icon representing fixed costs and warranties"
						width={120}
					/>
					<div className="sm:ml-5">
						<h4 className="text-title mb-2">
							🛠️ Clear Pricing, Firm Deadlines
						</h4>
						<p className="mt-3 max-sm:mt-1">
							Upfront quotes, no padded costs, and realistic
							timelines that we stick to — so you know exactly
							what to expect.
						</p>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-white flex col-span-3 max-sm:col-span-full max-sm:w-full h-[250px] max-sm:h-[150px] max-sm:text-sm max-sm:py-3 max-sm:px-2 max-sm:rounded-xl rounded-3xl py-10 px-10 items-start`}
				>
					<div>
						<h4 className="text-title mb-2">
							📲 Daily Check-ins, No Guessing
						</h4>
						<p className="mt-3 max-sm:mt-1">
							You&apos;ll get real updates on what was done, what&apos;s
							next, and who&apos;s coming — we don&apos;t leave you
							guessing.
						</p>
					</div>
					<Image
						quality={30}
						height={150}
						src={reporting}
						alt="Smartphone screen showing daily progress reports"
					/>
				</article>

				<article
					className={`${styles.mobile} bg-dark-red col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title mb-1">
							👷‍♂️ Licensed and Verified Crews
						</h4>
						<p className="mt-2 max-sm:mt-1">
							Every trade on-site is licensed and insured —
							plumbing, electrical, HVAC
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={licensing}
							alt="Seal icon representing licensed professionals"
						/>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-dark-orange col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">
							🔁 Start-to-Finish Project Oversight
						</h4>
						<p className="mt-2 max-sm:mt-2">
							We manage the full process from design to inspection
							— no bouncing between multiple contractors.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={fullService}
							alt="Icon showing full-service contracting"
						/>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-tortoise col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">🧱 Materials That Hold Up</h4>
						<p className="mt-2 max-sm:mt-2">
							We choose products that meet spec and perform long
							term — no budget substitutes or off-brand finishes.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={material}
							alt="Icon representing high-quality building materials"
						/>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-white col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-main-dark`}
				>
					<div>
						<h4 className="text-title">
							💵 Transparent, Honest Rates
						</h4>
						<p className="mt-2 max-sm:mt-2">
							Our pricing stays consistent — we don’t raise rates
							mid-project or sneak in hidden extras.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={prices}
							alt="Label icon representing fair and transparent pricing"
						/>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-light-orange col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">24/7 Support</h4>
						<p className="mt-2 max-sm:mt-2">
							Need something after hours? You won’t be left
							hanging — we stay available throughout your project.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={all_day}
							alt="24/7 customer support icon"
						/>
					</div>
				</article>

				<article
					className={`${styles.mobile} bg-dark-purple col-span-2 max-sm:col-span-full max-sm:w-full slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">
							💡 Smart Planning Within Budget
						</h4>
						<p className="mt-2 max-sm:mt-2">
							We help you plan around your actual budget and use
							your money where it makes the most impact.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={budget}
							alt="Icon representing budget-friendly planning"
						/>
					</div>
				</article>
			</div>
		</section>
	);
};

export default PerksComponentGrid;
