'use client';

import React from 'react';

const shortsObj = {
  seattle: {
    bathroom: [
      { id: '1ZvtJ656fzM' },
      { id: 'zvCGb-2RGPI' },
      { id: '8UDWV8fl3XI' },
      { id: '5pHLkY__MYU' },
    ],
    kitchen: [
      { id: 'Id9DDeUKeP8' },
      { id: '1J6XQWWLC5I' },
      { id: 'TPgxHN6cu0I' },
      { id: 'i9hrqnBZ9vo' },
    ],
    basement: [
      { id: 'agBL7EkK7Fo' },
      { id: 'k2YY8I7Xa-Y' },
      { id: 'zvCGb-2RGPI' },
      { id: 'FXgjx7blUi4' },
    ],
    attic: [
      { id: 'c9TpekCq72Y' },
      { id: 'agBL7EkK7Fo' },
      { id: 'OAVRNuODziI' },
      { id: 'Gy1I8U00rfc' },
    ],
  },
};

type Props = {
  city: keyof typeof shortsObj;
  category: keyof (typeof shortsObj)['seattle'];
};

const YouTubeShortSlider = ({ city, category }: Props) => {
  const videos = shortsObj[city]?.[category] || [];

  if (videos.length === 0) return null;

  return (
    <section
      aria-label="YouTube Shorts"
      className="w-full overflow-x-auto py-6 container component-mb"
      id="videos"
    >
      {/* 🔑 SEO-заголовок */}
      <h2 className="custom-heading mb-4">
        {city.charAt(0).toUpperCase() + city.slice(1)} {category} Remodeling Videos
      </h2>

      {/* 🔑 Короткое описание */}
      <p className="text-main-gray mb-6">
        Watch our recent {city} remodel projects on YouTube Shorts – real jobs, quick overviews, and design ideas from RENOVA Contractors.
      </p>

      <div className="flex justify-between max-sm:gap-2">
        {videos.map(({ id }) => (
          <div
            key={id}
            className="min-w-[180px] sm:min-w-[220px] aspect-[9/16] rounded-xl shadow-md overflow-hidden flex-shrink-0 bg-black"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
              title={`${city} ${category} remodel video ${id}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeShortSlider;
