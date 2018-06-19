import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const ChartCourseMain = ({ data, dataT }) => (
  <div>
    {/*dataT && console.log("Data", dataT.data.resultData)*/}
    {
      dataT &&   (
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
              fill="#82ca9d"/>
          </BarChart>
        </ResponsiveContainer>
      )

    }
  </div>

);

export default ChartCourseMain;
