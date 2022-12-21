import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  Label
} from "recharts";
import { VERDE, VERDE_OSCURO } from '../../../helpers/colors';

const data = [
  {
    mes: 1,
    usuarios: 4,
    totales:4
  },
  {
    mes: 2,
    usuarios: 3,
    totales:7
  },
  {
    mes: 3,
    usuarios: 5,
    totales:12

  },
  {
    mes: 4,
    usuarios: 8,
    totales:20
  },
  {
    mes: 5,
    usuarios: 10,
    totales:30
  },
  {
    mes: 6,
    usuarios: 12,
    totales:42
  }
];




export default function GrafReservas() {
  return (
    <ComposedChart
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
      <XAxis dataKey="mes">
      <Label value="Meses" offset={2} position="bottom" />
      </XAxis>
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" align="center" />
      <Bar name="Reservas" dataKey="usuarios" barSize={20} fill="#5F8D4E" />
      <Line name="Reservas Totales" type="monotone" dataKey="totales" stroke="#ff7300" />
    </ComposedChart>
  );
}