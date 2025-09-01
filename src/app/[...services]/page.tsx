import heroBottom from "/public/contentImages/mainHero/services/4.jpg";
import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { FAQ } from "@/components/FAQ/FAQ";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { getServicesData } from "@/lib/getServiceData/getServiceData";
import type { Metadata, ResolvingMetadata } from "next";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { OurServices } from "@/components/OurServices/OurServices";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { CostTables } from "@/components/CostTables/CostTables";
import { PageNav } from "@/components/PageNav/PageNav";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import Licensing from "@/components/Licensing/Licensing";
import SeattleRemodelCalculator from "@/components/Roi";
import InstagramEmbed from "@/components/Instagram/Instagram";
import YouTubeShortSlider from "@/components/Shorts/YoutubeShorts";
import { GenerateEstimate } from "@/components/Chatbot/GenerateEstimate";
import Script from "next/script";
import { ThumbsComponent } from "@/components/ThumbsComponent/ThumbsComponent";

type Props = {
  params: { services: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.services.join("/");

  const service = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/services/${id}`,
  ).then((res) => res.json());

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: service[0]?.title || "Service Page",
    description: service[0]?.description || "",
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const url = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/services/`,
  ).then((res) => res.json());

  return url.map((post: { service: string }) => ({
    services: post.service.split("/"),
  }));
}

const Services: React.FC<{ params: { services: string[] } }> = async ({
  params,
}) => {
  const id = params.services.join("/");
  const servicesData = await getServicesData({ services: id });
  const servicesPageData = servicesData[0];
  const isMobile = useIsMobile();

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ServicePage",
        "@id": `https://www.renova.contractors/${id}`,
        "url": `https://www.renova.contractors/${id}`,
        "name": servicesPageData.hero?.title || `${servicesPageData.category || 'Home'} Remodeling Services`,
        "description": servicesPageData.hero?.description || `Professional ${servicesPageData.category || 'home'} remodeling services in ${servicesPageData.location || 'Seattle'}`,
        "mainEntity": {
          "@type": "Service",
          "name": servicesPageData.category || "Home Remodeling",
          "serviceType": `${servicesPageData.category || 'home'} remodeling`,
          "areaServed": {
            "@type": "City",
            "name": servicesPageData.location || "Seattle"
          },
          "provider": {
            "@type": "Organization",
            "@id": "https://www.renova.contractors/#organization",
            "name": "RENOVA Contractors LLC",
            "telephone": "206-255-2708",
            "email": "sales@renova.contractors",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "221 1st Ave W, #247",
              "addressLocality": "Seattle",
              "addressRegion": "WA",
              "postalCode": "98119",
              "addressCountry": "US"
            }
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "15000",
            "highPrice": "90000",
            "offerCount": "25"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "124"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.renova.contractors/${id}#faq`,
        "mainEntity": (servicesPageData.faqItems || [])
          .filter((faq: any) => faq && faq.title && faq.description) // Only include valid items
          .map((faq: any) => ({
            "@type": "Question",
            "name": faq.title || "",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.description || ""
            }
          }))
      },
      {
        "@type": "WebApplication",
        "@id": `https://www.renova.contractors/${id}#calculator`,
        "name": `${servicesPageData.category || 'Home'} Remodel ROI Calculator`,
        "url": `https://www.renova.contractors/${id}#calculator`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": `Use our calculator to estimate ${servicesPageData.category || 'home'} remodel costs in ${servicesPageData.location || 'Seattle'}.`
      }
    ]
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
			/>
			<PageNav />

			<YouTubeShortSlider
				city={servicesPageData.location}
				category={servicesPageData.category}
			/>

			<OurServices
				{...servicesPageData.ourServices}
				category={servicesPageData.category}
				location={servicesPageData.location}
			/>

			<Licensing />
			<GenerateEstimate />

			<CostTables
				category={servicesPageData.category}
				city={servicesPageData.location}
			/>

			{servicesPageData.images && (
				<section className="container">
					<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
						{servicesPageData.category
							? serviceHeadings.all
							: serviceHeadings[servicesPageData.category]}{" "}
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
