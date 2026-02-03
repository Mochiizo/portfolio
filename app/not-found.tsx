'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-sky-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6">
        Oups ! Page non trouvée
      </h2>
      <p className="text-center text-gray-700 mb-6 max-w-md">
        La page que vous cherchez n’existe pas ou a été déplacée.
        Revenez à l’accueil pour continuer à explorer le site.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
