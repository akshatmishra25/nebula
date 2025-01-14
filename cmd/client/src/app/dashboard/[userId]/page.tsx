"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function UserDashboardPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userDashboardPageParams = use(params);
  console.log(userDashboardPageParams.userId);

  const projects = [
    {
      id: 1,
      name: "E-commerce API",
      status: "Active",
      lastDeployed: "2h ago",
    },
    {
      id: 2,
      name: "Auth Service",
      status: "Active",
      lastDeployed: "1d ago",
    },
    {
      id: 3,
      name: "Analytics Backend",
      status: "Maintenance",
      lastDeployed: "5h ago",
    },
  ];

  const num = Math.floor(Math.random() * 120);

  return (
    <div className="space-y-2 bg-gradient-to-l from-black via-gray-900 to-black min-h-screen">
      <div className="border-b border-slate-700 flex w-full px-1 justify-between mb-8">
        <Link href={"/"} className="flex items-center">
          <Image
            width={50}
            height={50}
            src="/nebula.png"
            alt="Nebula-logo"
            className="rounded-full"
          />
          <p className="text-xl gradient-text font-semibold">Nebula</p>
        </Link>

        {/* User Image  */}
        <div className="flex items-center pr-2">Img</div>
      </div>

      <div className="pt-2 px-6">
        <div className="flex justify-between items-center mb-8 py-2">
          <div>
            <h1 className="text-3xl font-bold text-purple-300 mb-2">
              Projects Dashboard
            </h1>
            <p className="text-purple-200 opacity-80">
              Manage your backend services
            </p>
          </div>
          <button
            // onClick={() => setShowNewProject(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200"
          >
            + New Project
          </button>
        </div>

        {/* User's Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={`/projects/${num}`}
              key={project.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-purple-900 hover:border-purple-600 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-purple-300">
                  {project.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    project.status === "Active"
                      ? "bg-green-900 text-green-300"
                      : "bg-yellow-900 text-yellow-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-purple-200">Last Deployed</span>
                <span className="text-purple-300">{project.lastDeployed}</span>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 rounded transition-colors duration-200">
                  Manage
                </button>
                <button className="px-3 py-1 text-sm border border-purple-600 hover:bg-purple-600/20 rounded transition-colors duration-200">
                  Settings
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
