"use client";

import React, { useState, useEffect } from 'react';

interface ReadMoreProps {
  children: React.ReactNode;
  maxLength?: number;
  className?: string;
  lineClamp?: 2 | 3 | 4;
  readMoreText?: string;
  readLessText?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({
  children,
  maxLength = 200,
  className = "",
  lineClamp = 3,
  readMoreText = "Read More",
  readLessText = "Read Less"
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent;
      const mobile = /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobile);
    };

    checkIsMobile();
  }, []);

  // If not mobile, always show full content
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  // For mobile, show truncated content with expand/collapse button
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (React.isValidElement(node)) {
      if (node.props.children) {
        return getTextContent(node.props.children);
      }
    }
    if (Array.isArray(node)) {
      return node.map(getTextContent).join('');
    }
    return '';
  };

  const textContent = getTextContent(children);
  const shouldTruncate = textContent.length > maxLength;

  if (!shouldTruncate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      <div className={isExpanded ? '' : `line-clamp-${lineClamp}`}>
        {children}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-main-yellow hover:text-yellow-400 transition-colors duration-200 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring-main-yellow focus:ring-opacity-50 rounded"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? `Show less content` : `Show more content`}
      >
        {isExpanded ? readLessText : readMoreText}
      </button>
    </div>
  );
};

export default ReadMore;
