'use client'

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { format } from 'date-fns'
import { BalanceChartProps } from "./types"

export function BalanceChart({ data }: BalanceChartProps) {
  return (
    <Card className="bg-zinc-100 border-zinc-300">
      <CardHeader>
        <CardTitle className="text-black">Balance History</CardTitle>
        <CardDescription className="text-gray-800">Your balance trend over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            balance: {
              label: "Balance",
              color: "hsl(var(--chart-yellow))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <XAxis
                dataKey="date"
                stroke="#525252"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => format(new Date(value), 'MMM d')}
              />
              <YAxis
                stroke="#525252"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value / 1000}k`}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow">
                        <p className="text-yellow-500">{`₹${payload[0].value}`}</p>
                        <p className="text-zinc-400 text-sm">{format(new Date(payload[0].payload.date), 'MMM d, yyyy')}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="balance"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  style: { fill: "#EAB308", strokeWidth: 0 },
                }}
                style={{
                  stroke: "#EAB308",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

