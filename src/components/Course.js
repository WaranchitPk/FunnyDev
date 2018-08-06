import React from "react";
import {
  Tab, Tabs,
  AppBar
} from "@material-ui/core";

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
  dashboard: {
    marginTop: "3%"
  },
  campusSelect: {
    textAlign: "center"
  }
};

const Course = ({
                  cate,
                  anchorEl,
                  OpenPopup,
                  ClosePopup,
                  Campus: { dataT },
                  Faculty: { dataFaculty },
                  changeTab,
                  valueTabs
                }) => (
  <div>
    <CourseBanner/>
    <AppBar position="static">
      <Tabs
        value={valueTabs}
        onChange={changeTab}>
        <Tab label="รวมทุกเขตพื้นที่"/>
        <Tab label="เขตพื้นที่เชียงราย"/>
        <Tab label="เขตพื้นที่ตาก"/>
        <Tab label="เขตพื้นที่น่าน"/>
        <Tab label="เขตพื้นที่พิษณุโลก"/>
        <Tab label="เขตพื้นที่เชียงใหม่(ส่วนกลาง)"/>
        <Tab label="เขตพื้นที่ลำปาง"/>
      </Tabs>
    </AppBar>
    {valueTabs === 0 && <MainCourse
                          dataT={dataT}
                          btState={anchorEl}
                          Open={OpenPopup}
                          Close={ClosePopup}
                          stylesDash={styles.dashboard}/>}


      {valueTabs === 1 && <CourseCampus1 data={dataFaculty.data.resultFaculty.ChiangRai}/>}
      {valueTabs === 2 && <CourseCampus2 data={dataFaculty.data.resultFaculty.Tak}/>}
      {valueTabs === 3 && <CourseCampus3 data={dataFaculty.data.resultFaculty.Nan}/>}
      {valueTabs === 4 && <CourseCampus4 data={dataFaculty.data.resultFaculty.PL}/>}
      {valueTabs === 5 && <CourseCampus5 data={dataFaculty.data.resultFaculty.ChiangMai}/>}
      {valueTabs === 6 && <CourseCampus6 data={dataFaculty.data.resultFaculty.LP}/>}
  </div>
);
export default Course;
