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
  Label
} from "recharts";

// const data = [
//   {
//     mes: 1,
//     usuarios: 4,
//     totales:4
//   },
//   {
//     mes: 2,
//     usuarios: 3,
//     totales:7
//   },
//   {
//     mes: 2,
//     usuarios: 5,
//     totales:12

//   },
//   {
//     mes: 4,
//     usuarios: 8,
//     totales:20
//   },
//   {
//     mes: 5,
//     usuarios: 10,
//     totales:30
//   },
//   {
//     mes: 6,
//     usuarios: 12,
//     totales:42
//   }
// ];



export default function GrafUsuarios() {
  const dispatch: AppDispatch = useDispatch()
  const datos_grafusuarios:{users: number,  created: string}[] = useSelector((state: RootState) => state.datos_grafusuarios);

  useEffect(()=>{
    dispatch(actions.getUsuariosCampy())
  },[dispatch]) 

  return (
    <ComposedChart
      width={500}
      height={400}
      data={datos_grafusuarios}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="created" name="Mes">
      <Label value="Días" offset={2} position="bottom" />
      </XAxis>
      <YAxis label={{ value: 'Usuarios', angle: -90, position: 'insideLeft' }}>
      </YAxis>
      <Tooltip />
      <Line name= "Usuarios Totales" type="monotone" dataKey="users" stroke="#A4BE7B"   />
    </ComposedChart>
  );
}