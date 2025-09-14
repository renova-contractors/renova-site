import React from 'react'
import RoiCalculator from '../components/RoilCalculator'
import Markdown from 'react-markdown'
import type { Metadata } from 'next'
import { FormMain } from '@/components/FormMain/FormMain'
import { CatalogBanner } from '@/app/catalog/[[...slug]]/components/CatalogBanner'
import useIsMobile from '@/lib/hooks/useIsMobile'

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
  
  // Fetch data from API
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
				<CatalogBanner  />
		</FormMain>
      </main>
    </>
  )
}

export default page