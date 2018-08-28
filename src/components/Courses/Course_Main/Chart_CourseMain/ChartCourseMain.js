import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Cell
} from "recharts";

const colorsBar = ["#B91D21", "#4055B2", "#3A9619", "#203A0B", "#503307", "#7D0F7F"];
const ChartCourseMain = ({ dataT }) => {
  console.log(dataT)
  return (
    <div>
      {
        dataT && (
          <ResponsiveContainer
            width='100%'
            aspect={2}>
            <BarChart data={dataT.data.resultData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar
                dataKey="value"
                fill="#F08080">
                {
                  dataT.data.resultData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colorsBar[index % 20]}/>
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )
      }
    </div>
  );
};

export default ChartCourseMain;
