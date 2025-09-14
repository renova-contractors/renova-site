import { NextResponse } from 'next/server';
import { data } from '@/constants/roiData/data';

// GET /api/roi/test - Test endpoint to verify API is working
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: 'ROI API is working correctly',
      availableAreas: Object.keys(data),
      sampleData: data.kitchen,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to test ROI API'
      },
      { status: 500 }
    );
  }
}
