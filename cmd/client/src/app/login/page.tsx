"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBook, FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-6 w-full items-center justify-center p-2">
      <nav className="flex w-full px-1 justify-between items-center">
        <Link
          className="flex items-center"
          href="/"
          aria-label="Go to homepage"
        >
          <Image
            width={50}
            height={50}
            src="/nebula.png"
            alt="Nebula-logo"
            className="rounded-full"
          />
          <p className="text-xl gradient-text font-semibold text-white">
            Nebula
          </p>
        </Link>

        <Link
          className="flex p-1 gap-2 items-center justify-center text-white"
          href="/docs"
          aria-label="View documentation"
        >
          <FaBook size="16" />
          <span>Docs</span>
        </Link>
      </nav>
      <div className="shadow-lg shadow-purple-500 transition-all duration-150 p-6 rounded-2xl text-white w-full max-w-md">
        <div className="p-2 w-full mb-4">
          <p className="text-2xl font-bold">Welcome Back !!</p>
          <p className="text-sm text-purple-500">Login to your account</p>
        </div>
        <button
          className="flex w-full border p-3 rounded-3xl items-center justify-center gap-2 hover:border-gray-500 transition-all mb-6"
          aria-label="Sign up with GitHub"
        >
          <FaGithub size="20" />
          <span>Continue with GitHub</span>
        </button>
        <div className="w-full flex items-center gap-3 justify-center text-gray-400">
          <div className="w-full h-px bg-gray-700" />
          <p>or</p>
          <div className="w-full h-px bg-gray-700" />
        </div>
        <form className="mt-6 space-y-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@abc.com"
                required
                className="font-light bg-transparent text-white border-[0.5px] border-black hover:border-purple-500 rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
                required
                className="font-light bg-transparent text-white border-[0.5px] border-black hover:border-purple-500 rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-gradient-to-r from-violet-600 to-purple-500 font-bold text-white rounded-lg"
          >
            Log In
          </button>
        </form>
        <div className="flex gap-2 w-full mt-4 items-center justify-center">
          <p className="text-sm">New to our Platform?</p>
          <Link
            href="/signup"
            className="text-md text-purple-500 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
