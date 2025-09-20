import React from 'react'
import RoiCalculator from '../components/RoilCalculator'
import Markdown from 'react-markdown'
import type { Metadata } from 'next'
import { FormMain } from '@/components/FormMain/FormMain'
import { CatalogBanner } from '@/app/catalog/[[...slug]]/components/CatalogBanner'
import { isMobileDevice } from '@/lib/hooks/useIsMobile'

type Props = {
  params: { area: string }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = params.area || 'kitchen'
  
  // Fetch data from API for metadata
  let pageData = null
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/roi/${area}`, {
      cache: 'no-store'
    })
    if (response.ok) {
      const result = await response.json()
      pageData = result.data
    }
  } catch (error) {
    console.error('Error fetching ROI data for metadata:', error)
  }
  
  // Fallback data
  const fallbackData = {
    h1: `${area.charAt(0).toUpperCase() + area.slice(1)} Remodel ROI Calculator 2025`,
    paragraph: `Calculate the ROI of your ${area} remodel project`
  }
  
  const currentData = pageData || fallbackData
  const categoryName = currentData.h1.split(' ')[0] // Extract category name from h1
  const title = `${currentData.h1} | Seattle Home Improvement`
  const description = currentData.paragraph
  
  return {
    title,
    description,
    keywords: [
      `${categoryName.toLowerCase()} remodel ROI calculator`,
      'Seattle home improvement ROI',
      'remodel return on investment',
      'home renovation calculator',
      'Seattle remodeling costs',
      'property value increase',
      'home improvement investment',
      'renovation ROI analysis',
      'Seattle contractors',
      'RENOVA contractors'
    ],
    authors: [{ name: "RENOVA Contractors LLC" }],
    creator: "RENOVA Contractors LLC",
    publisher: "RENOVA Contractors LLC",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://www.renova.contractors/return-on-investment-remodel/${area}`,
      title,
      description,
      siteName: 'RENOVA Contractors LLC',
      images: [
        {
          url: 'https://www.renova.contractors/logo.png',
          width: 1200,
          height: 630,
          alt: `${categoryName} Remodel ROI Calculator - RENOVA Contractors`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.renova.contractors/logo.png'],
    },
    alternates: {
      canonical: `https://www.renova.contractors/return-on-investment-remodel/${area}`,
    },
  }
}

const page = async ({ params }: Props) => {
  const area = params.area || 'kitchen'
  
  let pageData = null
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/roi/${area}?t=${Date.now()}`, {
      cache: 'no-store' // Ensure fresh data
    })
    if (response.ok) {
      const result = await response.json()
      pageData = result.data
    }
  } catch (error) {
    console.error('Error fetching ROI data:', error)
  }
  
  // Fallback data if API fails
  const fallbackData = {
    h1: `${area.charAt(0).toUpperCase() + area.slice(1)} Remodel ROI Calculator 2025`,
    paragraph: `Calculate the ROI of your ${area} remodel project`,
    markdown: `Calculate the return on investment for your ${area} remodel in Seattle. Get accurate cost estimates and value projections for your remodel project.`,
    url: `${area}`,
    category: area
  }
  
  const currentData = pageData || fallbackData
  const categoryName = currentData.h1.split(' ')[0] // Extract category name from h1
  
  // Enhanced JSON-LD Schema for ROI Calculator
  const roiSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://www.renova.contractors/return-on-investment-remodel/${area}#localbusiness`,
        "name": "RENOVA Contractors LLC",
        "image": "https://www.renova.contractors/logo.png",
        "url": "https://www.renova.contractors/",
        "telephone": "+1-206-255-2708",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "221 1st Ave W #247",
          "addressLocality": "Seattle",
          "addressRegion": "WA",
          "postalCode": "98119",
          "addressCountry": "US"
        },
        "openingHours": "Mo-Su 09:00-21:00",
        "priceRange": "$$",
        "areaServed": [
          {
            "@type": "City",
            "name": "Seattle",
            "containedInPlace": {
              "@type": "State",
              "name": "Washington"
            }
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "47.6062",
            "longitude": "-122.3321"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home Remodeling Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${categoryName} Remodeling`,
                "description": `Professional ${categoryName.toLowerCase()} remodeling services in Seattle`
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "250"
        }
      },
      {
        "@type": "Blog",
        "@id": "https://www.renova.contractors/blog",
        "name": "RENOVA Contractors Blog",
        "description": "Expert home remodeling insights, tips, and guides from RENOVA Contractors LLC in Seattle",
        "url": "https://www.renova.contractors/blog",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.renova.contractors/#organization",
          "name": "RENOVA Contractors LLC",
          "url": "https://www.renova.contractors",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.renova.contractors/logo.png"
          }
        },
        "inLanguage": "en-US",
        "about": {
          "@type": "Thing",
          "name": "Home Remodeling",
          "description": `Professional home remodeling and renovation services in Seattle, including ${categoryName.toLowerCase()} remodeling`
        }
      },
      {
        "@type": "WebApplication",
        "@id": `https://www.renova.contractors/return-on-investment-remodel/${area}`,
        "name": `${categoryName} Remodel ROI Calculator 2025`,
        "description": `Calculate the return on investment for your ${categoryName.toLowerCase()} remodel in Seattle with our free ROI calculator.`,
        "url": `https://www.renova.contractors/return-on-investment-remodel/${area}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free ROI Calculator"
        },
        "provider": {
          "@type": "Organization",
          "name": "RENOVA Contractors LLC",
          "url": "https://www.renova.contractors",
          "logo": "https://www.renova.contractors/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Seattle",
            "addressRegion": "WA",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-206-255-2708",
            "contactType": "customer service"
          }
        },
        "featureList": [
          "Real-time ROI calculations",
          "Seattle market data",
          "Cost range estimates",
          "Value projection analysis",
          "Interactive investment slider"
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://www.renova.contractors/return-on-investment-remodel/${area}`,
        "url": `https://www.renova.contractors/return-on-investment-remodel/${area}`,
        "name": `${categoryName} Remodel ROI Calculator 2025`,
        "description": `Calculate the return on investment for your ${categoryName.toLowerCase()} remodel in Seattle. Free ROI calculator with real market data.`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.renova.contractors/#website",
          "name": "RENOVA Contractors LLC",
          "url": "https://www.renova.contractors"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.renova.contractors"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "ROI Calculator",
              "item": "https://www.renova.contractors/roi"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${categoryName} ROI Calculator`,
              "item": `https://www.renova.contractors/return-on-investment-remodel/${area}`
            }
          ]
        }
      }
    ]
  }

  const isMobile = isMobileDevice()

  return (
    <>
      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roiSchema),
        }}
      />
      
      <main className='container first-component sm:w-2/3'>
        

    

        {/* ROI Calculator Component */}
        <RoiCalculator category={area} />
        
        
            <Markdown className='markdown inside-mb'>
              {currentData.markdown || `Calculate the return on investment for your ${area} remodel in Seattle. Get accurate cost estimates and value projections for your remodel project.`}
            </Markdown>
          
        <FormMain>
				<CatalogBanner isMobile={isMobile} />
		</FormMain>
      </main>
    </>
  )
}

export default page