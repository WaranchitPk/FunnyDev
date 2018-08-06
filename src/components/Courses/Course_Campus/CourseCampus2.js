import React from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import {
  TitleCampus,
  ChartCampus,
} from "../";
import ResultText from './ShowResultText/resultText';
import '../../../styles/course.css';

const nameCampus = 'ตาก';
const CampusTak = ({data}) => (
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

export default CampusTak;
