import React from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const ChartDashBoard = ({dataChartMonth }) => {
  let a = [];
  if (dataChartMonth !== undefined && dataChartMonth !== null) {
    a = dataChartMonth.data.result;
  }
  return (
    <ResponsiveContainer width='100%' aspect={2}>
      <BarChart data={a}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey='month'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='countMonth' fill='#82ca9d'/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartDashBoard;
