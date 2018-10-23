import React from "react";
import {
    Grid,
    Paper,
    Divider,
    Typography,
    List,
    ListItem,
    CircularProgress, ListItemText
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
    YAxis,
    ResponsiveContainer
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

const ShowResultSubject = ({value}) => (
    <div>
        <Typography variant="title">
            <b>รายวิชาทุกเขตพื้นที่</b> : {sumValueSubject(value)} วิชา
        </Typography>
    </div>
);

const styles = {
    Paper: {
        marginTop: '4%'
    },
    LoadingData: {
        marginTop: '2%'
    }
}
const iconCampus = [iconChiangrai, iconTak, iconNan, iconPitsanulok, iconChiangmai, iconLampang];
const MainCourse = ({dataT, dataTrainAll}) => (
    <div>
        <List>
            <ListItem>
                <ListItemText>
                    <Typography variant="display1">
                        จำนวนรายวิชาทั้งหมด ของแต่ละเขตพื้นที่
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        <Divider/>
        <Grid container className='mainChart' justify="center" id="homeCourse">
            <Grid item sm={9} xs={12}>
                <TitleCampus/>
                <ChartCampus
                    dataT={dataT}/>
            </Grid>
        </Grid>
        <Divider/>
        <List>
            <ListItem>
                <ListItemText>
                    <Typography variant="display1">
                        อัตราการเติบโตของจำนวนรายวิชาในแต่ละปี
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        <Divider/>
        <Grid container justify="center" id="homeCourse">
            <Grid item xs={12} sm={5}>
                {
                    dataTrainAll !== null && dataTrainAll !== undefined ? (
                        <div style={styles.Paper}>
                            <Typography align="center"
                                        variant="title">อัตราการเติบโตของจำนวนรายวิชาในทุกเขตพื้นที่</Typography>
                            <ResponsiveContainer
                                width='100%'
                                aspect={2}>
                                <ComposedChart data={dataTrainAll.data.result}>
                                    <CartesianGrid stroke='#f5f5f5'/>
                                    <XAxis dataKey="yearShow"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey='countCourse' barSize={20} fill='#80DEEA' name="จำนวนรายวิชา"/>
                                    <Line type='monotone' dataKey='countCourse' stroke='#F44336'
                                          name="จำนวนการเจริญเติบโตของรายวิชา"/>
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <Typography align={"center"} style={styles.LoadingData}><CircularProgress
                            size={100}/></Typography>
                    )
                }
            </Grid>
        </Grid>
        <Divider/>
        <List>
            <ListItem>
                <ListItemText>
                    <Typography variant="display1">
                        สรุปจำนวนรายวิชาทั้งหมดของแต่ละวิทยาเขต
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
        <Divider/>
        <Grid container justify="center" className='paperShowResult' id="homeCourse">
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
                                <b>จำนวนรายวิชาทั้งหมดของแต่ละเขตพื้นที่</b>
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
