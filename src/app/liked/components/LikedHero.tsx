export const LikedHero: React.FC = () => {
	const number = 9;

	return (
		<section className="first-component w-11/12 xl:max-w-[1440px] xl:mx-auto mt-[32px] px-[10px] mb-[40px] text-white flex flex-col lg:flex-row lg:items-center lg:justify-between">
			<p className="lg:hidden text-hero-title font-black max-sm:text-[50px] max-lg:text-[60px] text-right">
				MY LIST
			</p>

			<div className="">
				<p className="lg:pb-8 pb-[10px]">{number} products</p>
				<div className="flex gap-5">
					<p className="text-main-gray font-thin">Sort By:</p>
					<select name="" id="">
						<option value="">Price Descending</option>
					</select>
				</div>
			</div>
			<p className="max-lg:hidden text-hero-title font-black max-xl:text-[90px]">
				MY LIST
			</p>
		</section>
	);
};
