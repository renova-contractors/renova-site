import { NextResponse } from 'next/server';
import { getGooglePlacesRating } from '@/lib/getGooglePlacesRating/getGooglePlacesRating';

export const dynamic = 'force-dynamic'; // Always fetch fresh data

export async function GET() {
  console.log('🌐 API Route: /api/google-places-rating called');
  
  try {
    const rating = await getGooglePlacesRating();
    
    if (!rating) {
      console.warn('⚠️ API Route: No rating returned, using fallback');
      // Return fallback rating if API fails
      return NextResponse.json({
        ratingValue: '4.9',
        reviewCount: '250',
        source: 'fallback',
      });
    }

    console.log('✅ API Route: Rating fetched successfully:', rating);
    return NextResponse.json({
      ...rating,
      source: 'google-places-api',
    });
  } catch (error: any) {
    console.error('❌ Error in Google Places rating API route:', error.message || error);
    
    // Return fallback rating on error
    return NextResponse.json({
      ratingValue: '4.9',
      reviewCount: '250',
      source: 'fallback-error',
      error: error.message,
    }, { status: 500 });
  }
}

