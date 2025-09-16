import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap | RENOVA Contractors - Seattle Home Remodeling',
  description: 'Complete sitemap of RENOVA Contractors website. Find all our services, locations, ROI calculators, blog posts, and more. Easy navigation to all Seattle home remodeling resources.',
  keywords: 'sitemap, RENOVA Contractors, Seattle remodeling, home renovation services, kitchen remodel, bathroom remodel, basement finishing, attic conversion, ROI calculator',
  openGraph: {
    title: 'Sitemap | RENOVA Contractors - Seattle Home Remodeling',
    description: 'Complete sitemap of RENOVA Contractors website. Find all our services, locations, ROI calculators, and more.',
    type: 'website',
    url: 'https://www.renova.contractors/sitemap',
  },
  alternates: {
    canonical: 'https://www.renova.contractors/sitemap'
  }
}

const sitemapData = {
  main: [
    { title: 'Home', href: '/', description: 'Seattle home remodeling contractor' },
    { title: 'About Us', href: '/about', description: 'Learn about RENOVA Contractors' },
    { title: 'Services', href: '/services', description: 'All our remodeling services' },
    { title: 'Blog', href: '/blog', description: 'Home remodeling tips and insights' },
    { title: 'ROI Calculator', href: '/return-on-investment-remodel', description: 'Calculate your remodeling ROI' },
    { title: 'Contact', href: '/contact', description: 'Get in touch with us' },
  ],
  services: {
    'Kitchen Remodeling': [
      { title: 'Kitchen Remodel Seattle', href: '/kitchen-remodel-seattle', location: 'Seattle' },
      { title: 'Kitchen Remodel Bellevue', href: '/kitchen-remodel-bellevue', location: 'Bellevue' },
      { title: 'Kitchen Remodel Mill Creek', href: '/kitchen-remodel-mill-creek', location: 'Mill Creek' },
      { title: 'Kitchen Remodel Mercer Island', href: '/kitchen-remodel-mercer-island', location: 'Mercer Island' },
      { title: 'Kitchen Remodel Edmonds', href: '/kitchen-remodel-edmonds', location: 'Edmonds' },
    ],
    'Bathroom Remodeling': [
      { title: 'Bathroom Remodel Seattle', href: '/bathroom-remodel-seattle', location: 'Seattle' },
      { title: 'Bathroom Remodel Bellevue', href: '/bathroom-remodel-bellevue', location: 'Bellevue' },
      { title: 'Bathroom Remodel Mill Creek', href: '/bathroom-remodel-mill-creek', location: 'Mill Creek' },
      { title: 'Bathroom Remodel Mercer Island', href: '/bathroom-remodel-mercer-island', location: 'Mercer Island' },
      { title: 'Bathroom Remodel Edmonds', href: '/bathroom-remodel-edmonds', location: 'Edmonds' },
    ],
    'Basement Finishing': [
      { title: 'Basement Finishing Seattle', href: '/basement-finishing-seattle', location: 'Seattle' },
      { title: 'Basement Finishing Bellevue', href: '/basement-finishing-bellevue', location: 'Bellevue' },
      { title: 'Basement Finishing Mill Creek', href: '/basement-finishing-mill-creek', location: 'Mill Creek' },
      { title: 'Basement Finishing Mercer Island', href: '/basement-finishing-mercer-island', location: 'Mercer Island' },
      { title: 'Basement Finishing Edmonds', href: '/basement-finishing-edmonds', location: 'Edmonds' },
      { title: 'Basement ADU Seattle', href: '/basement-finishing-seattle/adu', location: 'Seattle' },
      { title: 'Basement Egress Windows', href: '/basement-finishing-seattle/egress-windows', location: 'Seattle' },
      { title: 'Basement Floors', href: '/basement-finishing-seattle/floors', location: 'Seattle' },
      { title: 'Basement Bathroom', href: '/basement-finishing-seattle/bathroom', location: 'Seattle' },
    ],
    'Attic Finishing': [
      { title: 'Attic Finishing Seattle', href: '/attic-finishing-seattle', location: 'Seattle' },
      { title: 'Attic Finishing Bellevue', href: '/attic-finishing-bellevue', location: 'Bellevue' },
      { title: 'Attic Finishing Mill Creek', href: '/attic-finishing-mill-creek', location: 'Mill Creek' },
      { title: 'Attic Finishing Mercer Island', href: '/attic-finishing-mercer-island', location: 'Mercer Island' },
      { title: 'Attic Finishing Edmonds', href: '/attic-finishing-edmonds', location: 'Edmonds' },
    ],
    'Other Services': [
      { title: 'Cabinet Installation Seattle', href: '/cabinet-installation-seattle', location: 'Seattle' },
      { title: 'Cabinet Installation Bellevue', href: '/cabinet-installation-bellevue', location: 'Bellevue' },
      { title: 'Cabinet Installation Mill Creek', href: '/cabinet-installation-mill-creek', location: 'Mill Creek' },
      { title: 'Flooring Installation Seattle', href: '/flooring-installation-seattle', location: 'Seattle' },
      { title: 'Flooring Installation Bellevue', href: '/flooring-installation-bellevue', location: 'Bellevue' },
      { title: 'Mill Creek Flooring Installation', href: '/mill-creek-flooring-installation', location: 'Mill Creek' },
      { title: 'Roofing Seattle', href: '/roofing-seattle', location: 'Seattle' },
      { title: 'Roofing Bellevue', href: '/roofing-bellevue', location: 'Bellevue' },
      { title: 'Siding Installation Seattle', href: '/siding-installation-seattle', location: 'Seattle' },
      { title: 'Siding Installation Bellevue', href: '/siding-installation-bellevue', location: 'Bellevue' },
      { title: 'Tile Installation Seattle', href: '/tile-installation-seattle', location: 'Seattle' },
      { title: 'Tile Installation Bellevue', href: '/tile-installation-bellevue', location: 'Bellevue' },
      { title: 'Tile Installation Mill Creek', href: '/tile-installation-mill-creek', location: 'Mill Creek' },
      { title: 'Countertop Installation Mill Creek', href: '/countertop-installation-mill-creek', location: 'Mill Creek' },
      { title: 'Deck Building Mill Creek', href: '/deck-building-mill-creek', location: 'Mill Creek' },
    ],
  },
  roiCalculators: [
    { title: 'Kitchen ROI Calculator', href: '/return-on-investment-remodel/kitchen', description: 'Calculate kitchen remodel ROI' },
    { title: 'Bathroom ROI Calculator', href: '/return-on-investment-remodel/bathroom', description: 'Calculate bathroom remodel ROI' },
    { title: 'Attic ROI Calculator', href: '/return-on-investment-remodel/attic', description: 'Calculate attic conversion ROI' },
    { title: 'Basement ROI Calculator', href: '/return-on-investment-remodel/basement', description: 'Calculate basement finishing ROI' },
    { title: 'Roofing ROI Calculator', href: '/return-on-investment-remodel/roofing', description: 'Calculate roofing ROI' },
    { title: 'Deck ROI Calculator', href: '/return-on-investment-remodel/deck', description: 'Calculate deck construction ROI' },
    { title: 'Siding ROI Calculator', href: '/return-on-investment-remodel/siding', description: 'Calculate siding ROI' },
    { title: 'Flooring ROI Calculator', href: '/return-on-investment-remodel/flooring', description: 'Calculate flooring ROI' },
  ],
  locations: [
    { title: 'Seattle', href: '/location/seattle', description: 'Seattle remodeling services' },
    { title: 'Bellevue', href: '/location/bellevue', description: 'Bellevue remodeling services' },
  ],
  blog: [
    { title: 'Blog Home', href: '/blog', description: 'All blog posts' },
    { title: 'Bathroom Category', href: '/blog/category/bathroom', description: 'Bathroom remodeling articles' },
    { title: 'Small Bathroom Cost', href: '/blog/bathroom-remodel-cost-seattle-small-bathroom', description: 'Small bathroom remodel costs in Seattle' },
    { title: 'Basement Remodel Cost', href: '/blog/basement-remodel-cost-seattle', description: 'Basement remodel costs in Seattle with permits and waterproofing' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy-policy', description: 'Privacy policy and data protection' },
    { title: 'Terms and Conditions', href: '/terms-and-conditions', description: 'Terms of service and conditions' },
  ],
}

const SitemapSection = ({ title, items, icon, description }: { 
  title: string; 
  items: Array<{ title: string; href: string; description?: string; location?: string }>; 
  icon: string;
  description?: string;
}) => (
  <section className="mb-12">
    <div className="flex items-center mb-6">
      <span className="text-3xl mr-3">{icon}</span>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
        >
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          )}
          {item.location && (
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {item.location}
            </span>
          )}
        </Link>
      ))}
    </div>
  </section>
)

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 container first-component  inside-mb rounded-3xl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-16">
        <div className="container mx-auto ">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Navigate through all our services, locations, and resources. 
              Find exactly what you&apos;re looking for with our organized site structure.
            </p>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Pages */}
          <SitemapSection
            title="Main Pages"
            icon="🏠"
            description="Core pages of our website"
            items={sitemapData.main}
          />

          {/* ROI Calculators */}
          <SitemapSection
            title="ROI Calculators"
            icon="📊"
            description="Calculate return on investment for your remodeling projects"
            items={sitemapData.roiCalculators}
          />

          {/* Services by Category */}
          {Object.entries(sitemapData.services).map(([category, items]) => (
            <SitemapSection
              key={category}
              title={category}
              icon={category === 'Kitchen Remodeling' ? '🍳' : 
                    category === 'Bathroom Remodeling' ? '🚿' :
                    category === 'Basement Finishing' ? '🏗️' :
                    category === 'Attic Finishing' ? '🏠' : '🔧'}
              description={`${category} services across all locations`}
              items={items}
            />
          ))}

          {/* Locations */}
          <SitemapSection
            title="Service Locations"
            icon="📍"
            description="Cities where we provide remodeling services"
            items={sitemapData.locations}
          />

          {/* Blog */}
          <SitemapSection
            title="Blog & Resources"
            icon="📝"
            description="Articles, tips, and insights about home remodeling"
            items={sitemapData.blog}
          />

          {/* Legal */}
          <SitemapSection
            title="Legal & Policies"
            icon="📋"
            description="Important legal information and policies"
            items={sitemapData.legal}
          />

          {/* Search Box */}
          <section className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
            <p className="text-gray-600 mb-6">
              Use our search functionality or contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sitemap | RENOVA Contractors",
            "description": "Complete sitemap of RENOVA Contractors website. Find all our services, locations, ROI calculators, and more.",
            "url": "https://www.renova.contractors/sitemap",
            "mainEntity": {
              "@type": "SiteNavigationElement",
              "name": "Website Sitemap",
              "description": "Complete navigation structure of RENOVA Contractors website"
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
                  "name": "Sitemap",
                  "item": "https://www.renova.contractors/sitemap"
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}

export default page
