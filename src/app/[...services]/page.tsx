import heroBottom from '/public/contentImages/mainHero/services/4.jpg';
import React from 'react';
import { ServicesHero } from './components/ServicesHero';
import { FAQ } from '@/components/FAQ/FAQ';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { getServicesData } from '@/lib/getServiceData/getServiceData';
import { getGooglePlacesRating } from '@/lib/getGooglePlacesRating/getGooglePlacesRating';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Manufacturers } from '@/components/MainManufacturers/Manufacturers';
import { HowWeWork } from '@/components/HowWeWork/HowWeWork';
import { LocationsList } from '@/components/LocationsList/LocationsList';
import { isMobileDevice } from '@/lib/hooks/useIsMobile';
import { OurServices } from '@/components/OurServices/OurServices';
import { ThumbsSwiper } from '@/components/ThumbsSwiper/ThumbsSwiper';
import { CostTables } from '@/components/CostTables/CostTables';
import { PageNav } from '@/components/PageNav/PageNav';
import { serviceHeadings } from '@/constants/ourServices/ourServices';
import Licensing from '@/components/Licensing/Licensing';
import SeattleRemodelCalculator from '@/components/Roi';
import InstagramEmbed from '@/components/Instagram/Instagram';
import YouTubeShortSlider from '@/components/Shorts/YoutubeShorts';
import SimpleYouTubeVideo from '@/components/YouTubeVideo/SimpleYouTubeVideo';
import { GenerateEstimate } from '@/components/Chatbot/GenerateEstimate';
import Script from 'next/script';
import { ThumbsComponent } from '@/components/ThumbsComponent/ThumbsComponent';
import FeaturableWidget from '@/components/Widgets/FeaturableWidget';
import ServiceBlog from '@/components/ServiceBlog/ServiceBlog';

// Import shorts data for schema
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
    siding: [
      { id: 'xOxGHe1KeYY' },
      { id: 'xJhs6-bHOOc' },
      { id: 'o5MrxvCACsE' },
      { id: 'jplRdDEPipY' },
    ],
    tile: [
      { id: 'OAVRNuODziI' },
      { id: 'FXgjx7blUi4' },
      { id: '1ZvtJ656fzM' },
      { id: 'mhC3lqPP3X4' },
    ],
    home: [
      { id: '_0bHP9gcRNQ' },
      { id: 'i9hrqnBZ9vo' },
      { id: 'agBL7EkK7Fo' },
      { id: 'jplRdDEPipY' },
    ],
  },
  bellevue: {
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
    siding: [
      { id: 'xOxGHe1KeYY' },
      { id: 'xJhs6-bHOOc' },
      { id: 'o5MrxvCACsE' },
      { id: 'jplRdDEPipY' },
    ],
    tile: [
      { id: 'OAVRNuODziI' },
      { id: 'FXgjx7blUi4' },
      { id: '1ZvtJ656fzM' },
      { id: 'mhC3lqPP3X4' },
    ],
    home: [
      { id: '_0bHP9gcRNQ' },
      { id: 'i9hrqnBZ9vo' },
      { id: 'agBL7EkK7Fo' },
      { id: 'jplRdDEPipY' },
    ],
  }
};

