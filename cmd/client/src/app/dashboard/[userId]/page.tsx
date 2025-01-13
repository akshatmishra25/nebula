"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  Settings,
  Users,
  Database,
  Bell,
  Search,
  Server,
  Activity,
  Shield,
  HardDrive,
  ChevronDown,
  Zap,
  Menu,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

const performanceData = [
  { name: "00:00", value: 350 },
  { name: "04:00", value: 200 },
  { name: "08:00", value: 450 },
  { name: "12:00", value: 500 },
  { name: "16:00", value: 650 },
  { name: "20:00", value: 400 },
  { name: "24:00", value: 300 },
];

export default function UserDashboardPage({
  params,
}: {
  params: { userId: string };
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // console.log(params.userId);

  return (
    <div className="space-y-2 bg-gradient-to-l from-black via-gray-900 to-black">
      <div className="border-b border-slate-700 flex w-full px-1 justify-between">
        <div className="flex items-center">
          <Image
            width={50}
            height={50}
            src="/nebula.png"
            alt="Nebula-logo"
            className="rounded-full"
          />
          <p className="text-xl gradient-text font-semibold">Nebula</p>
        </div>

        {/* User Image  */}
        <div className="">Img</div>
      </div>

      <div className="flex w-full justify-between">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-40" : "w-18"
          } text-white transition-all duration-300 border-r-2 border-gray-700 -mt-[6px]`}
        >
          <nav className="mt-6 flex flex-col gap-2 pr-2">
            {[
              { icon: BarChart3, label: "Dashboard", active: true },
              { icon: Database, label: "Databases" },
              { icon: Server, label: "Services" },
              { icon: Users, label: "Team" },
              { icon: Settings, label: "Settings" },
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`flex items-center rounded-md px-4 py-3 space-x-3 
                ${
                  item.active
                    ? "bg-purple-600"
                    : "hover:border hover:border-purple-800"
                }`}
              >
                <item.icon size={20} />
                {isSidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center border border-gray-600 hover:border-purple-400 rounded-md px-3 py-2 w-64">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-full"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <div className="flex items-center space-x-2">
                  {/* <img
                    src="/api/placeholder/32/32"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  /> */}
                  <span className="font-medium">John Doe</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                {
                  icon: Activity,
                  label: "API Requests",
                  value: "2.4M",
                  change: "+12%",
                  color: "text-emerald-500",
                },
                {
                  icon: Database,
                  label: "Database Size",
                  value: "1.2 TB",
                  change: "+8%",
                  color: "text-blue-500",
                },
                {
                  icon: Shield,
                  label: "Security Score",
                  value: "98/100",
                  change: "+2%",
                  color: "text-indigo-500",
                },
                {
                  icon: HardDrive,
                  label: "Storage Used",
                  value: "84%",
                  change: "+5%",
                  color: "text-purple-500",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="border border-gray-500 hover:border-purple-400 rounded-lg shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2 rounded-lg ${card.color} bg-opacity-10`}
                    >
                      <card.icon size={24} className={card.color} />
                    </div>
                    <span className="text-green-500 text-sm font-medium">
                      {card.change}
                    </span>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    {card.label}
                  </h3>
                  <p className="text-2xl font-bold mt-1">{card.value}</p>
                </div>
              ))}
            </div>

            {/* Performance Chart */}
            <div className="rounded-lg shadow p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">API Performance</h2>
                <select className="border bg-transparent rounded-md px-3 py-1 text-sm">
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      dot={{ fill: "#4F46E5", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      type: "Database backup completed",
                      time: "2 minutes ago",
                      status: "success",
                    },
                    {
                      type: "New API endpoint deployed",
                      time: "1 hour ago",
                      status: "success",
                    },
                    {
                      type: "Security scan completed",
                      time: "3 hours ago",
                      status: "warning",
                    },
                    {
                      type: "System update installed",
                      time: "5 hours ago",
                      status: "success",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.status === "success"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        />
                        <span className="font-medium">{activity.type}</span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
