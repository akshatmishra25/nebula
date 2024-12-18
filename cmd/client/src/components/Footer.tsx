"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t text-white py-4 px-3">
      <div className="px-3 flex gap-2 sm:gap-0 flex-col sm:flex-row justify-between sm:items-center">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl gradient-text font-bold">Nebula</h4>
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
