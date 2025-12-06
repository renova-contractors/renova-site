import { headers } from "next/headers";

// Server-side function for server components
export const isMobileDevice = (): boolean => {
	const headersList = headers();
	const userAgent = headersList.get("user-agent") || "";
	return /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

// Server-side hook (for backward compatibility with server components)
const useIsMobile = (): boolean => {
	return isMobileDevice();
};

export default useIsMobile;
