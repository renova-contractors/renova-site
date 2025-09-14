import { headers } from "next/headers";

export const isMobileDevice = (): boolean => {
	const headersList = headers();
	const userAgent = headersList.get("user-agent") || "";
	return /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

// Keep the hook for backward compatibility, but it should only be used in server components
const useIsMobile = (): boolean => {
	return isMobileDevice();
};

export default useIsMobile;
