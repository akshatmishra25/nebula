"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";


var proj: Array<String> = ["blogApp"];
export default function Home() {
  return (
    
    <div className="w-full bg-center grayscale hover:grayscale-0">
      <Head>
        <title>Nebula - Backend as a Service</title>
      </Head>
      <header className="w-full bg-black opacity-80">
        <Navbar />
        
      </header>
      <main className="flex flex-col bg-black items-center p-8">
        {proj.length > 0 && <div>
            <ul className="hidden lg:inline-flex items-center gap-3 uppercase text-md font-semibold">
          {proj.map((project, index) => {
            const text = project; // Destructure key-value pair

            return (
              <li key={index} className="hover:scale-105 cursor-pointer text-white">
                <Link href='/' target="_blank" rel="noopener noreferrer">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul></div>}
        <div className="flex items-center justify-center gap-3">
          <h3>Start something fresh right now</h3>
          <button className="p-4 bg-gradient-to-r from-purple-500 via-blue-500 to-violet-600 font-bold text-white rounded-lg
          [background-size:300%] animate-moving-gradient">
            Create Project
        </button>
        </div>
      </main>
    </div>
  );
}
