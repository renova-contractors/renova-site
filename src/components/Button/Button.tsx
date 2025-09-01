"use client";

import React, { type FC, type ReactNode } from "react";
import cn from "classnames";
import classes from "./Button.module.css";
import type { ButtonVariants } from "@/types/button/buttonVariants";
import { BUTTON_secondary } from "@/constants/button/buttonVariants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariants;
	children: ReactNode;
	className?: string;
	onClick?(): void;
}

export const Button: FC<ButtonProps> = ({
	variant = BUTTON_secondary,
	children,
	className,
	onClick,
	...props
}) => (
	<button
		onClick={onClick}
		className={cn(classes[variant], className)}
		{...props}
	>
		{children}
	</button>
);
