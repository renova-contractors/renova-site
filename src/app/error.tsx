"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-8">{error.message || "An unexpected error occurred"}</p>
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
