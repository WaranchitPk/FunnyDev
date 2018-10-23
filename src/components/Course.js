import React from "react";
import {
    Tab,
    Tabs,
    AppBar,
} from "@material-ui/core";
import {CourseBanner} from "../layout";
import MainAllCampus from './Courses/Course_Main/MainCourse';
import CourseChiangRaiCampus from "./Courses/Course_Campus/CourseCampus1";
import CourseTakCampus from './Courses/Course_Campus/CourseCampus2';
import CourseNanCampus from './Courses/Course_Campus/CourseCampus3';
import CoursePitsanulokCampus from "./Courses/Course_Campus/CourseCampus4";
import CourseChiangmaiCampus from './Courses/Course_Campus/CourseCampus5';
import CourseLampangCampus from './Courses/Course_Campus/CourseCampus6';
import '../styles/public.css'
// const styles = {
//     AppBar: {
//         backgroundColor: '#1D6A96'
//     }
// }
const Course = ({
                    Campus: {dataT},
                    Faculty: {dataFaculty},
                    changeTab,
                    valueTabs,
                    TrainAllCampus,
                    TrainEachCampus
                }) => (
    <div>
        <CourseBanner/>
        <AppBar position="static" id="bgAppBar">
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
