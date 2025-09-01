"use client";

import { DropdownProvider } from "@/contexts/DropdownContext";

const ClientWrapper = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return <DropdownProvider>{children}</DropdownProvider>;
};

export default ClientWrapper;
