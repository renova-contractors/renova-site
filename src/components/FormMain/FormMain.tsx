"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import closing from "/public/logo/close.svg";
import Link from "next/link";

interface FormMainProps {
	children?: React.ReactNode;
}

export const FormMain: React.FC<FormMainProps> = ({ children }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const { register, handleSubmit } = useForm();
	const [isPopup, setIsPopup] = useState(false);

	const onSubmit = async (data: any): Promise<void> => {
		try {
			const response = await fetch("/api/notify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: data.name,
					number: data.number,
					comments: data.comments,
				}),
			});

			if (response.ok) {
				setIsFormOpen(false);
				setIsPopup(true);

				// Optional: Google Ads conversion tracking
				window.gtag && window.gtag('config', 'AW-10929602248');
				window.gtag && window.gtag("event", "conversion", {
					send_to: "AW-10929602248/buugCJOH6oAaEMj90dso",
				});
			} else {
				console.error("Failed to send form:", await response.text());
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};


	const [isFormMobile, setIsFormMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 992px)");
		const handleResize = (e: any): void => setIsFormMobile(e.matches);
		mediaQuery.addEventListener("change", handleResize);
		handleResize(mediaQuery);
		return () => mediaQuery.removeEventListener("change", handleResize);
	}, []);

	return (
		<div>
			{isPopup && (
				<div className="absolute z-50 top-[50%] left-1/2 -translate-x-1/2 -translate-y-2/3 flex flex-col h-[290px] w-full lg:w-[622px] bg-black m-auto items-center justify-around">
					<p className="title-white">YOUR MESSAGE WAS SENT</p>
					<p className="text-white">We will contact you within 24 hours</p>
					<Button onClick={() => setIsPopup(false)} variant="secondary">
						Thanks!
					</Button>
				</div>
			)}

			{children ? (
				<div onClick={() => setIsFormOpen(true)}>{children}</div>
			) : (
				<Button
					onClick={() => setIsFormOpen(true)}
					className="w-[198px] h-[60px] p-[10px] content-center items-center rounded-[40px] font-bold text-main-yellow border-[1px] border-main-yellow bg-transparent gap-[10px]"
					variant="secondary"
				>
					Contact Us
				</Button>
			)}

			{isFormOpen && !isFormMobile && (
				<form
					className="fixed bg-black z-50 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-max mt-20 p-10 rounded-3xl"
					onSubmit={handleSubmit(onSubmit)}
					method="post"
					encType="multipart/form-data"
				>
					<button
						className="float-right relative bottom-5"
						onClick={() => setIsFormOpen(false)}
					>
						<Image alt="form-closing-button" src={closing} />
					</button>
					<div className="flex gap-14 justify-between mt-10 mb-20 max-md:flex-wrap">
						<div className="max-w-[273px] flex flex-col">
							<label className="text-white mb-5">Your Name*</label>
							<input
								placeholder="Enter Your name"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("name")}
							/>
						</div>
						<div className="max-w-[273px] flex flex-col">
							<label className="text-white mb-5">Phone Number</label>
							<input
								placeholder="+1(234) 567-890"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
								type="text"
								{...register("number")}
							/>
						</div>
					</div>
					<div className="w-[605px] flex flex-col mb-20">
						<label className="text-white mb-5">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className="h-[40px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
						/>
					</div>
					<div className="flex mt-20 justify-between">
						<p className="white-paragraph">
							By clicking Submit I agree to the{" "}
							<span className="text-white underline">
								<Link href="/">Terms and Conditions</Link>
							</span>
						</p>
						<Button
							onClick={() => setIsPopup(true)}
							variant="secondary"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</form>
			)}

			{isFormMobile && (
				<form
					className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-main-dark flex flex-col items-center justify-center ${
						isFormOpen ? "block" : "hidden"
					}`}
					onSubmit={handleSubmit(onSubmit)}
					method="post"
					encType="multipart/form-data"
				>
					<button
						className="absolute top-[21px] right-[21px] cursor-pointer lg:hidden z-50"
						onClick={() => setIsFormOpen(false)}
					>
						<Image alt="form-closing-button" src={closing} />
					</button>
					<div className="max-w-[273px] flex flex-col">
						<label className="text-white my-2">Your Name*</label>
						<input
							placeholder="Enter Your name"
							className="mb-5 w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("name")}
						/>
					</div>
					<div className="max-w-[273px] flex flex-col">
						<label className="text-white my-2">Phone Number*</label>
						<input
							placeholder="+1(234) 567-890"
							className="mb-5 w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("number")}
						/>
					</div>
					<div className="w-[273px] flex flex-col">
						<label className="text-white my-2">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className="mb-5 h-[40px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
						/>
					</div>
					<div className="max-w-[350px] text-center">
						<p className="white-paragraph mb-5">
							By clicking Submit I agree to the{" "}
							<span className="text-white underline">
								<Link href="/">Terms and Conditions</Link>
							</span>
						</p>
						<Button
							onClick={() => setIsPopup(true)}
							variant="secondary"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</form>
			)}
		</div>
	);
};
