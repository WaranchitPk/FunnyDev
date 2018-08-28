import React from "react";
import {
  Grid,
  Paper,
  Divider,
  Typography,
  List,
  ListItem,
  CircularProgress
} from "@material-ui/core";
import Loadable from "react-loadable";
import iconChiangrai from "../../../assets/icons/university_chiangrai.svg";
import iconTak from "../../../assets/icons/university_Tak.svg";
import iconNan from "../../../assets/icons/university_nan.svg";
import iconPitsanulok from "../../../assets/icons/university_pitsanulok.svg";
import iconChiangmai from "../../../assets/icons/university_chiangmai.svg";
import iconLampang from "../../../assets/icons/university_lampang.svg";
import "../../../styles/course.css";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const TitleCampus = Loadable({
  loader: () => import("./Title_CourseMain/TitleCourseMain"),
  loading: () => null
});
const ChartCampus = Loadable({
  loader: () => import("./Chart_CourseMain/ChartCourseMain"),
  loading: () => null
});


const sumValueSubject = (value) => {
  const sumValue = value.reduce((a, b) => (
    a + b.value
  ), 0);
  return sumValue;
};

const ShowResultSubject = ({ value }) => (
  <div>
    <Typography variant="title">
      รายวิชาทุกเขตพื้นที่ : {sumValueSubject(value)}
    </Typography>
  </div>
);

const styles = {
  Paper: {
    marginTop: '4%'
  }
}
const iconCampus = [iconChiangrai, iconTak, iconNan, iconPitsanulok, iconChiangmai, iconLampang];
const MainCourse = ({ dataT, dataTrainAll }) => (
  <div>
    <Grid container className='mainChart' justify="center">
      <Grid item sm={8} xs={12}>
        <Paper elevation={5}>
          <TitleCampus/>
          <ChartCampus
            dataT={dataT}/>
        </Paper>
      </Grid>
    </Grid>
    <Divider/>
    <Grid container justify="center">
      <Grid item xs={12} sm={7}>
        {
          dataTrainAll !== null && dataTrainAll !== undefined ? (
            <Paper elevation={5} style={styles.Paper}>
              <Typography align="center" variant="title">อัตราการเติบโตของจำนวนรายวิชาในทุกเขตพื้นที่</Typography>
              <ComposedChart width={800} height={600} data={dataTrainAll.data.result}
                             margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis dataKey="yearShow"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='countCourse' barSize={20} fill='#80DEEA'/>
                <Line type='monotone' dataKey='countCourse' stroke='#F44336'/>
              </ComposedChart>
            </Paper>
          ) : (
            <CircularProgress size={25}/>
          )
        }
      </Grid>
    </Grid>
    <Divider/>
    <Grid container justify="center" className='paperShowResult'>
      <Grid item sm={5} xs={12}>
        <Paper elevation={5} className='bgPaper'>
          <Typography align="center" variant="headline">
            สรุปจำนวนรายวิชาทุกเขตพื้นที่
          </Typography>
          <Divider/>

          <List>
            <ListItem>
              {
                dataT && (
                  <ShowResultSubject value={dataT.data.resultData}/>
                )
              }
            </ListItem>
            <ListItem>
              <Typography align="center" variant="subheading">
                จำนวนรายวิชาทั้งหมดของแต่ละเขตพื้นที่
              </Typography>
            </ListItem>
            {
              dataT && dataT.data.resultData.map((result, index) => (
                <ListItem>
                  <img src={iconCampus[index]}
                       className='iconStyle'/>
                  <Typography key={result.name} variant="body2">
                    {result.name} : {result.value}
                  </Typography>
                </ListItem>
              ))
            }
          </List>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default MainCourse;
