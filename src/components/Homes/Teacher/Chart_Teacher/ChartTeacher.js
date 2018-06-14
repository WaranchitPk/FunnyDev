import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const ChartTeacher = ({ data }) => (
  <ResponsiveContainer width='100%' aspect={2}>
    <BarChart
      data={data}
      id="teacherChart">
      <CartesianGrid strokeDasharray="3 3" id='1'/>
      <XAxis dataKey="uv"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="uv" fill="#8884d8"/>
    </BarChart>
  </ResponsiveContainer>
);

export default ChartTeacher;
