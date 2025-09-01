import React, { createContext, useContext, useState, ReactNode } from "react";

interface DropdownContextType {
	isDropdownOpen: boolean;
	setIsDropdownOpen: (isOpen: boolean) => void;
	hasIdType: string;
	setHasIdType: (idType: string) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
	undefined,
);

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [hasIdType, setHasIdType] = useState("");

	return (
		<DropdownContext.Provider
			value={{
				isDropdownOpen,
				setIsDropdownOpen,
				hasIdType,
				setHasIdType,
			}}
		>
			{children}
		</DropdownContext.Provider>
	);
};

export const useDropdown = (): DropdownContextType => {
	const context = useContext(DropdownContext);
	if (!context) {
		throw new Error("useDropdown must be used within a DropdownProvider");
	}
	return context;
};
