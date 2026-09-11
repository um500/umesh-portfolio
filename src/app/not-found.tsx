import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-mono text-accent">404</p>
      <h1 className="text-2xl font-bold text-text-primary">Page not found</h1>
      <p className="max-w-sm text-text-secondary">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Button href="/" className="mt-2">
        Back to Home
      </Button>
    </div>
  );
}
