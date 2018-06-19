import React from "react";
import {Grid,Paper} from '@material-ui/core';
import {TitleMain,ChartMain,BtExport} from '../';
const MainCourse = ({data,btState,Open,Close,stylesDash,dataT}) => (
  <Grid container style={stylesDash}>
    <Grid item sm={12} xs={12}>
      <Paper elevation={5}>
        <TitleMain />
        <BtExport
          Open={Open}
          Close={Close}
          btState={btState}/>
        <ChartMain
          data={data}
          dataT={dataT}/>
      </Paper>
    </Grid>
  </Grid>
);

export default MainCourse;
