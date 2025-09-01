import { headers } from "next/headers";

const useIsMobile = (): boolean => {
	const headersList = headers();
	const userAgent = headersList.get("user-agent") || "";
	const isMobile = /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(
		userAgent,
	);
	return isMobile;
};

export default useIsMobile;
