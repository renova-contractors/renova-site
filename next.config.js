/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  domains: ['res.cloudinary.com', 'https://swiperjs.com'],
	},
	/* async redirects() {
	  return [

		//locations redirect
		{
			source: '/cabinet-installation',
			destination: '/cabinet-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/deck-building',
			destination: '/deck-building-seattle',
			permanent: true,
		  },
		  {
			source: '/countertop-installation',
			destination: '/countertop-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/electrical',
			destination: '/electrical-service-seattle',
			permanent: true,
		  },
		  {
			source: '/flooring',
			destination: '/seattle-flooring-installation',
			permanent: true,
		  },
		  {
			source: '/window-installation',
			destination: '/window-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/architectural-service',
			destination: '/architectural-service-seattle',
			permanent: true,
		  },
		  {
			source: '/hvac-installation',
			destination: '/hvac-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/plumbing-services',
			destination: '/plumbing-services-seattle',
			permanent: true,
		  },
		  {
			source: '/kitchen-remodel',
			destination: '/kitchen-remodel-seattle',
			permanent: true,
		  },
		  {
			source: '/door-installation',
			destination: '/door-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/bathroom-remodel',
			destination: '/bathroom-remodel-seattle',
			permanent: true,
		  },
		  {
			source: '/roofing',
			destination: '/roofing-seattle',
			permanent: true,
		  },
		  {
			source: '/siding-installation',
			destination: '/siding-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/excavation-contractors',
			destination: '/excavation-contractors-seattle',
			permanent: true,
		  },
		  {
			source: '/basement-finishing',
			destination: '/basement-finishing-seattle',
			permanent: true,
		  },
		  {
			source: '/painters',
			destination: '/painters-seattle',
			permanent: true,
		  },
		  {
			source: '/masonry-contractors',
			destination: '/masonry-contractors-seattle',
			permanent: true,
		  },
		  {
			source: '/attic-finishing',
			destination: '/attic-finishing-seattle',
			permanent: true,
		  },
		  {
			source: '/tile-installation',
			destination: '/tile-installation-seattle',
			permanent: true,
		  },
		  {
			source: '/landscaping',
			destination: '/landscaping-seattle',
			permanent: true,
		  },
		{
			source: '/location/seattle',
			destination: 'https://www.renova.contractors', // Redirecting Seattle location to the main page
			permanent: true,
		},
		 //locations redirect ends
		{
		  source: '/:path*', // Захватывает все пути
		  has: [
			{
			  type: 'host',
			  value: 'renova.contractors', // Редирект с домена без www и http
			},
		  ],
		  destination: 'https://www.renova.contractors/:path*', // Основной домен с https и www
		  permanent: true, // Постоянный редирект (301)
		},
		{
		  source: '/:path*',
		  has: [
			{
			  type: 'host',
			  value: 'http://www.renova.contractors', // Редирект с http на https
			},
		  ],
		  destination: 'https://www.renova.contractors/:path*',
		  permanent: true,
		},
		{
		  source: '/:path*',
		  has: [
			{
			  type: 'host',
			  value: 'http://renova.contractors', // Редирект с http и без www на https и www
			},
		  ],
		  destination: 'https://www.renova.contractors/:path*',
		  permanent: true,
		},
	  ];
	} */
  }

  module.exports = nextConfig;
