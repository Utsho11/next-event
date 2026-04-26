"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  {
    name: "January",
    sells: 2400,
  },
  {
    name: "February",
    sells: 1398,
  },
  {
    name: "March",
    sells: 5800,
  },
  {
    name: "April",
    sells: 1000,
  },
  {
    name: "May",
    sells: 0,
  },
  {
    name: "June",
    sells: 0,
  },
  {
    name: "July",
    sells: 0,
  },
  {
    name: "August",
    sells: 0,
  },{
    name: "September",
    sells: 0,
  },
  {
    name: "October",
    sells: 0,
  }
];

export default function PerformanceOverview() {
  return (
    <Card className="h-full rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Performance Overview</CardTitle>
        <p className="text-sm text-muted-foreground">
          Ticket sales growth over recent events
        </p>
      </CardHeader>

      <CardContent>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sells"
            fill="#8884d8d3"
            activeBar={{ fill: "#8884d8", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
          />

          <RechartsDevtools />
        </BarChart>
      </CardContent>
    </Card>
  );
}
