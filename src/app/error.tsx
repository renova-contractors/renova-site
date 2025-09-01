"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error("Server error:", error);

    // Redirect to the `404` page for all errors
    router.replace("/not-found");
  }, [error, router]);

  return null; // No need to render anything, just redirect
}
