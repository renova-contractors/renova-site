// Helper function to allow only digits
export const allowOnlyDigits = (value: string): string => {
	return value.replace(/\D/g, '');
};

// Phone number mask formatter
export const formatPhoneNumber = (value: string): string => {
	const digits = allowOnlyDigits(value);
	if (digits.length <= 3) return digits;
	if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
	return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Validate phone number has at least 10 digits
export const validatePhoneNumber = (value: string): boolean => {
	const digits = allowOnlyDigits(value);
	return digits.length >= 10;
};




