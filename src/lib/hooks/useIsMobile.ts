import { headers } from "next/headers";

// Server-side function for server components
export const isMobileDevice = (): boolean => {
	const headersList = headers();
	const userAgent = headersList.get("user-agent") || "";
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent);
};

// Server-side hook (for backward compatibility with server components)
const useIsMobile = (): boolean => {
	return isMobileDevice();
};

export default useIsMobile;
