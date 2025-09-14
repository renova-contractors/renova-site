import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { data } from '@/constants/roiData/data'

export const metadata: Metadata = {
  title: 'ROI Calculators for Seattle Home Remodeling | RENOVA Contractors',
  description: 'Calculate return on investment for your Seattle home remodeling projects. Free ROI calculators for kitchen, bathroom, attic, basement, roofing, deck, siding, and flooring remodels.',
  keywords: 'ROI calculator, Seattle remodeling, home renovation ROI, kitchen remodel calculator, bathroom remodel ROI, attic conversion calculator, basement finishing ROI, roofing ROI, deck ROI, siding ROI, flooring ROI',
  openGraph: {
    title: 'ROI Calculators for Seattle Home Remodeling | RENOVA Contractors',
    description: 'Calculate return on investment for your Seattle home remodeling projects. Free ROI calculators for all major renovation types.',
    type: 'website',
    url: 'https://www.renova.contractors/roi',
    images: [
      {
        url: 'https://res.cloudinary.com/dzojhepyl/image/upload/v1722931865/kitchen/8C623FAB-87EF-42B7-978C-3937E512C023_rmocq4.jpg',
        width: 1200,
        height: 630,
        alt: 'Seattle home remodeling ROI calculators'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculators for Seattle Home Remodeling | RENOVA Contractors',
    description: 'Calculate return on investment for your Seattle home remodeling projects. Free ROI calculators for all major renovation types.',
    images: ['https://res.cloudinary.com/dzojhepyl/image/upload/v1722931865/kitchen/8C623FAB-87EF-42B7-978C-3937E512C023_rmocq4.jpg']
  },
  alternates: {
    canonical: 'https://www.renova.contractors/roi'
  }
}

const calculators = [
  {
    id: 'kitchen',
    name: 'Kitchen Remodel',
    description: 'Calculate ROI for your kitchen renovation project',
    url: 'return-on-investment-for-kitchen-remodeling-seattle',
    icon: '🍳',
    color: 'from-orange-500 to-red-500',
    typicalROI: '55-85%',
    investmentRange: '$25k - $150k'
  },
  {
    id: 'bathroom',
    name: 'Bathroom Remodel',
    description: 'Calculate ROI for your bathroom renovation project',
    url: 'return-on-investment-for-bathroom-remodeling-seattle',
    icon: '🚿',
    color: 'from-blue-500 to-cyan-500',
    typicalROI: '55-80%',
    investmentRange: '$15k - $80k'
  },
  {
    id: 'attic',
    name: 'Attic Conversion',
    description: 'Calculate ROI for your attic finishing project',
    url: 'return-on-investment-for-attic-remodeling-seattle',
    icon: '🏠',
    color: 'from-purple-500 to-pink-500',
    typicalROI: '55-80%',
    investmentRange: '$15k - $220k'
  },
  {
    id: 'basement',
    name: 'Basement Finishing',
    description: 'Calculate ROI for your basement finishing project',
    url: 'return-on-investment-for-basement-remodeling-seattle',
    icon: '🏗️',
    color: 'from-gray-600 to-gray-800',
    typicalROI: '55-80%',
    investmentRange: '$35k - $250k'
  },
  {
    id: 'roofing',
    name: 'Roofing Replacement',
    description: 'Calculate ROI for your roofing project',
    url: 'return-on-investment-for-roofing-seattle',
    icon: '🏠',
    color: 'from-slate-600 to-slate-800',
    typicalROI: '60-85%',
    investmentRange: '$8k - $25k'
  },
  {
    id: 'deck',
    name: 'Deck Construction',
    description: 'Calculate ROI for your deck building project',
    url: 'return-on-investment-for-deck-seattle',
    icon: '🌳',
    color: 'from-green-600 to-green-800',
    typicalROI: '65-90%',
    investmentRange: '$10k - $50k'
  },
  {
    id: 'siding',
    name: 'Siding Replacement',
    description: 'Calculate ROI for your siding project',
    url: 'return-on-investment-for-siding-seattle',
    icon: '🏘️',
    color: 'from-indigo-500 to-blue-600',
    typicalROI: '70-90%',
    investmentRange: '$12k - $35k'
  },
  {
    id: 'flooring',
    name: 'Flooring Installation',
    description: 'Calculate ROI for your flooring project',
    url: 'return-on-investment-for-flooring-seattle',
    icon: '🪵',
    color: 'from-amber-600 to-orange-600',
    typicalROI: '60-85%',
    investmentRange: '$8k - $30k'
  }
]

const page = () => {
  return (
    <div className="min-h-screen container first-component sm:w-2/3 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-16 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ROI Calculators for Seattle Home Remodeling
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Calculate the return on investment for your Seattle home renovation projects. 
              Get accurate estimates and make informed decisions about your remodeling investments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Free Calculators</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Seattle-Specific Data</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">2025 Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Remodeling Project
              </h2>
              <p className="text-lg text-main-gray max-w-3xl mx-auto">
                Select from our comprehensive collection of ROI calculators designed specifically 
                for Seattle homeowners. Each calculator provides detailed analysis based on 
                current market data and local trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {calculators.map((calculator) => (
                <Link
                  key={calculator.id}
                  href={`/return-on-investment-remodel/${calculator.url}`}
                  className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${calculator.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{calculator.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {calculator.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {calculator.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Typical ROI:</span>
                        <span className="font-semibold text-green-600">{calculator.typicalROI}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Investment:</span>
                        <span className="font-semibold text-blue-600">{calculator.investmentRange}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span>Calculate ROI</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 rounded-3xl inside-mb">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Use Our ROI Calculators?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seattle-Specific Data</h3>
                <p className="text-gray-600">Our calculators use real market data from Seattle neighborhoods to provide accurate ROI estimates.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2025 Updated</h3>
                <p className="text-gray-600">All data is current for 2025, reflecting the latest market trends and construction costs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-gray-600">Get immediate ROI calculations and investment recommendations for your specific project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Remodeling Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Use our ROI calculators to plan your investment, then contact RENOVA Contractors 
              for expert guidance and professional execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ROI Calculators for Seattle Home Remodeling",
            "description": "Calculate return on investment for your Seattle home remodeling projects. Free ROI calculators for kitchen, bathroom, attic, basement, roofing, deck, siding, and flooring remodels.",
            "url": "https://www.renova.contractors/roi",
            "mainEntity": {
              "@type": "ItemList",
              "name": "ROI Calculators",
              "itemListElement": calculators.map((calc, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": calc.name,
                "description": calc.description,
                "url": `https://www.renova.contractors/roi/${calc.url}`
              }))
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
                  "name": "ROI Calculators",
                  "item": "https://www.renova.contractors/roi"
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