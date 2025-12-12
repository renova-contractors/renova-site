"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import closing from "/public/logo/close.svg";
import Link from "next/link";
import { allowOnlyDigits, formatPhoneNumber, validatePhoneNumber } from '@/utils/phoneUtils';

interface FormMainProps {
	children?: React.ReactNode;
}

// Helper function to allow only English letters
const allowOnlyEnglishLetters = (value: string): string => {
	return value.replace(/[^a-zA-Z\s]/g, '');
};

// Helper function to allow only English letters and digits
const allowOnlyEnglishLettersAndDigits = (value: string): string => {
	return value.replace(/[^a-zA-Z0-9\s]/g, '');
};

export const FormMain: React.FC<FormMainProps> = ({ children }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const { register, handleSubmit, formState: { errors }, reset, control } = useForm();
	const [isPopup, setIsPopup] = useState(false);
	const [phoneValue, setPhoneValue] = useState('');

	const onSubmit = async (data: any): Promise<void> => {
		// Close form immediately for better UX (optimistic UI update)
		setIsFormOpen(false);
		reset(); // Reset form fields
		setPhoneValue(''); // Reset phone value

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
				// Show popup only on success
				setIsPopup(true);

				// Optional: Google Ads conversion tracking
				window.gtag && window.gtag('config', 'AW-10929602248');
				window.gtag && window.gtag("event", "conversion", {
					send_to: "AW-10929602248/buugCJOH6oAaEMj90dso",
				});
			} else {
				console.error("Failed to send form:", await response.text());
				// Optionally: show error message or reopen form
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			// Optionally: show error message or reopen form
		}
	};

	// Reset phone value when form is closed
	const handleCloseForm = () => {
		setIsFormOpen(false);
		setPhoneValue('');
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
				<div className="fixed z-[60] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col h-[290px] w-full lg:w-[622px] bg-black m-auto items-center justify-around rounded-3xl">
					<p className="title-white">YOUR MESSAGE WAS SENT</p>
					<p className="text-white">We will contact you within 24 hours</p>
					<Button onClick={() => setIsPopup(false)} variant="secondary">
						Thanks!
					</Button>
				</div>
			)}

			{children ? (
				<div onClick={() => {
					setIsFormOpen(true);
					setPhoneValue('');
					reset();
				}}>{children}</div>
			) : (
				<Button
					onClick={() => {
						setIsFormOpen(true);
						setPhoneValue('');
						reset();
					}}
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
						type="button"
						className="float-right relative bottom-5"
						onClick={handleCloseForm}
					>
						<Image alt="form-closing-button" src={closing} />
					</button>
					<div className="flex gap-14 justify-between mt-10 mb-20 max-md:flex-wrap">
						<div className="max-w-[273px] flex flex-col">
							<label className="text-white mb-5">
								Your Name* <span className="text-gray-400 text-sm">(Required field)</span>
							</label>
							<input
								placeholder="Enter Your name"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
								type="text"
								{...register("name", { 
									required: "Name is required",
									validate: (value) => {
										if (!/^[a-zA-Z\s]+$/.test(value)) {
											return "Only English letters are allowed";
										}
										return true;
									}
								})}
								onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
									e.target.value = allowOnlyEnglishLetters(e.target.value);
								}}
							/>
							{errors.name && (
								<span className="text-red-500 text-xs mt-1">{errors.name.message as string}</span>
							)}
						</div>
						<div className="max-w-[273px] flex flex-col">
							<label className="text-white mb-5">
								Phone Number* <span className="text-gray-400 text-sm">(Required field)</span>
							</label>
							<Controller
								name="number"
								control={control}
								rules={{
									required: "Phone number is required",
									validate: (value) => {
										if (!validatePhoneNumber(value)) {
											return "Phone number must be at least 10 digits";
										}
										return true;
									}
								}}
								render={({ field }) => (
									<input
										{...field}
										placeholder="(123) 456-7890"
										className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
										type="text"
										maxLength={14}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											const digits = allowOnlyDigits(e.target.value);
											const formatted = formatPhoneNumber(digits);
											setPhoneValue(formatted);
											field.onChange(formatted);
										}}
										value={phoneValue}
									/>
								)}
							/>
							{errors.number && (
								<span className="text-red-500 text-xs mt-1">{errors.number.message as string}</span>
							)}
						</div>
					</div>
					<div className="w-[605px] flex flex-col mb-20">
						<label className="text-white mb-5">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className="h-[40px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
							onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								e.target.value = allowOnlyEnglishLettersAndDigits(e.target.value);
							}}
						/>
					</div>
					<div className="flex mt-20 justify-between">
						<p className="white-paragraph">
							By clicking Submit I agree to the{" "}
							<span className="text-white underline">
								<Link href="/terms-and-conditions">Terms and Conditions</Link>
							</span>
						</p>
						<Button
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
						type="button"
						className="absolute top-[21px] right-[21px] cursor-pointer lg:hidden z-50"
						onClick={handleCloseForm}
					>
						<Image alt="form-closing-button" src={closing} />
					</button>
					<div className="max-w-[273px] flex flex-col">
						<label className="text-white my-2">
							Your Name* <span className="text-gray-400 text-xs">(Required field)</span>
						</label>
						<input
							placeholder="Enter Your name"
							className="mb-5 w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							type="text"
							{...register("name", { 
								required: "Name is required",
								validate: (value) => {
									if (!/^[a-zA-Z\s]+$/.test(value)) {
										return "Only English letters are allowed";
									}
									return true;
								}
							})}
							onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
								e.target.value = allowOnlyEnglishLetters(e.target.value);
							}}
						/>
						{errors.name && (
							<span className="text-red-500 text-xs mb-2">{errors.name.message as string}</span>
						)}
					</div>
					<div className="max-w-[273px] flex flex-col">
						<label className="text-white my-2">
							Phone Number* <span className="text-gray-400 text-xs">(Required field)</span>
						</label>
						<Controller
							name="number"
							control={control}
							rules={{
								required: "Phone number is required",
								validate: (value) => {
									if (!validatePhoneNumber(value)) {
										return "Phone number must be at least 10 digits";
									}
									return true;
								}
							}}
							render={({ field }) => (
								<input
									{...field}
									placeholder="(123) 456-7890"
									className="mb-5 w-[273px] h-[42px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
									type="text"
									maxLength={14}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
										const digits = allowOnlyDigits(e.target.value);
										const formatted = formatPhoneNumber(digits);
										setPhoneValue(formatted);
										field.onChange(formatted);
									}}
									value={phoneValue}
								/>
							)}
						/>
						{errors.number && (
							<span className="text-red-500 text-xs mb-2">{errors.number.message as string}</span>
						)}
					</div>
					<div className="w-[273px] flex flex-col">
						<label className="text-white my-2">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className="mb-5 h-[40px] px-[15px] border-b border-zinc-600 bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
							onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								e.target.value = allowOnlyEnglishLettersAndDigits(e.target.value);
							}}
						/>
					</div>
					<div className="max-w-[350px] text-center">
						<p className="white-paragraph mb-5">
							By clicking Submit I agree to the{" "}
							<span className="text-white underline">
								<Link href="/terms-and-conditions">Terms and Conditions</Link>
							</span>
						</p>
						<Button
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
