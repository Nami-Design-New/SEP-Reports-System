"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "july", desktop: 237, mobile: 120 },
  { month: "aug", desktop: 73, mobile: 190 },
  { month: "sep", desktop: 209, mobile: 130 },
  { month: "oct", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartLineDots() {
  return (
    <Card className="pt-12  border-none shadow-none ">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-full p-0">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <YAxis tickLine={false} axisLine={false} />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="#0d5c87"
                strokeWidth={2}
                dot={{
                  fill: "#0d5c87",
                }}
                activeDot={{
                  r: 6,
                  fill: "#0d5c80",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
