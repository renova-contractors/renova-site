"use client";

import React from "react";
import { useForm } from "react-hook-form";

export const Consultation: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (value: object): void => {
		alert(JSON.stringify(value, null, 2)); // Improved alert output
	};

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Your name</label>
				<input id="name" {...register("name")} />

				<label htmlFor="email">Email</label>
				<input id="email" {...register("email")} />

				<label htmlFor="phone">Phone</label>
				<input id="phone" {...register("phone", { required: true })} />
				{errors.phone && <p>This field is required.</p>}

				<label htmlFor="comment">Comment</label>
				<textarea id="comment" {...register("comment")} />

				<button type="submit">Submit</button>
			</form>
		</section>
	);
};
