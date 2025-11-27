import { getGooglePlacesRating } from '@/lib/getGooglePlacesRating/getGooglePlacesRating';

export default async function TestGoogleRating() {
  // Test direct function call
  console.log('🔍 Testing getGooglePlacesRating function...');
  const directRating = await getGooglePlacesRating();
  console.log('✅ Direct function result:', directRating);

  // Test API route
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL 
    ? new URL(process.env.NEXT_PUBLIC_BACKEND_URL).origin
    : 'http://localhost:3000';
  
  let apiResponse;
  try {
    const response = await fetch(`${baseUrl}/api/google-places-rating`, {
      cache: 'no-store'
    });
    apiResponse = await response.json();
    console.log('✅ API route result:', apiResponse);
  } catch (err: any) {
    console.error('❌ API route error:', err);
    apiResponse = { error: err.message };
  }

  const hasApiKey = !!process.env.GOOGLE_PLACES_API_KEY;
  const apiKeyLength = process.env.GOOGLE_PLACES_API_KEY?.length || 0;

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Google Places Rating Test</h1>
      
      <div className="space-y-6">
        {/* Environment Check */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Environment Check</h2>
          <div className="space-y-2">
            <p>
              <strong>GOOGLE_PLACES_API_KEY configured:</strong>{' '}
              {hasApiKey ? (
                <span className="text-green-600">✅ Yes ({apiKeyLength} characters)</span>
              ) : (
                <span className="text-red-600">❌ No</span>
              )}
            </p>
            <p className="text-sm text-gray-600">
              The API key is {hasApiKey ? 'configured' : 'NOT configured'}. 
              {!hasApiKey && ' Add GOOGLE_PLACES_API_KEY to your environment variables.'}
            </p>
          </div>
        </div>

        {/* Direct Function Test */}
        <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Direct Function Call Result</h2>
          {directRating ? (
            <div className="space-y-2">
              <p><strong>Rating:</strong> <span className="text-2xl font-bold text-green-600">{directRating.ratingValue}</span></p>
              <p><strong>Review Count:</strong> <span className="text-xl font-semibold">{directRating.reviewCount}</span></p>
              <p className="text-sm text-green-600 mt-4">✅ Successfully fetched from Google Places API!</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-yellow-600 font-semibold">⚠️ No rating data returned</p>
              <p className="text-sm text-gray-600">
                Possible reasons:
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside ml-4">
                <li>API key is not configured</li>
                <li>Google Places API request failed</li>
                <li>Business not found in Google Places</li>
                <li>API returned invalid data</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Check server console logs for detailed error messages.
              </p>
            </div>
          )}
        </div>

        {/* API Route Test */}
        <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">API Route Test (/api/google-places-rating)</h2>
          {apiResponse?.error ? (
            <div className="space-y-2">
              <p className="text-red-600 font-semibold">❌ Error:</p>
              <p className="text-sm text-red-600">{apiResponse.error}</p>
            </div>
          ) : apiResponse ? (
            <div className="space-y-2">
              <p><strong>Rating:</strong> <span className="text-2xl font-bold">{apiResponse.ratingValue}</span></p>
              <p><strong>Review Count:</strong> <span className="text-xl font-semibold">{apiResponse.reviewCount}</span></p>
              {!directRating && (
                <p className="text-sm text-yellow-600 mt-4">
                  ⚠️ Note: This might be using fallback values if API key is not configured or API failed.
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-600">No response</p>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">How to Check</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Open your browser's Developer Tools (F12)</li>
            <li>Go to the Console tab</li>
            <li>Look for log messages starting with 🔍, ✅, or ❌</li>
            <li>Check server logs in your terminal for detailed API responses</li>
            <li>If rating is null, verify GOOGLE_PLACES_API_KEY is set in your environment variables</li>
          </ol>
        </div>
      </div>
    </main>
  );
}

