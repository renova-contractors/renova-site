'use client';

import { useState, useEffect } from 'react';

// Client-side hook to detect mobile devices
export const useIsMobileClient = (): boolean => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkMobile = () => {
			const isMobileDevice = window.innerWidth <= 992 || /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			setIsMobile(isMobileDevice);
		};

		// Check on mount
		checkMobile();

		// Listen for resize events
		window.addEventListener('resize', checkMobile);

		// Cleanup
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	return isMobile;
};

