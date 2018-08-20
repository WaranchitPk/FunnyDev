import React from "react";
import {
  Tab,
  Tabs,
  AppBar
} from "@material-ui/core";
import Loadable from "react-loadable";
import { CourseBanner } from "../layout";

const MainAllCampus = Loadable({
  loader: () => import("./Courses/Course_Main/MainCourse"),
  loading: () => null
});
const CourseChiangRaiCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus1"),
  loading: () => null
});
const CourseTakCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus2"),
  loading: () => null
});
const CourseNanCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus3"),
  loading: () => null
});
const CoursePitsanulokCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus4"),
  loading: () => null
});
const CourseChiangmaiCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus5"),
  loading: () => null
});
const CourseLampangCampus = Loadable({
  loader: () => import("./Courses/Course_Campus/CourseCampus6"),
  loading: () => null
});
const Course = ({
  Campus: { dataT },
  Faculty: { dataFaculty },
  changeTab,
  valueTabs,
  TrainAllCampus,
  TrainEachCampus
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
    {valueTabs === 0 && <MainAllCampus
      dataT={dataT}
      dataTrainAll={TrainAllCampus}/>}
    dataTrainCR
    dataTrainTK
    dataTrainNN
    dataTrainPL
    dataTrainCM
    dataTrainLP
    {valueTabs === 1 && <CourseChiangRaiCampus
      data={dataFaculty.data.resultFaculty.ChiangRai}
      dataTrainCR={TrainEachCampus}/>}
    {valueTabs === 2 && <CourseTakCampus
      data={dataFaculty.data.resultFaculty.Tak}
      dataTrainTK={TrainEachCampus}/>}
    {valueTabs === 3 && <CourseNanCampus
      data={dataFaculty.data.resultFaculty.Nan}
      dataTrainNN={TrainEachCampus}/>}
    {valueTabs === 4 && <CoursePitsanulokCampus
      data={dataFaculty.data.resultFaculty.PL}
      dataTrainPL={TrainEachCampus}/>}
    {valueTabs === 5 && <CourseChiangmaiCampus
      data={dataFaculty.data.resultFaculty.ChiangMai}
      dataTrainCM={TrainEachCampus}/>}
    {valueTabs === 6 && <CourseLampangCampus
      data={dataFaculty.data.resultFaculty.LP}
      dataTrainLP={TrainEachCampus}/>}
  </div>
);
export default Course;
