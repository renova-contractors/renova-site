import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative pt-[300px]">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist or an error occurred.</p>
      <Link href="/">
        Go back to Homepage
      </Link>
    </main>
  );
}
