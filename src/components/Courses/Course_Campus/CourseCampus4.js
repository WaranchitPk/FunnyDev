import React from "react";
import {Grid,Paper} from '@material-ui/core';
import {TitleCampus,ChartCampus} from '../';

const Campus_4 = ({data}) => (
  <Grid
    item sm={6}
    xs={12}>
    <Paper
      elevation={5}>
      <TitleCampus name='C4'/>
      <ChartCampus data={data}/>
    </Paper>
  </Grid>
);

export default Campus_4;
