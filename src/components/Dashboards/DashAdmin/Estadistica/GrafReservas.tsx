import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { useEffect } from "react";
import * as actions from "../../../../actions/Dash.admin.action";
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
  Label,
  LineChart
} from "recharts";
import { VERDE, VERDE_OSCURO } from '../../../helpers/colors';


export default function GrafReservas() {
  const dispatch: AppDispatch = useDispatch()
  const datos_grafreservas: { reservas: number, total: number, created: string }[] = useSelector((state: RootState) => state.datos_grafreservas);

  useEffect(() => {
    dispatch(actions.getReservasCampy())
  }, [dispatch])


  return (
    <LineChart
      width={500}
      height={400}
      data={datos_grafreservas}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="created" />
      <YAxis yAxisId="left" stroke="#285430" label={{ value: 'Cantidad de Reservas', angle: -90, position: 'insideBottomLeft' }} />
      <YAxis type="number" yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Monto Total de Reservas ($)', angle: 90, position: 'insideBottomRight', offset: - 10 }} />
      <Tooltip />
      {/* <Legend /> */}
      <Line yAxisId="left" type="monotone" dataKey="reservas" stroke="#285430" overlineThickness="200" />
      <Line yAxisId="right" type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart>
  );
}



