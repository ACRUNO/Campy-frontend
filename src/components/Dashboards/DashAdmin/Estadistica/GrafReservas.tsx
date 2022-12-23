import React from "react";
import { useDispatch, useSelector} from "react-redux";
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
  const datos_grafreservas:{reservas: number, total:number,  created: string}[] = useSelector((state: RootState) => state.datos_grafreservas);

  useEffect(()=>{
    dispatch(actions.getReservasCampy())
  },[dispatch]) 

  console.log(datos_grafreservas)

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
      <CartesianGrid stroke="#f5f5f5"/>
      <XAxis dataKey="created"  />
          <YAxis yAxisId="left" label={{ value: 'Cantidad de Reservas', angle: -90, position: 'insideBottomLeft' }}/>
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Monto Total de Reservas $', angle: 90, position: 'insideBottomRight' }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="reservas" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart>
  );
}



