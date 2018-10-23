import React from 'react';
import {
    CircularProgress, Divider,
    Grid, ListItem, ListItemText,
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
    Line,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const styles = {
    root: {
        marginTop: "2%"
    }
};
import TitleCampus from './Title_CourseCampus/TitleCourse';
import ChartCampus from './Chart_CourseCampus/ChartCourseCampus';
import ResultText from './ShowResultText/resultText';

const nameCampus = 'ตาก';
const CampusTak = ({data, dataTrainTK}) => (
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
                {/*<Paper*/}
                    {/*elevation={5}>*/}
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
                    dataTrainTK !== null && dataTrainTK !== undefined ? (
                        <div style={styles.root}>
                            <Typography align="center"
                                        variant="title">อัตราการเติบโตของจำนวนรายวิชาในเขตพื้นที่ตาก</Typography>
                            <ComposedChart width={800} height={400} data={dataTrainTK.data.result}
                                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                <CartesianGrid stroke='#f5f5f5'/>
                                <XAxis dataKey="date"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey='countCourse' barSize={20} fill='#80DEEA' name="จำนวนรายวิชา"/>
                                <Line type='monotone' dataKey='countCourse' stroke='#F44336'
                                      name="จำนวนการเจริญเติบโตของรายวิชา"/>
                            </ComposedChart>
                        </div>
                    ) : (
                        <CircularProgress size={50}/>
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

export default CampusTak;
