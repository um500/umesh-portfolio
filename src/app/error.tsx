"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <h1 className="text-2xl font-bold text-text-primary">Something went wrong</h1>
      <p className="max-w-sm text-text-secondary">
        The page hit an unexpected error. Try again, or head back to the homepage.
      </p>
      <div className="mt-2 flex gap-3">
        <button
          onClick={reset}
          className="rounded-full border border-accent/50 px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Try Again
        </button>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
