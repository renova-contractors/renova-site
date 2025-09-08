'use client';

import { useEffect } from 'react';

interface FeaturableWidgetProps {
  id?: string;
  className?: string;
}

export default function FeaturableWidget({ 
  id = "featurable-1f913e66-b653-4074-a74c-f4677cec7a63",
  className = ""
}: FeaturableWidgetProps) {
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="https://featurable.com/assets/bundle.js"]');
    
    if (!existingScript) {
      // Create and append the script
      const script = document.createElement('script');
      script.src = 'https://featurable.com/assets/bundle.js';
      script.defer = true;
      script.charset = 'UTF-8';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      id={id} 
      data-featurable-async 
      className={className}
    />
  );
}
