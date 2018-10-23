import React from "react";
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
    CircularProgress,
    Paper,
    Typography
} from "@material-ui/core";
import CourseAnalyticChart from "./Courses/Course_Main/Chart_CourseMain/ChartCourseMain";
import {
    Teacher,
    Student
} from "./Homes";
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";
import {HomeBanner} from "../layout";
import {HomeComponent} from "./index";

const styles = {
    Top: {
        marginTop: "auto"
    },
    ChartCourseAnalytic: {
        marginTop: "2%",
        marginBottom: "2%"
    },
    LoadingTrain: {
        marginTop: '2%'
    }
};
const Home = ({
                  data: {data1, data2},
                  CourseAnalyticData,
                  CompareUserUseAndCourse,
                  mockDataCourseAnalytic,
                  UserUseTrain,
                  CourseTrain,
              }) => {
    if (Object.keys(CourseAnalyticData).length === 0) {
        console.log("empty");
    } else {
        console.log("data is ok");
    }
    let resultTrainAllCampus = [];
    let isDataAvailable = '';
    if ((CourseTrain !== null && CourseTrain != undefined) && (UserUseTrain !== null && UserUseTrain !== undefined)) {

        CourseTrain.data.result.slice(1).map((value, index) => {
            // console.log('aaa',UserUse_FindTrain.data.result[index].sumUser)
            value.countUserUse = UserUseTrain.data.result[index].sumUser;
            resultTrainAllCampus = resultTrainAllCampus.concat(value)
        })
    }else{
        isDataAvailable = false
    }
    return (
        <div>
            <HomeBanner/>
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography variant="display1">
                            วิเคราะห์จำนวนรายวิชา
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <Grid container justify="center" style={styles.ChartCourseAnalytic}>
                <Grid item xs={10} sm={7}>
                    {
                        Object.keys(CourseAnalyticData).length === 0 ? (
                            <Typography align="center" style={styles.LoadingTrain}>
                                <CircularProgress size={100} />
                            </Typography>
                        ) : (
                                <div>
                                    <Typography variant='title' align="center">
                                        จำนวนรวมรายวิชาของแต่ละเขตพื้นที่
                                    </Typography>
                                    <CourseAnalyticChart dataT={CourseAnalyticData.dataT}/>
                                </div>
                        )
                    }
                </Grid>
            </Grid>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography variant="display1">
                            เปรียบเทียบจำนวนผู้ใช้กับจำนวนรายวิชาที่เปิดสอนในระบบ
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider/>
            {
                isDataAvailable === false ?
                    <Typography align="center" style={styles.LoadingTrain}>
                        <CircularProgress size={100} />
                    </Typography>
                    :
                    <Grid container justify="center" style={styles.ChartCourseAnalytic}>
                        <Grid item xs={10} sm={7}>
                                <Typography variant='title' align="center">
                                    เปรียบเทียบจำนวนรายวิชาที่ถูกเปิดสอนในระบบ กับ จำนวนผู้ใช้
                                </Typography>
                                <ResponsiveContainer
                                    width='100%'
                                    aspect={2}>
                                    <BarChart width={600} height={300} data={resultTrainAllCampus}
                                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="yearShow"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Legend />
                                        <Bar dataKey="countUserUse" fill="#283B42" name="จำนวนผู้ใช้"/>
                                        <Bar dataKey="countCourse" fill="#85B8CB" name="จำนวนรายวิชา"/>
                                    </BarChart>
                                </ResponsiveContainer>
                        </Grid>
                    </Grid>
            }
            {/*{*/}
                {/*CourseTrain !== null && CourseTrain != undefined ?*/}
                    {/*CourseTrain.data.result.slice(1).map((value, index) =>{*/}

                        {/*if (UserUseTrain !== null && UserUseTrain !== undefined){*/}
                            {/*value.countUserUse = UserUseTrain.data.result[index].sumUser*/}
                            {/**/}
                            {/*resultTrainAllCampus = resultTrainAllCampus.concat(value)*/}
                            {/*return (*/}
                               {/*<h1>asf</h1>*/}
                            {/*)*/}
                        {/*}*/}
                        {/*return (*/}
                            {/*<h2>1</h2>*/}
                        {/*)*/}
                    {/*})*/}
                    {/*:*/}
                    {/*<h1>not mee</h1>*/}
            {/*}*/}

        </div>
    );
};
export default Home;

