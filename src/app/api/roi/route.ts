import { NextRequest, NextResponse } from 'next/server';
import { data } from '@/constants/roiData/data';

// GET /api/roi - Get all available ROI areas
export async function GET(request: NextRequest) {
  try {
    const areas = Object.keys(data).map(key => ({
      area: key,
      ...data[key as keyof typeof data]
    }));

    return NextResponse.json({
      success: true,
      data: areas,
      meta: {
        totalAreas: areas.length,
        timestamp: new Date().toISOString(),
        version: '1.0'
      }
    });

  } catch (error) {
    console.error('Error fetching all ROI data:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to fetch ROI data'
      },
      { status: 500 }
    );
  }
}
