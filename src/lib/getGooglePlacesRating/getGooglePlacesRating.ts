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
    console.warn('⚠️ GOOGLE_PLACES_API_KEY is not configured. Using fallback rating.');
    return null;
  }

  console.log('🔍 Fetching rating from Google Places API...');
  console.log('📍 Business:', BUSINESS_NAME);
  console.log('📍 Address:', BUSINESS_ADDRESS);

  try {
    // First, search for the place by text
    const searchQuery = encodeURIComponent(`${BUSINESS_NAME} ${BUSINESS_ADDRESS}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;
    
    console.log('🌐 Search URL:', searchUrl.replace(apiKey, '***KEY_HIDDEN***'));
    
    const searchResponse = await fetch(searchUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!searchResponse.ok) {
      console.error('❌ Google Places Search API request failed:', searchResponse.status, searchResponse.statusText);
      const errorText = await searchResponse.text();
      console.error('Error details:', errorText);
      return null;
    }

    const searchData = await searchResponse.json();
    console.log('📊 Search API Status:', searchData.status);
    console.log('📊 Results count:', searchData.results?.length || 0);

    if (searchData.status === 'OK' && searchData.results && searchData.results.length > 0) {
      // Get the first result (most relevant match)
      const place = searchData.results[0];
      console.log('🏢 Found place:', place.name);
      console.log('📍 Place ID:', place.place_id);
      
      if (place.rating && place.user_ratings_total) {
        console.log('✅ Rating found in search results:', place.rating, place.user_ratings_total);
        return {
          ratingValue: place.rating.toString(),
          reviewCount: place.user_ratings_total.toString(),
        };
      }

      // If rating is not in search results, get details using place_id
      if (place.place_id) {
        console.log('🔍 Fetching details for place_id:', place.place_id);
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=rating,user_ratings_total&key=${apiKey}`;
        
        const detailsResponse = await fetch(detailsUrl, {
          next: { revalidate: 3600 }
        });

        if (detailsResponse.ok) {
          const detailsData = await detailsResponse.json();
          console.log('📊 Details API Status:', detailsData.status);
          
          if (detailsData.status === 'OK' && detailsData.result) {
            const rating = detailsData.result.rating;
            const reviewCount = detailsData.result.user_ratings_total;

            if (rating && reviewCount) {
              console.log('✅ Rating found in details:', rating, reviewCount);
              return {
                ratingValue: rating.toString(),
                reviewCount: reviewCount.toString(),
              };
            } else {
              console.warn('⚠️ Details API returned place but no rating/reviewCount');
            }
          } else {
            console.error('❌ Details API error:', detailsData.status, detailsData.error_message);
          }
        } else {
          console.error('❌ Details API request failed:', detailsResponse.status);
        }
      }
    } else {
      console.error('❌ Google Places API returned invalid data. Status:', searchData.status);
      if (searchData.error_message) {
        console.error('Error message:', searchData.error_message);
      }
      if (searchData.status === 'ZERO_RESULTS') {
        console.error('❌ No results found for:', `${BUSINESS_NAME} ${BUSINESS_ADDRESS}`);
      }
    }

    return null;
  } catch (error: any) {
    console.error('❌ Error fetching Google Places rating:', error.message || error);
    console.error('Full error:', error);
    return null;
  }
}

