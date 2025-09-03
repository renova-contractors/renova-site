/* import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures"; */
/* import { MainAbout } from "@/components/MainAbout/MainAbout"; */
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { Slider } from "@/components/Slider/Slider";
/* import { TopProducts } from "@/components/TopProducts/TopProducts"; */
/* import { backgroundPicturesMain } from "@/constants/background/backgroundPictures"; */
/* import { ServiceAreas } from "@/components/BottomButtons/BottomButtons";*/
/* import { OurPartners } from "@/components/OurPartners/OurPartners"; */
import { LocationsList } from "@/components/LocationsList/LocationsList";
import ServicesAbout from "@/components/About/ServicesAbout";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";

import useIsMobile from "@/lib/hooks/useIsMobile";
import { OurServices } from "@/components/OurServices/OurServices";
import { FormMain } from "@/components/FormMain/FormMain";
import { CostTables } from "@/components/CostTables/CostTables";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { GenerateEstimate } from "@/components/Chatbot/GenerateEstimate";
import { PageNav } from "@/components/PageNav/PageNav";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import Licensing from "@/components/Licensing/Licensing";
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";

type LocationParams = {
	location: string[];
};

export async function generateStaticParams(): Promise<any> {
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		return [];
	}

	const url = await fetch(
		`${backendUrl}/location/`,
	).then(async (res) => {
		if (!res.ok) {
			console.error(`API request failed: ${res.status} ${res.statusText}`);
			return [];
		}
		const contentType = res.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			console.error('API response is not JSON');
			return [];
		}
		return res.json();
	});

	return url.map((post: { city: string }) => ({
		location: [post.city],
	}));
}

export async function generateMetadata(
	{ params }: { params: LocationParams },
	parent: any,
): Promise<any> {
	const city = params.location;
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		return {
			title: "Location Page",
			description: "Location page from RENOVA Contractors",
		};
	}

	const product = await fetch(
		`${backendUrl}/location/${city}`,
	).then(async (res) => {
		if (!res.ok) {
			console.error(`API request failed: ${res.status} ${res.statusText}`);
			return { title: "Location Page", description: "Location page from RENOVA Contractors" };
		}
		const contentType = res.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			console.error('API response is not JSON');
			return { title: "Location Page", description: "Location page from RENOVA Contractors" };
		}
		return res.json();
	});
	/* 	const previousImages = (await parent).openGraph?.images || [];
	 */

	return {
		title: product[0].title,
		description: product[0].description,
		/* openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		}, */
	};
}

async function getLocationData(params: LocationParams): Promise<any> {
	const city = params.location;
	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

	if (!backendUrl) {
		console.error('NEXT_PUBLIC_BACKEND_URL is not defined');
		return {
			title: "Location Page",
			description: "Location page from RENOVA Contractors",
			markdown: "<p>Location content not available.</p>",
		};
	}

	const res = await fetch(
		`${backendUrl}/location/${city}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Page({
	params,
}: {
	params: LocationParams;
}): Promise<any> {
	const data = await getLocationData(params);

	const props = { ...data[0] };

	const isMobile = useIsMobile();

	// JSON-LD Schema for Location Pages
	const locationSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `https://www.renova.contractors/location/${props.city || 'seattle'}#localbusiness`,
				"name": `RENOVA Contractors LLC - ${props.city || 'Seattle'}`,
				"image": "https://www.renova.contractors/logo.png",
				"url": `https://www.renova.contractors/location/${props.city || 'seattle'}`,
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
				"areaServed": {
					"@type": "City",
					"name": props.city || "Seattle"
				},
				"aggregateRating": {
					"@type": "AggregateRating",
					"ratingValue": "4.9",
					"reviewCount": "250"
				}
			},
			{
				"@type": "Service",
				"@id": `https://www.renova.contractors/location/${props.city || 'seattle'}#service`,
				"name": `${props.city || 'Seattle'} Home Remodeling Services`,
				"serviceType": "Home remodeling and renovation",
				"areaServed": {
					"@type": "City",
					"name": props.city || "Seattle"
				},
				"provider": {
					"@type": "Organization",
					"@id": "https://www.renova.contractors/#organization",
					"name": "RENOVA Contractors LLC",
					"telephone": "206-255-2708",
					"email": "sales@renova.contractors"
				},
				"offers": {
					"@type": "AggregateOffer",
					"priceCurrency": "USD",
					"lowPrice": "15000",
					"highPrice": "90000",
					"offerCount": "25"
				}
			},
			{
				"@type": "FAQPage",
				"@id": `https://www.renova.contractors/location/${props.city || 'seattle'}#faq`,
				"mainEntity": [
					{
						"@type": "Question",
						"name": `Why choose RENOVA for ${props.city || 'Seattle'} remodeling projects?`,
						"acceptedAnswer": {
							"@type": "Answer",
							"text": `RENOVA Contractors LLC is known for quality craftsmanship, clear communication, and handling permits, design, and construction in-house for ${props.city || 'Seattle'} projects.`
						}
					},
					{
						"@type": "Question",
						"name": `Does RENOVA handle plumbing and electrical work in ${props.city || 'Seattle'}?`,
						"acceptedAnswer": {
							"@type": "Answer",
							"text": `Yes, our licensed trades cover plumbing, electrical, HVAC, and more — all work follows ${props.city || 'Seattle'} codes and passes inspection.`
						}
					}
				]
			}
		]
	};

	return (
		<>
			{/* SEO Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(locationSchema),
				}}
			/>
			<main>
				{/* <BackgroundPictures pageType={backgroundPicturesMain} /> */}
				<Slider id="hero" />
				<FormMain>
					<CatalogBanner isMobile={isMobile} />
				</FormMain>
				<PageNav />
				<OurServices {...props.ourServices} location={props.city} />

				<ServicesAbout {...props.about} isMobile={isMobile} />
				{/* <OurServices {...props.ourServices} /> */}
				{/* <TopProducts /> */}
				<HowWeWork {...props.howWeWork} />
				<CostTables category="" city={props.city} />
				<Licensing />
				{/* <section>
					<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
						{serviceHeadings.all} Photos
					</h2>

					<div className="container inside-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
						<ThumbsSwiper category="kitchen" />
						<ThumbsSwiper category="basement" />
					</div>
					<div className="container component-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
						<ThumbsSwiper category="bathroom" />
						<ThumbsSwiper category="countertops" />
					</div>
				</section> */}

				{/* <MainAbout {...props.aboutSection} /> */}
				<Manufacturers {...props.manufacturers} />

				<MainWhySection {...props.whySection} isMobile={isMobile} />
				{/* <OurPartners /> */}
				{/* <ServiceAreas /> */}
				<LocationsList />
			</main>
		</>
	);
}
