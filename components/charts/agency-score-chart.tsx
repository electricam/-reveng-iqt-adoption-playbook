"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type AgencyScore = {
  agency: string;
  score: number;
};

export function AgencyScoreChart({ data }: { data: AgencyScore[] }) {
  return (
    <div className="h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: -24 }}>
          <CartesianGrid vertical={false} stroke="#cbd5e1" strokeDasharray="3 3" />
          <XAxis
            dataKey="agency"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 12 }}
          />
          <YAxis
            domain={[0, 100]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
            contentStyle={{
              borderRadius: "16px",
              borderColor: "#cbd5e1",
              boxShadow: "0 20px 60px -30px rgba(15, 23, 42, 0.35)",
            }}
          />
          <Bar dataKey="score" fill="#2563eb" radius={[10, 10, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
