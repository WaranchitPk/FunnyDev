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
const styles = {
  root: {
    marginTop: "2%"
  }
};
const nameCampus = 'ส่วนกลาง(เชียงใหม่)';
const CampusChiangmai = ({ data,dataTrainCM }) => (
  <div>
    <Grid container justify="center" className='mainChart'>
      <Grid
        item sm={11}
        xs={12}>
        <Paper
          elevation={5}>
          <TitleCampus name={nameCampus}/>
          <ChartCampus data={data}/>
        </Paper>
      </Grid>
    </Grid>
    <Grid container justify="center">
      {
        dataTrainCM !== null && dataTrainCM !== undefined ? (
          <Paper elevation={5} style={styles.root}>
            <Typography align="center" variant="title">อัตราการเติบโตของจำนวนรายวิชาในเขตพื้นที่เชียงใหม่</Typography>
            <ComposedChart width={800} height={600} data={dataTrainCM.data.result}
            >
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
    </Grid>
    <div className='paperShowResult'>
      <ResultText
        dataT={data}
        nameCampus={nameCampus}/>
    </div>
  </div>
);

export default CampusChiangmai;
