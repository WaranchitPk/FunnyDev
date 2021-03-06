import React from "react";
import {
    CircularProgress, Divider,
    Grid, ListItem, ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import Loadable from "react-loadable";
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

import TitleCampus from './Title_CourseCampus/TitleCourse';
import ChartCampus from './Chart_CourseCampus/ChartCourseCampus';
import ResultText from './ShowResultText/resultText';

const styles = {
    root: {
        marginTop: "2%"
    },
    LoadingData: {
        marginTop: '2%'
    }
};
const nameCampus = "พิษณุโลก";
const CampusPitsanulok = ({data, dataTrainPL}) => (
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
                <TitleCampus name={nameCampus}/>
                <ChartCampus data={data}/>
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
                    dataTrainPL !== null && dataTrainPL !== undefined ? (
                        <div style={styles.root}>
                            <Typography align="center"
                                        variant="title">อัตราการเติบโตของจำนวนรายวิชาในเขตพื้นที่พิษณุโลก</Typography>
                            <ComposedChart width={600} height={400} data={dataTrainPL.data.result}
                                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                <CartesianGrid stroke='#f5f5f5'/>
                                <XAxis dataKey="date"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>

                                <Bar dataKey='countCourse' barSize={20} fill='#85B8CB' name="จำนวนรายวิชา"/>
                                <Line type='monotone' dataKey='countCourse' stroke='#E81E25'
                                      name="จำนวนการเจริญเติบโตของรายวิชา"/>
                            </ComposedChart>
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

export default CampusPitsanulok;
