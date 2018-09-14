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

const UserViewDays = ({ dataChartDay }) => {
  let showData = "";
  let dataKeyXAxis = "";
  let dataBar = "";
  console.log("user view day", dataChartDay);
  if (dataChartDay !== undefined && dataChartDay !== null) {
    showData = dataChartDay.data.result;
    dataKeyXAxis = "day";
    dataBar = "countDay";
    //  {day: 1, countDay: 507}
  }
  return (
    <div>
      <ResponsiveContainer width='100%' aspect={2}>
        <BarChart data={showData}>
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey={dataKeyXAxis}/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey={dataBar} fill='#82ca9d' name="จำนวน"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserViewDays;
