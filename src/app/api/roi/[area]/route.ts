import { NextRequest, NextResponse } from 'next/server';
import { data } from '@/constants/roiData/data';

// GET /api/roi/[area] - Get ROI data for specific area
export async function GET(
  request: NextRequest,
  { params }: { params: { area: string } }
) {
  try {
    const { area } = params;
    
    // Check if area exists in data
    if (!data[area as keyof typeof data]) {
      return NextResponse.json(
        { 
          error: 'Area not found',
          message: `ROI data for area '${area}' not found`,
          availableAreas: Object.keys(data)
        },
        { status: 404 }
      );
    }

    const areaData = data[area as keyof typeof data];
    
    // Return the area-specific data
    return NextResponse.json({
      success: true,
      data: areaData,
      meta: {
        area,
        timestamp: new Date().toISOString(),
        version: '1.0'
      }
    });

  } catch (error) {
    console.error('Error fetching ROI data:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to fetch ROI data'
      },
      { status: 500 }
    );
  }
}

