import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { useEffect } from "react";
import * as actions from "../../../../actions/Dash.admin.action";
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


export default function Top5() {
  const dispatch: AppDispatch = useDispatch()

  const datos_graftop: { nombre_camping: string, cant_reservas: number }[] = useSelector((state: RootState) => state.datos_graftop);

  useEffect(() => {
    dispatch(actions.getMasreservados())
  }, [dispatch])

  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={datos_graftop.slice(0, 5)}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" interval={1}>
        <Label value="Reservas" offset={2} position="bottom" />
      </XAxis>
      <YAxis dataKey="nombre_camping" type="category" fontSize={14} />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="cant_reservas" barSize={20} fill="#5F8D4E" />
    </ComposedChart>
  );
}
