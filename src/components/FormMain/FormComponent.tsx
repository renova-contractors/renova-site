"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

export const FormComponent: React.FC = (): JSX.Element => {
	const [fileNames, setFileNames] = useState<string[]>([]);
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
				setIsPopup(true);
			} else {
				console.error("Failed to send form:", await response.text());
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};


	const [isFormMobile, setIsFormMobile] = useState(false);

	useEffect(() => {
		const largeScreenMediaQuery = window.matchMedia("(max-width: 992px)");

		const handleScreenResize = (ele: any): void => {
			setIsFormMobile(ele.matches);
		};

		largeScreenMediaQuery.addEventListener("change", handleScreenResize);
		handleScreenResize(largeScreenMediaQuery);

		return () =>
			largeScreenMediaQuery.removeEventListener(
				"change",
				handleScreenResize,
			);
	}, []);

	return (
		<section id="contact" className="scroll-anchor container component-mb ">
			{isPopup && (
				<div className="relative z-50 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col h-[290px] w-full lgw-[622px] bg-black m-auto items-center justify-around">
					<p className="title-white">YOUR MESSAGE WAS SENT</p>
					<p className="text-white">We will contact you within 24 hours</p>
					<Button onClick={() => setIsPopup(false)} variant="secondary">
						Thanks!
					</Button>
				</div>
			)}

			<h2 className="custom-heading xl:text-center relative z-30 ">
				Fill the form and <br />
				<span className="text-main-yellow">we will contact you</span>
			</h2>

			<form
				className={`mx-auto w-max rounded-3xl relative z-30 ${
					isFormMobile ? "flex flex-col items-center justify-center" : ""
				}`}
				onSubmit={handleSubmit(onSubmit)}
				method="post"
				encType="multipart/form-data"
			>
				<div
					className={`${
						isFormMobile
							? "max-w-[273px] flex flex-col inside-mb"
							: "flex gap-14 justify-between mt-10 mb-20 max-md:flex-wrap"
					}`}
				>
					<div className="max-w-[273px] flex flex-col">
						<label className="text-white mb-5">Your Name*</label>
						<input
							placeholder="Enter Your name"
							className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("name")}
						/>
					</div>

					<div className="max-w-[273px] flex flex-col ">
						<label className="text-white mb-5">Phone Number*</label>
						<input
							placeholder="+1(234) 567-890"
							className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("number")}
						/>
					</div>
				</div>

				<div className="w-[605px] max-w-[273px] flex flex-col mb-20">
					<label className="text-white mb-5">Your Message</label>
					<textarea
						{...register("comments", { required: true })}
						className="h-[40px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
						placeholder="Enter your comments..."
					/>
				</div>

				<div className="flex flex-col gap-4 items-center mt-20 max-w-[350px] text-center">
					<p className="white-paragraph">
						By clicking Submit button I agree to the{" "}
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
		</section>
	);
};
