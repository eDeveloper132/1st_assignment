// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-4xl font-semibold text-gray-800 mt-4">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mt-2">
                Sorry, the page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-gray-600 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}
