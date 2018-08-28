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

const styles = {
  root: {
    marginTop: "5%"
  }
};
const arrShowDataTest = [
  {
    Year: 2010,
    CountYear: 120900
  },
  {
    Year: 2011,
    CountYear: 128400
  },
  {
    Year: 2012,
    CountYear: 128370
  },
  {
    Year: 2013,
    CountYear: 172640
  },
  {
    Year: 2014,
    CountYear: 100980
  },
  {
    Year: 2015,
    CountYear: 98570
  },
  {
    Year: 2016,
    CountYear: 102980
  }
];
const ShowTrainUser = ({ resultSumYear }) => {
  let result = [];
  if (resultSumYear !== null && resultSumYear !== undefined) {
    result = result.concat(arrShowDataTest, resultSumYear.data.result);
  }

  return (
    <Grid container justify="center">
      {
        resultSumYear !== null && resultSumYear !== undefined ? (
          <Paper elevation={5} style={styles.root}>
            <Typography align="center" variant="title">อัตราการเติบโตของจำนวนผู้เข้าชม</Typography>

            <ComposedChart width={800} height={600} data={result}
                           margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid stroke='#f5f5f5'/>
              <XAxis dataKey="Year"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey='CountYear' barSize={20} fill='#80DEEA'/>
              <Line type='monotone' dataKey='CountYear' stroke='#F44336'/>
            </ComposedChart>
          </Paper>
        ) : (
          <CircularProgress size={25}/>
        )
      }
    </Grid>
  );
};


export default ShowTrainUser;
