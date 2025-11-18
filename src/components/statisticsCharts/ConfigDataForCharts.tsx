import { ChartConfig } from "@/components/ui/chart";

export const chartData1 = [
  { browser: "chrome", visitors: 275, fill: "#3b82f6" },
  { browser: "safari", visitors: 200, fill: "#00a676" },
  { browser: "firefox", visitors: 187, fill: "gray" },
];

export const chartConfig1 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export const chartData2 = [
  { browser: "chrome", visitors: 275, fill: "orange" },
  { browser: "safari", visitors: 10, fill: "gray" },
];

export const chartConfig2 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
