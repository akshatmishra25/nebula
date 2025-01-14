"use client";

import {
  Activity,
  Database,
  Users,
  Clock,
  Cpu,
  HardDrive,
  BarChart3,
  Shield,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ApiCallData,
  ChartCardProps,
  RecentActivity,
  ResourceUsage,
  StatCardProps,
  UserGrowthData,
  ProjectStats,
} from "@/types/ChartTypes";

const ProjectDashboard: React.FC = () => {
  const stats: ProjectStats = {
    apiCalls: "1.2M",
    storage: "850GB",
    users: "12.5K",
    uptime: "99.99%",
    databases: "8",
    functions: "24",
    responseTime: "45ms",
    securityScore: "A+",
  };

  const apiCallsData: ApiCallData[] = [
    { name: "Mon", calls: 4000 },
    { name: "Tue", calls: 3000 },
    { name: "Wed", calls: 5000 },
    { name: "Thu", calls: 2780 },
    { name: "Fri", calls: 4890 },
    { name: "Sat", calls: 2390 },
    { name: "Sun", calls: 3490 },
  ];

  const userGrowthData: UserGrowthData[] = [
    { name: "Week 1", users: 500 },
    { name: "Week 2", users: 800 },
    { name: "Week 3", users: 1200 },
    { name: "Week 4", users: 1800 },
    { name: "Week 5", users: 2500 },
    { name: "Week 6", users: 3500 },
  ];

  const resourceUsage: ResourceUsage[] = [
    { name: "CPU", percentage: 78 },
    { name: "Memory", percentage: 65 },
    { name: "Network", percentage: 82 },
  ];

  const recentActivities: RecentActivity[] = [
    {
      id: 1,
      message: "Database migration completed successfully",
      timestamp: "2m ago",
    },
    { id: 2, message: "New API endpoint deployed", timestamp: "5m ago" },
    { id: 3, message: "Backup completed", timestamp: "10m ago" },
  ];

  const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value }) => (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-transparent hover:border-purple-500">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-500 bg-opacity-20 rounded-lg">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <p className="text-purple-300 text-sm">{title}</p>
          <p className="text-white text-2xl font-semibold mt-1">{value}</p>
        </div>
      </div>
    </div>
  );

  const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-white mb-6">{title}</h2>
      <div className="h-64">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-l from-black via-gray-900 to-black">
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

      <div className="w-full py-3 px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Project Dashboard</h1>
            <p className="text-purple-300 mt-2">
              Real-time metrics and performance insights
            </p>
          </div>
          <div className="flex items-center gap-2 bg-purple-500 bg-opacity-20 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-purple-200">All Systems Operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Activity} title="API Calls" value={stats.apiCalls} />
          <StatCard
            icon={HardDrive}
            title="Storage Used"
            value={stats.storage}
          />
          <StatCard icon={Users} title="Active Users" value={stats.users} />
          <StatCard icon={Clock} title="Uptime" value={stats.uptime} />
          <StatCard icon={Database} title="Databases" value={stats.databases} />
          <StatCard
            icon={Cpu}
            title="Cloud Functions"
            value={stats.functions}
          />
          <StatCard
            icon={BarChart3}
            title="Avg Response Time"
            value={stats.responseTime}
          />
          <StatCard
            icon={Shield}
            title="Security Score"
            value={stats.securityScore}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="API Calls Over Time">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={apiCallsData}>
                <defs>
                  <linearGradient id="apiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#E9D5FF" />
                <YAxis stroke="#E9D5FF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "0.5rem",
                    color: "#E9D5FF",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="calls"
                  stroke="#A855F7"
                  fillOpacity={1}
                  fill="url(#apiGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="User Growth Trend">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <XAxis dataKey="name" stroke="#E9D5FF" />
                <YAxis stroke="#E9D5FF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "0.5rem",
                    color: "#E9D5FF",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#A855F7"
                  strokeWidth={2}
                  dot={{ fill: "#A855F7" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4">
              Resource Usage
            </h2>
            <div className="space-y-4">
              {resourceUsage.map((resource) => (
                <div key={resource.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">{resource.name}</span>
                    <span className="text-purple-400">
                      {resource.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${resource.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 text-purple-200"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <p className="text-sm">{activity.message}</p>
                  <span className="text-xs text-purple-400 ml-auto">
                    {activity.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
