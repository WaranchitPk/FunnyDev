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
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem
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
const yearSelect = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
const ShowTrainUser = ({ resultSumYear }) => {
  let result = [];
  if (resultSumYear !== null && resultSumYear !== undefined) {
    result = resultSumYear.data.result
  }
  return (
    <Grid container justify="center">
      {
        resultSumYear !== null && resultSumYear !== undefined ? (
          <div>
            {/*<Card>*/}
              {/*<CardContent>*/}
                {/*<FormControl>*/}
                 {/*ปีเริ่มต้น <Select*/}
                    {/*// value={this.state.age}*/}
                    {/*// onChange={this.handleChange}*/}
                    {/*// inputProps={{*/}
                    {/*//   name: 'age',*/}
                    {/*//   id: 'age-simple',*/}
                    {/*// }}*/}
                  {/*>*/}
                    {/*{*/}
                      {/*yearSelect.map(result => (*/}
                        {/*<div key={result}>*/}
                          {/*<MenuItem value={result}>{result}</MenuItem>*/}
                        {/*</div>*/}
                      {/*))*/}
                    {/*}*/}
                  {/*</Select>*/}
                {/*</FormControl>*/}
              {/*</CardContent>*/}
            {/*</Card>*/}
            <Paper elevation={5} style={styles.root}>
              <Typography align="center" variant="title">อัตราการเติบโตของจำนวนผู้เข้าชม</Typography>

              <ComposedChart width={800} height={600} data={result}
                             margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis dataKey="Year"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='CountYear' barSize={20} fill='#80DEEA' name="จำนวนผู้เข้าชมระบบ"/>
                <Line type='monotone' dataKey='CountYear' stroke='#F44336' name="อัตราการเติบโตของผู้เข้าชมระบบ"/>
              </ComposedChart>
            </Paper>
          </div>
        ) : (
          <CircularProgress size={25}/>
        )
      }
    </Grid>
  );
};


export default ShowTrainUser;
