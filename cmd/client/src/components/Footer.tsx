import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t text-white py-6 px-4">
      <div className="px-3 mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-2xl gradient-text font-bold mb-2">Nebula</h4>
          <p className="text-gray-400">
            © 2024 Nebula Technologies. All rights reserved.
          </p>
        </div>
        <div className="space-x-4">
          <Link
            href="/privacy"
            className="text-purple-400 hover:underline hover:text-purple-500"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-purple-400 hover:underline hover:text-purple-500"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-purple-400 hover:underline hover:text-purple-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
