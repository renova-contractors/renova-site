/* import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures"; */
/* import { FAQ } from "@/components/FAQ/FAQ";
 */
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { OurServices } from "@/components/OurServices/OurServices";
import { Slider } from "@/components/Slider/Slider";

/* import { ServiceAreas } from "@/components/BottomButtons/BottomButtons"; */
import { mainPageContent } from "@/constants/mainPage/mainPageContent";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { FormMain } from "@/components/FormMain/FormMain";
import type { Metadata } from "next";
import ServicesAbout from "../components/About/ServicesAbout";
import useIsMobile from "@/lib/hooks/useIsMobile";

import { CostTables } from "@/components/CostTables/CostTables";
import { PageNav } from "@/components/PageNav/PageNav";
import InstagramEmbed from "@/components/Instagram/Instagram";
import PerksComponentGrid from "@/components/PerksComponentGrid/PerksComponentGrid";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import { FAQ } from "@/components/FAQ/FAQ";
import Licensing from "@/components/Licensing/Licensing";
import SeattleRemodelCalculator from "@/components/Roi";
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";
import YouTubeShortSlider from "@/components/Shorts/YoutubeShorts";
import { GenerateEstimate } from "@/components/Chatbot/GenerateEstimate";
import SimpleYouTubeVideo from "@/components/YouTubeVideo/SimpleYouTubeVideo";
import FeaturableWidget from "@/components/Widgets/FeaturableWidget";


export const metadata: Metadata = {
  title: "Home Remodeling Seattle | Kitchens, Bathrooms, Basements – Renova Contractors LLC",
  description:
    "Seattle remodeling company for kitchens, bathrooms, basements, and more. Licensed contractors, free design consultation, and discounted materials. Call 206-255-2708 for an estimate.",
  alternates: {
    canonical: "https://www.renova.contractors"
  }
};

export default function Home(): JSX.Element {
  const isMobile = useIsMobile();

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.renova.contractors/#organization",
        "name": "RENOVA Contractors LLC",
        "url": "https://www.renova.contractors/",
        "logo": "https://www.renova.contractors/logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-206-255-2708",
            "contactType": "customer service",
            "email": "sales@renova.contractors",
            "areaServed": "US",
            "availableLanguage": "English"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/renova.remodels",
          "https://www.instagram.com/renova.contractors",
          "https://www.youtube.com/@Renova.Contractors",
          "https://g.co/kgs/18c4pjv"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.renova.contractors/#website",
        "url": "https://www.renova.contractors/",
        "name": "RENOVA Contractors LLC",
        "publisher": {
          "@id": "https://www.renova.contractors/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.renova.contractors/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.renova.contractors/#localbusiness",
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "250"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.renova.contractors/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose Renova for a remodeling project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RENOVA Contractors LLC is known for quality craftsmanship, clear communication, and handling permits, design, and construction in-house."
            }
          },
          {
            "@type": "Question",
            "name": "Does Renova handle plumbing and electrical work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our licensed trades cover plumbing, electrical, HVAC, and more — all work follows Seattle codes and passes inspection."
            }
          }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.renova.contractors/#contact",
        "url": "https://www.renova.contractors/#contact",
        "name": "Contact RENOVA Contractors LLC",
        "isPartOf": {
          "@id": "https://www.renova.contractors/#website"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.renova.contractors/#ai_estimate",
        "url": "https://www.renova.contractors/#ai_estimate",
        "name": "Remodel Cost Calculator – AI Estimate",
        "description": "Use our AI-powered remodel cost calculator to get an instant budget estimate for kitchens, bathrooms, basements, and more in Seattle.",
        "isPartOf": {
          "@id": "https://www.renova.contractors/#website"
        }
      },
      {
        "@type": "VideoObject",
        "@id": "https://www.renova.contractors/#video",
        "name": "Seattle Home Remodeling Services - RENOVA Contractors",
        "description": "Learn about RENOVA Contractors' home remodeling services in Seattle including kitchen, bathroom, basement, and more renovation projects.",
        "thumbnailUrl": "https://img.youtube.com/vi/AuuHOqpgals/maxresdefault.jpg",
        "uploadDate": "2024-01-15T00:00:00Z",
        "duration": "PT2M30S",
        "contentUrl": "https://www.youtube.com/watch?v=AuuHOqpgals",
        "embedUrl": "https://www.youtube.com/embed/AuuHOqpgals",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.renova.contractors/#organization",
          "name": "RENOVA Contractors LLC"
        },
        "about": {
          "@type": "LocalBusiness",
          "@id": "https://www.renova.contractors/#localbusiness",
          "name": "RENOVA Contractors LLC"
        }
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.renova.contractors/#reviews-widget",
        "name": "Customer Reviews Widget",
        "description": "Interactive customer reviews and testimonials widget powered by Featurable",
        "isPartOf": {
          "@id": "https://www.renova.contractors/#website"
        },
        "about": {
          "@type": "LocalBusiness",
          "@id": "https://www.renova.contractors/#localbusiness",
          "name": "RENOVA Contractors LLC"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main>
        {/*  <BackgroundPictures pageType={backgroundPicturesMain} /> */}
        <Slider id="hero" />

        
        
        <PageNav />

        <ServicesAbout {...mainPageContent.about} isMobile={isMobile} />
        <div id="reviews" className="scroll-anchor">
          <FeaturableWidget />
        </div>
        <YouTubeShortSlider category="kitchen" city="seattle" />
        <GenerateEstimate />
        <OurServices {...mainPageContent.ourServices} />
      <SimpleYouTubeVideo
        videoUrl="https://www.youtube.com/watch?v=AuuHOqpgals"
      />

        <Licensing />

        <PageNav />
        <PerksComponentGrid />
        {/* <TopProducts /> */}
        <CostTables />
        <HowWeWork {...mainPageContent.howWeWork} />
        <ContactUs />
        <MainWhySection {...mainPageContent.whySection} isMobile={isMobile} />

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

        <SeattleRemodelCalculator category="kitchen" />
        <Manufacturers {...mainPageContent.manufacturers} />
        <FAQ {...mainPageContent} />
        <LocationsList />

        <div className="flex max-sm:flex-col justify-center items-center gap-2.5 pb-[60px]">
          <p className="text-title text-white">ANY QUESTIONS?</p>
          <FormMain />
        </div>
      </main>
    </>
  );
}
