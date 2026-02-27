import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl tracking-wider uppercase mb-6">404</h1>
        <h2 className="text-3xl tracking-wide uppercase mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-wide hover:bg-white/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
