import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import NextBreadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import ClientWrapper from "@/components/Dropdown/ClientWrapper";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "RENOVA Contractors LLC | Seattle Home Remodeling",
    template: "%s | RENOVA Contractors LLC"
  },
  description: "Professional home remodeling services in Seattle. Kitchens, bathrooms, basements, and more. Licensed contractors with 11+ years experience. Free design consultation and discounted materials. Call 206-255-2708 for an estimate.",
  keywords: [
    "Seattle remodeling",
    "kitchen remodel Seattle",
    "bathroom remodel Seattle", 
    "basement finishing Seattle",
    "home renovation Seattle",
    "contractors Seattle",
    "licensed contractors",
    "home remodeling",
    "renovation services",
    "Seattle contractors"
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
    url: 'https://www.renova.contractors',
    siteName: 'RENOVA Contractors LLC',
    title: 'RENOVA Contractors LLC | Seattle Home Remodeling',
    description: 'Professional home remodeling services in Seattle. Kitchens, bathrooms, basements, and more. Licensed contractors with 11+ years experience.',
    images: [
      {
        url: 'https://www.renova.contractors/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RENOVA Contractors LLC - Seattle Home Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RENOVA Contractors LLC | Seattle Home Remodeling',
    description: 'Professional home remodeling services in Seattle. Licensed contractors with 11+ years experience.',
    images: ['https://www.renova.contractors/twitter-image.jpg'],
  },
  verification: {
    google: '6BAC73CBD2804DA3E05336B597702D53',
  },
  alternates: {
    canonical: 'https://www.renova.contractors'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#000000',
  colorScheme: 'dark',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<head>
			<script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ5CQTCG');`,
          }}
        />
			{/* Google Analytics - using Next.js GoogleAnalytics component instead of manual scripts */}
				<Script id="facebook-pixel" strategy="afterInteractive">
					{`
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '401679525836971');
						fbq('track', 'PageView');
					`}
				</Script>
				<meta name="msvalidate.01" content="6BAC73CBD2804DA3E05336B597702D53" />
			</head>
			<body className="bg-main-dark">
			<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZ5CQTCG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.renova.contractors"
                }
              ]
            })
          }}
        />
				<ClientWrapper>
					<Header />
				</ClientWrapper>
				<div className="container relative top-[220px] max-sm:top-[175px]">
					<NextBreadcrumb
						homeElement={<span className="text-white ">Home</span>}
						separator={<span color="main-gray">|</span>}
						activeClasses="text-main-yellow hover:underline"
						listClasses="hover:underline mx-2 text-white"
						capitalizeLinks
					/>
				</div>

				{children}
				<Footer />
			</body>
			<SpeedInsights />
			<Analytics />
			<GoogleAnalytics gaId="G-VCL1839D6R" />
		</html>
	);
}
