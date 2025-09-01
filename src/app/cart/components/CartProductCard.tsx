import Image from "next/image";
import countertop from "/public/contentImages/countertops/countertop1.jpg";
import tick_included from "/public/logo/tick_included.svg";
import add from "/public/logo/add.svg";
import remove from "/public/logo/remove.svg";
import closing from "/public/logo/close.svg";

export const CardProductCard: React.FC = () => (
	<div className="w-full md:max-w-[814px] flex flex-col md:flex-row justify-between items-center md:p-5">
		<Image
			src={countertop}
			height={119}
			width={119}
			alt="product_image"
			className="max-md:hidden"
		/>
		<div className="flex flex-row md:flex-col gap-4">
			<Image
				src={countertop}
				height={119}
				width={119}
				alt=""
				className="md:hidden"
			/>

			<div className="flex flex-col gap-[4px] md:gap-4">
				<p className="title-white">SUPER COOL</p>
				<p className="gray-paragraph ">Countertop, 74x1 1/8, White</p>
				<p className="white-paragraph">$25.00 / sq m</p>
				<div className="flex items-center gap-5">
					<Image src={tick_included} alt="add-button" />
					<p className="white-paragraph">With installation</p>
				</div>
			</div>
		</div>
		<div className="flex items-center gap-5 max-md:mt-[30px]">
			<button>
				<Image src={remove} alt="remove-button" />
			</button>
			<p>1</p>
			<button>
				<Image src={add} alt="" />
			</button>
			<div className="flex md:hidden">
				<p className="text-title text-white">$50</p>
				<button>
					<Image src={closing} alt="close-button" />
				</button>
			</div>
		</div>
		<p className="text-title text-white max-md:hidden">$50</p>
		<button>
			<Image alt="close-button" src={closing} className="max-md:hidden" />{" "}
		</button>
	</div>
);
