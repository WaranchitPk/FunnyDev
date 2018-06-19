import React from "react";
import { Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CourseBanner } from "../layout";
import {
  MainCourse,
  CourseCampus1,
  CourseCampus2,
  CourseCampus3,
  CourseCampus4,
  CourseCampus5,
  CourseCampus6
} from "./Courses";

const styles = {
  dashboardAllCampus: {
    marginTop: "5%"
  },
  campusSelect: {
    textAlign: "center"
  }
};

const Course = ({ cate, anchorEl, OpenPopup, ClosePopup, ExToPng, ExToJpg, Campus: { dataT }, Faculty: { dataFaculty } }) => (
  <div>
    <CourseBanner/>
    {/*Main Course All Campus*/}
    <MainCourse
      dataT={dataT}
      btState={anchorEl}
      Open={OpenPopup}
      Close={ClosePopup}
      stylesDash={styles.dashboardAllCampus}/>
    {/*Course Each Campus*/}
    {
      dataFaculty && (
        <div>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>เขตพื้นที่เชียงราย และ ตาก</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid
                container
                style={styles.dashboardAllCampus}>
                <CourseCampus1 data={dataFaculty.data.resultFaculty.ChiangRai}/>
                <CourseCampus2 data={dataFaculty.data.resultFaculty.Tak}/>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>เขตพื้นที่น่าน และ พิษณุโลก</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid
                container
                style={styles.dashboardAllCampus}>
                <CourseCampus3 data={dataFaculty.data.resultFaculty.Nan}/>
                <CourseCampus4 data={dataFaculty.data.resultFaculty.PL}/>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>ส่วนกลาง และ เขตพื้นที่ลำปาง</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid
                container
                style={styles.dashboardAllCampus}>
                <CourseCampus5 data={dataFaculty.data.resultFaculty.ChiangMai}/>
                <CourseCampus6 data={dataFaculty.data.resultFaculty.LP}/>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    }
  </div>
);
export default Course;
