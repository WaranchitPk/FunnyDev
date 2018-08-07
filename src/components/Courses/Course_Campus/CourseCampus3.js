import React from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import Loadable from 'react-loadable';
import '../../../styles/course.css';

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

const nameCampus = 'น่าน';
const CampusNan = ({ data }) => (
  <div>
    <Grid container justify="center" className='mainChart'>
      <Grid
        item sm={6}
        xs={12}>
        <Paper
          elevation={5}>
          <TitleCampus name={nameCampus}/>
          <ChartCampus data={data}/>
        </Paper>
      </Grid>
    </Grid>
    <div className='paperShowResult'>
      <ResultText
        dataT={data}
        nameCampus={nameCampus}/>
    </div>
  </div>
);

export default CampusNan;
