import { NextResponse } from 'next/server';
import { getGooglePlacesRating } from '@/lib/getGooglePlacesRating/getGooglePlacesRating';

export const dynamic = 'force-dynamic'; // Always fetch fresh data

export async function GET() {
  try {
    const rating = await getGooglePlacesRating();
    
    if (!rating) {
      // Return fallback rating if API fails
      return NextResponse.json({
        ratingValue: '4.9',
        reviewCount: '250',
      });
    }

    return NextResponse.json(rating);
  } catch (error) {
    console.error('Error in Google Places rating API route:', error);
    
    // Return fallback rating on error
    return NextResponse.json({
      ratingValue: '4.9',
      reviewCount: '250',
    });
  }
}

