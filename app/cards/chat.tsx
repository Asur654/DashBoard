"use client"
import Steps from "./steps"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

export const description = "A radial chart with text"

const chartData = [
  { browser: "safari", visitors: 85, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#0ea5e9",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <div>
      <Card className="flex flex-col rounded-2xl text-start md:text-center shadow-sm border transition-transform duration-200 hover:scale-105">
        <CardHeader className="items-center text-center pb-2">
          <CardTitle>Account Progress</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto w-[200px] h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={450}
              endAngle={180}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].visitors.toLocaleString()}%
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <hr className="border-gray-300" />
      <Steps />
    </div>
  )
}

export default Chart
