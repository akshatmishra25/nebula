"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { DatabaseIcon, LockIcon, ScaleIcon } from "lucide-react";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Nebula - Backend as a Service</title>
      </Head>
      <header className="w-full bg-black opacity-80">
        <Navbar />
        <Banner />
      </header>
      {/* <main className="flex flex-col bg-black items-center p-8">
        <h2 className="text-lg text-center max-w-lg">
          Nebula is a powerful open-source backend-as-a-service platform to
          streamline your development process.
        </h2>
      </main> */}
      <section id="features" className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-gray-600">
            Nebula offers comprehensive backend solutions for modern
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <DatabaseIcon className="text-blue-600" size={48} />,
              title: "Flexible Database",
              description:
                "NoSQL and relational databases with instant scaling and automatic indexing.",
            },
            {
              icon: <LockIcon className="text-green-600" size={48} />,
              title: "Advanced Security",
              description:
                "Enterprise-grade encryption, authentication, and real-time threat monitoring.",
            },
            {
              icon: <ScaleIcon className="text-white" size={48} />,
              title: "Auto Scaling",
              description:
                "Intelligent infrastructure that automatically adapts to your application's needs.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-black hover:border-purple-500 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
