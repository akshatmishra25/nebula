"use client";

import Head from "next/head";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-l from-black via-gray-900 to-black">
      <Head>
        <title>Nebula - Backend as a Service</title>
      </Head>
      <header className="w-full flex flex-col gap-2 items-center">
        <Navbar />
        <Banner />
      </header>
      <Footer />
    </div>
  );
}
