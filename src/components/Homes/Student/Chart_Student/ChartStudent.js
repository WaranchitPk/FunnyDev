import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const ChartStudent = ({ data }) => (
  <ResponsiveContainer width='100%' aspect={2}>
    <BarChart width={200} height={100} data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="uv"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="uv" fill="#8884d8"/>
    </BarChart>
  </ResponsiveContainer>
);

export default ChartStudent;
