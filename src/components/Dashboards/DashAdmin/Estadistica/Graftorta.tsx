import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { VERDE, VERDE_CLARO, VERDE_OSCURO } from '../../../helpers/colors';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../../store/index';
import { useEffect } from "react";
import * as actions from "../../../../actions/Dash.admin.action";
import { Typography, Box } from "@mui/material";


export default function Torta() {
  const dispatch: AppDispatch = useDispatch()

  const datos_graftorta: { provincias: string, cant_campings: number }[] = useSelector((state: RootState) => state.datos_graftorta);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const calculartotal = (props: { provincias: string, cant_campings: number }[]) => {
    let total = 0
    for (let i = 0; i < datos_graftorta.length; i++) {
      total = total + datos_graftorta[i].cant_campings
    }
    return total
  }


  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.provincias}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#285430"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill="#285430"
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${payload.cant_campings} campings`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  useEffect(() => {
    dispatch(actions.getCampsxprov())
  }, [dispatch])

  return (
    <Box sx={{ align: "center", pl: 2 }}>
      <PieChart width={510} height={380} >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={datos_graftorta}
          cx={250}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#A4BE7B"
          dataKey="cant_campings"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
      <Typography align="center">Total de campings: {calculartotal(datos_graftorta)}</Typography>
    </Box>
  );
}