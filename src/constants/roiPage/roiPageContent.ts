export const roiPageContent = {
  // Page metadata
  meta: {
    title: "ROI Calculator | Seattle Home Improvement",
    description: "Calculate the return on investment for your home remodel in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
    keywords: [
      "remodel ROI calculator",
      "Seattle home improvement ROI",
      "remodel return on investment",
      "home renovation calculator",
      "Seattle remodeling costs",
      "property value increase",
      "home improvement investment",
      "renovation ROI analysis",
      "Seattle contractors",
      "RENOVA contractors"
    ],
    canonical: "https://www.renova.contractors/roi",
    ogImage: "https://www.renova.contractors/logo.png"
  },

  // Page content structure
  content: {
    // Breadcrumb navigation
    breadcrumb: {
      items: [
        { name: "Home", url: "/" },
        { name: "ROI Calculator", url: "/roi" }
      ]
    },

    // Main header section
    header: {
      title: "ROI Calculator",
      subtitle: "Calculate the ROI of your remodel project",
      description: "Calculate the return on investment for your home remodel in Seattle. Get accurate cost estimates, value projections, and ROI analysis based on real Seattle market data."
    },

    // ROI Calculator configuration
    calculator: {
      categories: {
        kitchen: {
          name: "Kitchen",
          min: 25000,
          max: 150000,
          avg: 60000,
          roiCurve: "0.82 - Math.min(0.18, (cost - 60000) * 0.0000025)"
        },
        bathroom: {
          name: "Bathroom", 
          min: 15000,
          max: 85000,
          avg: 30000,
          roiCurve: "0.65 / (1 + Math.exp(-0.000025 * (cost - 40000)))"
        },
        attic: {
          name: "Attic",
          min: 20000,
          max: 120000,
          avg: 50000,
          roiCurve: "Math.min(0.78, 0.6 + cost * 0.000002)"
        },
        basement: {
          name: "Basement",
          min: 30000,
          max: 200000,
          avg: 70000,
          roiCurve: "0.68 + Math.log(Math.max(cost, 1) / 30000) * 0.03"
        },
        roofing: {
          name: "Roofing",
          min: 25000,
          max: 150000,
          avg: 40000,
          roiCurve: "0.82 - Math.min(0.18, (cost - 60000) * 0.0000025)"
        },
        deck: {
          name: "Deck",
          min: 1500,
          max: 85000,
          avg: 18000,
          roiCurve: "0.65 / (1 + Math.exp(-0.000025 * (cost - 40000)))"
        },
        siding: {
          name: "Siding",
          min: 5000,
          max: 120000,
          avg: 25000,
          roiCurve: "Math.min(0.78, 0.6 + cost * 0.000002)"
        },
        flooring: {
          name: "Flooring",
          min: 1000,
          max: 20000,
          avg: 8000,
          roiCurve: "0.68 + Math.log(Math.max(cost, 1) / 30000) * 0.03"
        }
      },
      defaultCategory: "kitchen",
      features: [
        "Real-time ROI calculations based on Seattle market trends",
        "Accurate cost range estimates for all remodel types",
        "Value projection analysis using local market data",
        "Interactive investment slider for easy adjustments",
        "Professional contractor insights from RENOVA Contractors"
      ]
    },

    // Additional content sections
    sections: {
      whyUseCalculator: {
        title: "Why Use Our ROI Calculator?",
        content: "Our remodel ROI calculator uses real Seattle market data to provide accurate return on investment projections. Whether you're planning a minor update or a complete renovation, our tool helps you make informed financial decisions.",
        features: [
          "Real-time ROI calculations based on Seattle market trends",
          "Accurate cost range estimates for all remodel types",
          "Value projection analysis using local market data",
          "Interactive investment slider for easy adjustments",
          "Professional contractor insights from RENOVA Contractors"
        ]
      },
      howItWorks: {
        title: "How It Works:",
        steps: [
          "Adjust the investment slider to your planned budget",
          "View real-time ROI percentage and value added calculations",
          "See your net remodel cost after value increase",
          "Make informed decisions about your remodel investment"
        ]
      }
    },

    // SEO Schema data
    schema: {
      webApplication: {
        name: "Seattle Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your home remodel in Seattle with our free ROI calculator.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        offers: {
          price: "0",
          priceCurrency: "USD",
          description: "Free ROI Calculator"
        },
        provider: {
          name: "RENOVA Contractors LLC",
          url: "https://www.renova.contractors",
          logo: "https://www.renova.contractors/logo.png",
          address: {
            addressLocality: "Seattle",
            addressRegion: "WA",
            addressCountry: "US"
          },
          contactPoint: {
            telephone: "+1-206-255-2708",
            contactType: "customer service"
          }
        },
        featureList: [
          "Real-time ROI calculations",
          "Seattle market data",
          "Cost range estimates",
          "Value projection analysis",
          "Interactive investment slider"
        ]
      },
      webPage: {
        name: "ROI Calculator 2025",
        description: "Calculate the return on investment for your home remodel in Seattle. Free ROI calculator with real market data.",
        breadcrumb: {
          itemListElement: [
            {
              position: 1,
              name: "Home",
              item: "https://www.renova.contractors"
            },
            {
              position: 2,
              name: "ROI Calculator",
              item: "https://www.renova.contractors/roi"
            }
          ]
        }
      }
    },

    // Dynamic content for different categories
    categoryContent: {
      kitchen: {
        title: "Kitchen Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your kitchen remodel in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "kitchen remodel ROI calculator",
          "Seattle kitchen renovation ROI",
          "kitchen remodel return on investment",
          "kitchen renovation calculator",
          "Seattle kitchen remodeling costs"
        ]
      },
      bathroom: {
        title: "Bathroom Remodel ROI Calculator 2025", 
        description: "Calculate the return on investment for your bathroom remodel in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "bathroom remodel ROI calculator",
          "Seattle bathroom renovation ROI",
          "bathroom remodel return on investment",
          "bathroom renovation calculator",
          "Seattle bathroom remodeling costs"
        ]
      },
      attic: {
        title: "Attic Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your attic remodel in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "attic remodel ROI calculator",
          "Seattle attic renovation ROI",
          "attic remodel return on investment",
          "attic renovation calculator",
          "Seattle attic remodeling costs"
        ]
      },
      basement: {
        title: "Basement Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your basement remodel in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "basement remodel ROI calculator",
          "Seattle basement renovation ROI",
          "basement remodel return on investment",
          "basement renovation calculator",
          "Seattle basement remodeling costs"
        ]
      },
      roofing: {
        title: "Roofing Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your roofing project in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "roofing ROI calculator",
          "Seattle roofing renovation ROI",
          "roofing return on investment",
          "roofing calculator",
          "Seattle roofing costs"
        ]
      },
      deck: {
        title: "Deck Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your deck project in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "deck ROI calculator",
          "Seattle deck renovation ROI",
          "deck return on investment",
          "deck calculator",
          "Seattle deck costs"
        ]
      },
      siding: {
        title: "Siding Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your siding project in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "siding ROI calculator",
          "Seattle siding renovation ROI",
          "siding return on investment",
          "siding calculator",
          "Seattle siding costs"
        ]
      },
      flooring: {
        title: "Flooring Remodel ROI Calculator 2025",
        description: "Calculate the return on investment for your flooring project in Seattle. Free ROI calculator with real market data, cost estimates, and value projections.",
        keywords: [
          "flooring ROI calculator",
          "Seattle flooring renovation ROI",
          "flooring return on investment",
          "flooring calculator",
          "Seattle flooring costs"
        ]
      }
    }
  },

  // Page styling configuration
  styling: {
    container: "container first-component sm:w-2/3",
    header: {
      title: "text-title-large text-white inside-mb",
      subtitle: "text-main-gray inside-mb text-lg leading-relaxed"
    },
    breadcrumb: {
      container: "mb-6",
      item: "flex items-center space-x-2 text-sm text-gray-400",
      link: "hover:text-main-yellow transition-colors duration-200",
      current: "text-white font-medium"
    }
  }
};

export default roiPageContent;
