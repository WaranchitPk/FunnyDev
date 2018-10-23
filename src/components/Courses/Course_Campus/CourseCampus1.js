import React from 'react';
import {
    CircularProgress, Divider,
    Grid, List, ListItem, ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import Loadable from 'react-loadable';
import '../../../styles/course.css';
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line, ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import TitleCampus from './Title_CourseCampus/TitleCourse';
import ChartCampus from './Chart_CourseCampus/ChartCourseCampus';
import ResultText from './ShowResultText/resultText';

const styles = {
    root: {
        marginTop: '2%'
    },
    LoadingData: {
        marginTop: '2%'
    }
}
// const TitleCampus = Loadable({
//     loader: () => import('./Title_CourseCampus/TitleCourse'),
//     loading: () => null,
// });
// const ChartCampus = Loadable({
//     loader: () => import('./Chart_CourseCampus/ChartCourseCampus'),
//     loading: () => null,
// });
// const ResultText = Loadable({
//     loader: () => import('./ShowResultText/resultText'),
//     loading: () => null,
// });
const nameCampus = 'เชียงราย';
const CampusChiangrai = ({data, dataTrainCR}) => (
    <div>
        <ListItem>
            <ListItemText>
                <Typography variant="display1">
                    จำนวนรายวิชาทั้งหมด ของเขตพื้นที่ {nameCampus}
                </Typography>
            </ListItemText>
        </ListItem>
        <Divider/>
        <Grid container justify="center" className='mainChart' id="homeCourse">
            <Grid
                item sm={9}
                xs={12}>
                {/*<Paper elevation={5}>*/}
                <TitleCampus name={nameCampus}/>
                <ChartCampus data={data}/>
                {/*</Paper>*/}
            </Grid>
        </Grid>
        <Divider/>
        <ListItem>
            <ListItemText>
                <Typography variant="display1">
                    อัตราการเติบโตของจำนวนรายวิชาทั้งหมดในแต่ละปีของเขตพื้นที่ {nameCampus}
                </Typography>
            </ListItemText>
        </ListItem>
        <Divider/>

        <Grid container justify="center" id="homeCourse">
            <Grid item xs={12} sm={6}>
                {
                    dataTrainCR !== null && dataTrainCR !== undefined ? (
                        <div style={styles.root}>
                            <Typography align="center"
                                        variant="title">อัตราการเติบโตของจำนวนรายวิชาในเขตพื้นที่เชียงราย</Typography>
                            <ResponsiveContainer
                                width='100%'
                                aspect={2}>
                                <ComposedChart data={dataTrainCR.data.result}>
                                    <CartesianGrid stroke='#f5f5f5'/>
                                    <XAxis dataKey="yearShow"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>

                                    <Bar dataKey='countCourse' barSize={20} fill='#85B8CB' name="จำนวนรายวิชา"/>
                                    <Line type='monotone' dataKey='countCourse' stroke='#E81E25'
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
        <ListItem>
            <ListItemText>
                <Typography variant="display1">
                    สรุปจำนวนรายวิชาทั้งหมดของเขตพื้นที่ {nameCampus}
                </Typography>
            </ListItemText>
        </ListItem>
        <Divider/>
        <div className='paperShowResult' id="homeCourse">
            <ResultText
                dataT={data}
                nameCampus={nameCampus}/>
        </div>
    </div>
);

export default CampusChiangrai;