type Props = {
  params: { services: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.services.join('/');
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Check if backendUrl is valid
  if (!backendUrl || backendUrl === 'undefined' || backendUrl.trim() === '') {
    console.error('NEXT_PUBLIC_BACKEND_URL is not defined or invalid');
    return {
      title: 'Service Page',
      description: 'Service page from RENOVA Contractors',
    };
  }

  // Validate URL format
  let isValidUrl = true;
  try {
    new URL(backendUrl);
  } catch (error) {
    isValidUrl = false;
  }

  if (!isValidUrl) {
    console.error('NEXT_PUBLIC_BACKEND_URL is not a valid URL:', backendUrl);
    return {
      title: 'Service Page',
      description: 'Service page from RENOVA Contractors',
    };
  }

  let serviceData;
  try {
    const response = await fetch(`${backendUrl}/services/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error(`API request failed: ${response.status} ${response.statusText}`);
      serviceData = null;
    } else {
      serviceData = await response.json();
    }
  } catch (error) {
    console.error('Error fetching service data for metadata:', error);
    serviceData = null;
  }

  // Debug logging for metadata generation
  console.log('Metadata generation for URL:', id);

  // Find exact service match (same logic as getServicesData)
  let service;
  if (serviceData) {
    if (Array.isArray(serviceData)) {
      // First try to find exact match
      service = serviceData.find((s: any) => s.service === id);

      // If no exact match, try slug or id
      if (!service) {
        service = serviceData.find((s: any) => s.slug === id || s.id === id);
      }

      // If still no match, use first item
      if (!service) {
        service = serviceData[0];
      }
    } else {
      service = serviceData;
    }
  }

  console.log('Selected service for metadata:', service?.title);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: service?.title || 'Service Page',
    description: service?.description || '',
    alternates: {
      canonical: `https://www.renova.contractors/${id}`
    },
    openGraph: {
      title: service?.title || 'Service Page',
      description: service?.description || '',
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: service?.title || 'Service Page',
      description: service?.description || '',
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

export async function generateStaticParams() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Check if backendUrl is valid (not undefined, not empty, not the string "undefined")
  if (!backendUrl || backendUrl === 'undefined' || backendUrl.trim() === '') {
    console.error('NEXT_PUBLIC_BACKEND_URL is not defined or invalid');
    return [];
  }

  try {
    // Validate URL format
    new URL(backendUrl);
  } catch (error) {
    console.error('NEXT_PUBLIC_BACKEND_URL is not a valid URL:', backendUrl);
    return [];
  }

  try {
    const servicesUrl = `${backendUrl}/services/`;
    const response = await fetch(servicesUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`API request failed: ${response.status} ${response.statusText}`);
      return [];
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('API response is not JSON');
      return [];
    }

    const url = await response.json();

    // Check if url is an array and has items
    if (!Array.isArray(url) || url.length === 0) {
      return [];
    }

    return url.map((post: { service: string }) => ({
      services: post.service.split('/'),
    }));
  } catch (error) {
    console.error('Error fetching services for generateStaticParams:', error);
    return [];
  }
}

const Services: React.FC<{ params: { services: string[] } }> = async ({
  params,
}) => {
  const id = params.services.join('/');
  let servicesData;
  try {
    servicesData = await getServicesData({ services: id });
  } catch (error) {
    notFound();
  }

  if (!servicesData || !Array.isArray(servicesData) || servicesData.length === 0 || !servicesData[0]) {
    notFound();
  }

  const servicesPageData = servicesData[0];
  const isMobile = isMobileDevice();

  const googlePlacesRating = await getGooglePlacesRating();

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://www.renova.contractors/${id}`,
        url: `https://www.renova.contractors/${id}`,
        name:
          servicesPageData.hero?.title ||
          `${servicesPageData.category || 'Home'} Remodeling Services`,
        description:
          servicesPageData.hero?.description ||
          `Professional ${
            servicesPageData.category || 'home'
          } remodeling services in ${servicesPageData.location || 'Seattle'}`,
        mainEntity: {
          '@type': 'HomeAndConstructionBusiness',
          '@id': `https://www.renova.contractors/${id}#localbusiness`,
          name: `RENOVA Contractors LLC - ${servicesPageData.category || 'Home'} Remodeling`,
          image: 'https://www.renova.contractors/logo.png',
          url: `https://www.renova.contractors/${id}`,
          telephone: '+1-206-255-2708',
          email: 'sales@renova.contractors',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '221 1st Ave W #247',
            addressLocality: 'Seattle',
            addressRegion: 'WA',
            postalCode: '98119',
            addressCountry: 'US',
          },
          openingHours: 'Mo-Su 09:00-21:00',
          priceRange: '$$',
          areaServed: {
            '@type': 'City',
            name: servicesPageData.location || 'Seattle',
            containedInPlace: {
              '@type': 'State',
              name: 'Washington',
            },
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '47.6062',
              longitude: '-122.3321',
            },
            geoRadius: '50000',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: googlePlacesRating?.ratingValue || servicesPageData.aggregateRating?.ratingValue || servicesPageData.rating?.ratingValue || servicesPageData.rating?.value || '4.9',
            reviewCount: googlePlacesRating?.reviewCount || servicesPageData.aggregateRating?.reviewCount || servicesPageData.rating?.reviewCount || servicesPageData.rating?.count || '250',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${servicesPageData.category || 'Home'} Remodeling Services`,
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${servicesPageData.category || 'Home'} Remodeling`,
                  serviceType: `${servicesPageData.category || 'home'} remodeling`,
                  description: `Professional ${servicesPageData.category || 'home'} remodeling services in ${servicesPageData.location || 'Seattle'}`,
                },
              },
            ],
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `https://www.renova.contractors/${id}#faq`,
        mainEntity: (() => {
          const faqItems = servicesPageData.faqItems || [];
          const validFaqs = faqItems
            .filter((faq: any) => faq && faq.question && faq.answer) // Only include valid items
            .map((faq: any) => ({
              '@type': 'Question',
              name: faq.question || '',
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer || '',
              },
            }));
          
          // Ensure we always have at least one FAQ item
          if (validFaqs.length === 0) {
            return [{
              '@type': 'Question',
              name: `Why choose RENOVA for ${servicesPageData.category || 'home'} remodeling?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `RENOVA Contractors LLC is known for quality craftsmanship, clear communication, and handling permits, design, and construction in-house for ${servicesPageData.category || 'home'} remodeling projects.`,
              },
            }];
          }
          
          return validFaqs;
        })(),
      },
      {
        '@type': 'Blog',
        '@id': 'https://www.renova.contractors/blog',
        name: 'RENOVA Contractors Blog',
        description: 'Expert home remodeling insights, tips, and guides from RENOVA Contractors LLC in Seattle',
        url: 'https://www.renova.contractors/blog',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.renova.contractors/#organization',
          name: 'RENOVA Contractors LLC',
          url: 'https://www.renova.contractors',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.renova.contractors/logo.png',
          },
        },
        inLanguage: 'en-US',
        about: {
          '@type': 'Thing',
          name: 'Home Remodeling',
          description: `Professional home remodeling and renovation services in ${servicesPageData.location || 'Seattle'}`,
        },
      },
      {
        '@type': 'WebApplication',
        '@id': `https://www.renova.contractors/${id}#calculator`,
        name: `${servicesPageData.category || 'Home'} Remodel ROI Calculator`,
        url: `https://www.renova.contractors/${id}#calculator`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        description: `Use our calculator to estimate ${
          servicesPageData.category || 'home'
        } remodel costs in ${servicesPageData.location || 'Seattle'}.`,
      },
      {
        '@type': 'WebPageElement',
        '@id': `https://www.renova.contractors/${id}#reviews-widget`,
        name: 'Customer Reviews Widget',
        description: 'Interactive customer reviews and testimonials widget powered by Featurable',
        isPartOf: {
          '@id': `https://www.renova.contractors/${id}`,
        },
        about: {
          '@type': 'Service',
          '@id': `https://www.renova.contractors/${id}#service`,
          name: servicesPageData.category || 'Home Remodeling',
        },
      },
      // Video schema logic: prioritize main video, fallback to first short if no main video
      ...(servicesPageData.video ? [{
        '@type': 'VideoObject',
        '@id': `https://www.renova.contractors/${id}#video`,
        name: `${servicesPageData.category || 'Home'} Remodeling Video - RENOVA Contractors`,
        description: `Watch our ${servicesPageData.category || 'home'} remodeling process and see the quality of our work in ${servicesPageData.location || 'Seattle'}.`,
        thumbnailUrl: `https://img.youtube.com/vi/${servicesPageData.video}/maxresdefault.jpg`,
        uploadDate: new Date().toISOString(),
        duration: 'PT3M', // Default 3 minutes, adjust as needed
        contentUrl: `https://www.youtube.com/watch?v=${servicesPageData.video}`,
        embedUrl: `https://www.youtube.com/embed/${servicesPageData.video}`,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.renova.contractors/#organization',
          name: 'RENOVA Contractors LLC',
        },
        about: {
          '@type': 'Service',
          '@id': `https://www.renova.contractors/${id}#service`,
          name: servicesPageData.category || 'Home Remodeling',
        },
      }] : 
      // Only add shorts schema if no main video exists
      (shortsObj[servicesPageData.location]?.[servicesPageData.category]?.length > 0 ? [{
        '@type': 'VideoObject',
        '@id': `https://www.renova.contractors/${id}#video`,
        name: `${servicesPageData.category || 'Home'} Remodeling Video - RENOVA Contractors`,
        description: `Quick tips and highlights from our ${servicesPageData.category || 'home'} remodeling projects in ${servicesPageData.location || 'Seattle'}. Watch our YouTube Shorts for project insights.`,
        thumbnailUrl: `https://img.youtube.com/vi/${shortsObj[servicesPageData.location]?.[servicesPageData.category]?.[0]?.id}/maxresdefault.jpg`,
        uploadDate: new Date().toISOString(),
        duration: 'PT30S', // Typical shorts duration
        contentUrl: `https://www.youtube.com/shorts/${shortsObj[servicesPageData.location]?.[servicesPageData.category]?.[0]?.id}`,
        embedUrl: `https://www.youtube.com/embed/${shortsObj[servicesPageData.location]?.[servicesPageData.category]?.[0]?.id}`,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.renova.contractors/#organization',
          name: 'RENOVA Contractors LLC',
        },
        about: {
          '@type': 'Service',
          '@id': `https://www.renova.contractors/${id}#service`,
          name: servicesPageData.category || 'Home Remodeling',
        },
      }] : [])),
    ],
  };

  return (
    <main>
      {/* SEO Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServicesHero
        {...servicesPageData.hero}
        imageBottom={heroBottom}
        category={servicesPageData.category}
        images={servicesPageData.images}
      />
      <PageNav 
        showVideo={!!servicesPageData.video} 
        showShorts={!!(shortsObj[servicesPageData.location]?.[servicesPageData.category]?.length > 0)}
      />

      {shortsObj[servicesPageData.location]?.[servicesPageData.category]?.length > 0 && (
        <div id="shorts" className="scroll-anchor">
          <YouTubeShortSlider
            city={servicesPageData.location}
            category={servicesPageData.category}
          />
        </div>
      )}
      <div id="reviews" className="scroll-anchor">
        <FeaturableWidget />
      </div>
      
      <OurServices
        {...servicesPageData.ourServices}
        category={servicesPageData.category}
        location={servicesPageData.location}
      />
      {servicesPageData.video && (
        <div id="video" className="scroll-anchor">
          <SimpleYouTubeVideo
            videoUrl={`https://www.youtube.com/watch?v=${servicesPageData.video}`}
          />
        </div>
      )}

      <Licensing />

      <GenerateEstimate />

      <CostTables
        category={servicesPageData.category}
        city={servicesPageData.location}
      />

      <ServiceBlog
        category={servicesPageData.category}
        location={servicesPageData.location}
        maxPosts={3}
      />

      {servicesPageData.images && (
        <section className="container">
          <h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
            {servicesPageData.category
              ? serviceHeadings.all
              : serviceHeadings[servicesPageData.category]}{' '}
            Photos
          </h2>

          <ThumbsComponent
            data={servicesPageData.images}
            category={servicesPageData.category}
          />
        </section>
      )}

      <SeattleRemodelCalculator category={servicesPageData.category} />

      <div
        id="socials"
        className="scroll-anchor container w-2/3 items-start flex max-sm:flex-col sm:justify-around my-auto component-mb max-sm:items-center mx-auto"
      >
        <div className="h-max">
          <InstagramEmbed url="https://www.instagram.com/renova.contractors/?utm_source=ig_embed&amp;utm_campaign=loading" />
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172153.33373691145!2d-122.2695375!3d47.608715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729059408347!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="responsive-iframe"
          ></iframe>
        </div>
      </div>

      <HowWeWork {...servicesPageData.howWeWork} />
      <Manufacturers {...servicesPageData.manufacturers} />
      <FAQ faqItems={servicesPageData.faqItems} />

      <ContactUs />
      <LocationsList />
    </main>
  );
};

export default Services;
