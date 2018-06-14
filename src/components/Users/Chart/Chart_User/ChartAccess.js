import React from "react";
import { Bar, BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ChartAccess = ({data}) => (
  <ResponsiveContainer width='100%' aspect={3}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="value" fill="#82ca9d"/>
    </BarChart>
  </ResponsiveContainer>
);

export default ChartAccess;
