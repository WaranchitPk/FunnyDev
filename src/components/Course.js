import React from "react";
import { Grid } from "@material-ui/core";
import { CourseBanner } from "../layout";
import { MainCourse, CourseCampus1, CourseCampus2, CourseCampus3, CourseCampus4 } from "./Courses";
const styles = {
  dashboardAllCampus: {
    marginTop: "5%"
  },
  campusSelect: {
    textAlign: "center"
  }
};

const Course = ({ stat: { data }, fStat: { Fa1, Fa2, Fa3, Fa4 }, cate, anchorEl, OpenPopup, ClosePopup, ExToPng, ExToJpg,Campus: {dataT}}) => (
  <div>
    <CourseBanner/>
    {/*Main Course All Campus*/}
    <MainCourse
      dataT={dataT}
      data={data}
      btState={anchorEl}
      Open={OpenPopup}
      Close={ClosePopup}
      stylesDash={styles.dashboardAllCampus}/>
    {/*Course Each Campus*/}
    <Grid
      container
      style={styles.dashboardAllCampus}>
      <CourseCampus1 data={Fa1}/>
      <CourseCampus2 data={Fa2}/>
    </Grid>
    <Grid
      container
      style={styles.dashboardAllCampus}>
      <CourseCampus3 data={Fa3}/>
      <CourseCampus4 data={Fa4}/>
    </Grid>
  </div>
);
export default Course;
