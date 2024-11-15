"use client";

import Head from "next/head";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="w-full bg-center grayscale hover:grayscale-0">
      <Head>
        <title>Nebula - Backend as a Service</title>
      </Head>
      <header className="w-full bg-black opacity-80">
        <Navbar />
        <Banner />
      </header>
      <main className="flex flex-col bg-black items-center p-8">
        <h2 className="text-lg text-center max-w-lg">
          Nebula is a powerful open-source backend-as-a-service platform to
          streamline your development process.
        </h2>
      </main>
    </div>
  );
}
