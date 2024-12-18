"use client";

import "./effects.css";
import { DatabaseIcon, LockIcon, ScaleIcon } from "lucide-react";

export default function Banner() {
  const dbFeatures = [
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
  ];

  return (
    <>
      <header className="flex-grow flex items-center justify-center text-center px-4 sm:px-6 py-10 md:py-12">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Powerful Backend Infrastructure, Zero Hassle
          </h1>
          <p className="subtitle text-md sm:text-lg md:text-xl text-gray-400 mb-6">
            Nebula provides scalable, secure, and lightning-fast backend
            services to help developers focus on building amazing products.
          </p>
          <div className="flex flex-col gap-4 sm:gap-12 items-center justify-center sm:flex-row">
            <button className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:from-purple-500 hover:to-violet-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white text-gray-200 px-6 py-3 rounded-md hover:text-purple-500 hover:border-purple-500 transition-all duration-300">
              Visit Documentation
            </button>
          </div>
        </div>
      </header>

      <section id="features" className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-400 mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-400">
            Nebula offers comprehensive backend solutions for modern
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dbFeatures.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-800 hover:border-purple-500 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-4 text-purple-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
