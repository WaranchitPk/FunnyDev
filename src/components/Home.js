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
import { HomeBanner } from "../layout";

const styles = {
  Top: {
    marginTop: "auto"
  },
  ChartCourseAnalytic: {
    marginTop: "2%",
    marginBottom: "2%"
  }

};
const Home = ({
  data: { data1, data2 },
  CourseAnalyticData,
  CompareUserUseAndCourse,
  mockDataCourseAnalytic
}) => {
  if (Object.keys(CourseAnalyticData).length === 0) {
    console.log("empty");
  } else {
    console.log("data is ok");
  }
  let resultTrainAllCampus = [];
  return (
    <div>
      <HomeBanner/>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="display1">
              Course Analytic
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>
      <Grid container justify="center" style={styles.ChartCourseAnalytic}>
        <Grid item xs={10} sm={7}>
          {
            Object.keys(CourseAnalyticData).length === 0 ? (
              <CircularProgress size={50}/>
            ) : (
              <Paper>
                <Typography variant='title' align="center">
                  จำนวนรวมรายวิชาของแต่ละเขตพื้นที่
                </Typography>
                <CourseAnalyticChart dataT={CourseAnalyticData.dataT}/>
              </Paper>
            )
          }
        </Grid>
      </Grid>
      <Divider/>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="display1">
              Compare Between Sum Course Per Year And Sum User Use
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>

        <Grid container justify="center" style={styles.ChartCourseAnalytic}>
          <Grid item xs={10} sm={7}>
            <Paper>
              <Typography variant='title' align="center">
                เปรียบเทียบจำนวนรายวิชาที่ถูกเปิดสอนในระบบ กับ จำนวนผู้ใช้
              </Typography>
            <ResponsiveContainer
              width='100%'
              aspect={2}>
              <BarChart width={600} height={300} data={CompareUserUseAndCourse}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="yearShow"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="countUserUse" fill="#8884d8" />
                <Bar dataKey="countCourse" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
};
export default Home;
