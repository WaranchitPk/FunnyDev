import React from "react";
import {
  Bar,
  Area,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ComposedChart
} from "recharts";
import {
  Paper,
  Grid,
  CircularProgress,
  Typography
} from "@material-ui/core";

const arrShowDataTest = [
  {
    Year: 2010,
    CountYear: 1209
  },
  {
    Year: 2011,
    CountYear: 1284
  },
  {
    Year: 2012,
    CountYear: 1283
  },
  {
    Year: 2013,
    CountYear: 1726
  },
  {
    Year: 2014,
    CountYear: 1009
  },
  {
    Year: 2015,
    CountYear: 985
  },
  {
    Year: 2016,
    CountYear: 1029
  },
  {
    Year: 2017,
    CountYear: 4012
  },
  {
    Year: 2018,
    CountYear: 3688
  }
];
const styles = {
  root: {
    marginTop: "5%"
  }
};
const ShowTrainUser = ({dataTrainResult}) => (
  <Grid container justify="center">
    {
        dataTrainResult !== null && dataTrainResult !== undefined ? (
        <div style={styles.root}>
          <Typography align="center" variant="title">อัตราการเติบโตของจำนวนผู้เข้าใช้</Typography>

          <ComposedChart width={800} height={600} data={dataTrainResult.data.result}
                         margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey="year"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey='sumUser' barSize={20} fill='#80DEEA' name="จำนวนผู้เข้าใช้ระบบ"/>
            <Line type='monotone' dataKey='sumUser' stroke='#F44336' name="อัตราการเติบโตของผู้เข้าใช้ระบบ"/>
          </ComposedChart>
        </div>
      ) : (
        <CircularProgress size={25}/>
      )
    }
  </Grid>

);


export default ShowTrainUser;
