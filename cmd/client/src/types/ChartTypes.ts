import { LucideIcon } from "lucide-react";

// Types for chart data
export interface ApiCallData {
  name: string;
  calls: number;
}

export interface UserGrowthData {
  name: string;
  users: number;
}

export interface StorageData {
  name: string;
  value: number;
}

export interface ResourceUsage {
  name: string;
  percentage: number;
}

export interface RecentActivity {
  id: number;
  message: string;
  timestamp: string;
}

// Component Props Types
export interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

// Types for statistics
export interface ProjectStats {
  apiCalls: string;
  storage: string;
  users: string;
  uptime: string;
  databases: string;
  functions: string;
  responseTime: string;
  securityScore: string;
}
