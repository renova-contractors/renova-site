"use client";

import React, { useEffect, useState } from 'react';
import ReadMore from './ReadMore';

/**
 * SSR-безопасная обертка для ReadMore
 * Автоматически управляет серверным/клиентским рендерингом
 */
interface ReadMoreSSRSafeProps {
	children: React.ReactNode;
	maxLength?: number;
	className?: string;
	serverContent?: React.ReactNode; // Контент для серверного рендера (опционально)
}

const ReadMoreSSRSafe: React.FC<ReadMoreSSRSafeProps> = ({
	children,
	maxLength = 200,
	className = '',
	serverContent,
}) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// До монтирования показываем серверный контент
	if (!mounted) {
		return serverContent ? <>{serverContent}</> : null;
	}

	// После монтирования показываем ReadMore
	return (
		<ReadMore maxLength={maxLength} className={className}>
			{children}
		</ReadMore>
	);
};

export default ReadMoreSSRSafe;

