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
import {CircularProgress,Typography} from "@material-ui/core";

const colorsBar = ["#B91D21", "#4055B2", "#3A9619", "#203A0B", "#503307", "#7D0F7F"];
const style = {
  LoadingData: {
    marginTop: '2%'
  }
}
const ChartCourseMain = ({ dataT }) => {
  return (
    <div>
      {
      dataT !== null && dataT !== undefined ?
          (
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
                          fill="#F08080"
                          name="จำนวนรายวิชา">
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
          ) :
            <Typography align={"center"} style={style.LoadingData}><CircularProgress size={100}/></Typography>
      }
    </div>
  );
};

export default ChartCourseMain;
