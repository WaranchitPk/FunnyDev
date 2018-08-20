import React from 'react';
import {
  CircularProgress,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import Loadable from 'react-loadable';
import '../../../styles/course.css';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const TitleCampus = Loadable({
  loader: () => import('./Title_CourseCampus/TitleCourse'),
  loading: () => null,
});
const ChartCampus = Loadable({
  loader: () => import('./Chart_CourseCampus/ChartCourseCampus'),
  loading: () => null,
});
const ResultText = Loadable({
  loader: () => import('./ShowResultText/resultText'),
  loading: () => null,
});

const nameCampus = 'ลำปาง';
const CampusLampang = ({data,dataTrainLP}) => (
  <div>
    <Grid container justify="center" className='mainChart'>
      <Grid
        item sm={9}
        xs={12}>
        <Paper
          elevation={5}>
          <TitleCampus name={nameCampus}/>
          <ChartCampus data={data}/>
        </Paper>
      </Grid>
    </Grid>
    {
      dataTrainLP !== null && dataTrainLP !== undefined ? (
        <Paper elevation={5} >
          <Typography align="center" variant="title">จำนวนรายวิชาของทุกเขตพื้นที่</Typography>
          <ComposedChart width={600} height={400} data={dataTrainLP.data.result}
                         margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey='countCourse' barSize={20} fill='#80DEEA'/>
            <Line type='monotone' dataKey='countCourse' stroke='#F44336'/>
          </ComposedChart>
        </Paper>
      ) : (
        <CircularProgress size={25}/>
      )
    }
    <div className='paperShowResult'>
      <ResultText
        dataT={data}
        nameCampus={nameCampus}/>
    </div>
  </div>
);

export default CampusLampang;
