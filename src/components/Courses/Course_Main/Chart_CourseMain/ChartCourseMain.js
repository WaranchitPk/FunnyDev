import React from "react";
import {ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts';

const ChartCourseMain = ({data}) => (
  <ResponsiveContainer
    width='100%'
    aspect={2}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar
        dataKey="uv"
        fill="#82ca9d"/>
    </BarChart>
  </ResponsiveContainer>
);

export default ChartCourseMain;
