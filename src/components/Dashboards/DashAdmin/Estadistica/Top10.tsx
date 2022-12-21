import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Label
} from "recharts";

const data = [
  {
    camping: "Camping A",
    reservas: 50.000,
  }, 
  {
    camping: "Camping B",
    reservas: 42.000,
  },
  {
    camping: "Camping C",
    reservas: 38.000,
  },
  {
    camping: "Camping D",
    reservas: 33.000,
  },
  {
    camping: "Camping E",
    reservas: 31.000,
  },
  {
    camping: "Camping F",
    reservas: 29.000,
  }
];

export default function Top10() {
  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number">
      <Label value="Reservas" offset={2} position="bottom" />
      </XAxis>
      <YAxis dataKey="camping" type="category" scale="band" />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="reservas" barSize={20} fill="#5F8D4E" />
    </ComposedChart>
  );
}
