/**
 * Get rating from Google Places API
 * Using text search for "Renova Contractors LLC" in Seattle
 */

export interface GooglePlacesRating {
  ratingValue: string;
  reviewCount: string;
}

const BUSINESS_NAME = 'Renova Contractors LLC';
const BUSINESS_ADDRESS = '221 1st Ave W #247, Seattle, WA 98119';

export async function getGooglePlacesRating(): Promise<GooglePlacesRating | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn('GOOGLE_PLACES_API_KEY is not configured. Using fallback rating.');
    return null;
  }

  try {
    // First, search for the place by text
    const searchQuery = encodeURIComponent(`${BUSINESS_NAME} ${BUSINESS_ADDRESS}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;
    
    const searchResponse = await fetch(searchUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!searchResponse.ok) {
      console.error('Google Places Search API request failed:', searchResponse.status);
      return null;
    }

    const searchData = await searchResponse.json();

    if (searchData.status === 'OK' && searchData.results && searchData.results.length > 0) {
      // Get the first result (most relevant match)
      const place = searchData.results[0];
      
      if (place.rating && place.user_ratings_total) {
        return {
          ratingValue: place.rating.toString(),
          reviewCount: place.user_ratings_total.toString(),
        };
      }

      // If rating is not in search results, get details using place_id
      if (place.place_id) {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=rating,user_ratings_total&key=${apiKey}`;
        
        const detailsResponse = await fetch(detailsUrl, {
          next: { revalidate: 3600 }
        });

        if (detailsResponse.ok) {
          const detailsData = await detailsResponse.json();
          
          if (detailsData.status === 'OK' && detailsData.result) {
            const rating = detailsData.result.rating;
            const reviewCount = detailsData.result.user_ratings_total;

            if (rating && reviewCount) {
              return {
                ratingValue: rating.toString(),
                reviewCount: reviewCount.toString(),
              };
            }
          }
        }
      }
    }

    console.error('Google Places API returned invalid data:', searchData.status);
    return null;
  } catch (error) {
    console.error('Error fetching Google Places rating:', error);
    return null;
  }
}

