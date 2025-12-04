"use client";

import { MarketInsight } from "@/lib/data";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line
} from "recharts";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export function DataChart({ data }: { data: MarketInsight[] }) {
  const chartData = data.map((market) => ({
    country: market.country,
    adoptionGrowth: market.growthRate,
    gdpGrowth: market.metrics.gdpGrowth,
    internetPenetration: market.metrics.internetPenetration,
    avgHouseholdIncome: market.metrics.avgHouseholdIncome
  }));

  return (
    <div className="h-96 w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CBD5F5" />
          <XAxis dataKey="country" tick={{ fill: "#334155", fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#334155", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            label={{ value: "%", angle: -90, position: "insideLeft", fill: "#64748B" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#334155", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            label={{ value: "Avg Income (USD)", angle: 90, position: "insideRight", fill: "#64748B" }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#0f172a", color: "#f8fafc", borderRadius: 12, border: "none" }}
            formatter={(value, name) => {
              if (name === "Avg Household Income") {
                return [formatter.format(Number(value)), name];
              }
              return [`${value}%`, name];
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar yAxisId="left" dataKey="adoptionGrowth" name="Adoption Growth" fill="#3a60ff" radius={[8, 8, 0, 0]} />
          <Bar yAxisId="left" dataKey="internetPenetration" name="Internet Penetration" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
          <Line yAxisId="left" type="monotone" dataKey="gdpGrowth" name="GDP Growth" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgHouseholdIncome"
            name="Avg Household Income"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
