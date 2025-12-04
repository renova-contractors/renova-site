import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-12 text-center first-component ">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Go back to Homepage
      </Link>
    </main>
  );
}
