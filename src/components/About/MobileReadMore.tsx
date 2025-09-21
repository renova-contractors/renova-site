"use client";

import React from 'react';
import ReadMore from '../ReadMore/ReadMore';

interface MobileReadMoreProps {
  sectionP1: string;
  sectionP2: string;
  priceLine1: string;
}

const MobileReadMore: React.FC<MobileReadMoreProps> = ({
  sectionP1,
  sectionP2,
  priceLine1,
}) => {
  return (
    <div className="flex">
      <div className="lg:mt-[44px]">
        <p className="mb-8 text-main-yellow items-center font-bold">
          {priceLine1}
        </p>
        <ReadMore maxLength={300} lineClamp={3}>
          <p className="text-main-gray ml-auto mb-10 max-md:mb-2">
            {sectionP1}
          </p>
          <p className="text-main-gray ml-auto">{sectionP2}</p>
        </ReadMore>
      </div>
    </div>
  );
};

export default MobileReadMore;
