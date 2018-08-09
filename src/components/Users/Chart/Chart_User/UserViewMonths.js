import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import Loadable from "react-hot-loader";


const UserViewMonths = ({ dataChartMonth }) => {
  let showData = "";
  // let dataKeyXAxis = "";
  // let dataBar = "";
  if (dataChartMonth !== undefined && dataChartMonth !== null) {
    console.log("dataMonth", dataChartMonth.data.result);
    showData = dataChartMonth.data.result;
    // dataKeyXAxis = "month";
    // dataBar = "countMonth";
    //  {countMonth: 73760, month: 1}
  }
  // if (dataChartDay !== undefined && dataChartDay !== null) {
  //   console.log("dataChartDay", dataChartDay.data.result);
  //   showData = dataChartDay.data.result;
  //   dataKeyXAxis = "day";
  //   dataBar = "countDay";
  //   //  {day: 1, countDay: 507}
  // }
  return (
    <ResponsiveContainer width='100%' aspect={2}>
      <BarChart data={showData}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="countMonth" fill='#82ca9d'/>
      </BarChart>
    </ResponsiveContainer>

  );
};

export default UserViewMonths;
