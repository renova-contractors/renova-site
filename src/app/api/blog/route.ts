import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    if (!backendUrl) {
      return NextResponse.json(
        { error: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    // Build the API URL based on parameters
    let apiUrl = `${backendUrl}/blog/`;
    
    if (category && location) {
      // If both category and location are provided, fetch all and filter
      apiUrl = `${backendUrl}/blog/`;
    } else if (category) {
      apiUrl = `${backendUrl}/blog/category/${category}`;
    }

    console.log('Fetching blog data from:', apiUrl);

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`Backend API request failed: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: 'Failed to fetch blog data from backend' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // If both category and location are provided, filter the results
    if (category && location) {
      const filteredData = data.filter((post: any) => {
        const isCategoryMatch = 
          post.category?.toLowerCase() === category.toLowerCase() ||
          post.metaTitle?.toLowerCase().includes(category.toLowerCase()) ||
          post.cardTitle?.toLowerCase().includes(category.toLowerCase()) ||
          post.metaDescription?.toLowerCase().includes(category.toLowerCase()) ||
          post.cardDescription?.toLowerCase().includes(category.toLowerCase());
        
        const isLocationMatch = 
          post.location?.toLowerCase() === location.toLowerCase() ||
          post.metaTitle?.toLowerCase().includes(location.toLowerCase()) ||
          post.cardTitle?.toLowerCase().includes(location.toLowerCase()) ||
          post.metaDescription?.toLowerCase().includes(location.toLowerCase()) ||
          post.cardDescription?.toLowerCase().includes(location.toLowerCase());
        
        return isCategoryMatch && isLocationMatch;
      });
      
      return NextResponse.json(filteredData);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in blog API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
