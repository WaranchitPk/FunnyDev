import React from "react";
import {
    Grid,
    Paper,
    CircularProgress
} from "@material-ui/core";
import '../../../styles/user.css';
import Loadable from "react-loadable";
import TitleChart from './Title/UserViewYear';
import ChartForMonth from './Chart_User/ChartUserUseMonth';
import CardResultYear from '../CardResult/FindYear';
import SelectYear from '../SelectChange/ChangeYearUserUse';


const UserUse = ({
                     year,
                     dataChartMonth,
                     valueYear,
                     selectYear,
                     submitSelectYear,
                 }) => {
    return (
        <div>
            {
                dataChartMonth === null ? (<CircularProgress size={250} thickness={7} className='centeredProgress'/>) :
                    (
                        <div>
                            <Grid container justify='center'>
                                <Grid item sm={7} xs={12}>
                                    <SelectYear valueYear={valueYear}
                                                year={year}
                                                selectYear={selectYear}
                                                submitSelectYear={submitSelectYear}/>
                                    <Paper elevation={5}>
                                        <TitleChart year={year}/>
                                        <ChartForMonth
                                            dataChartMonth={dataChartMonth}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container justify='center' className='paperShowResult'>
                                <Grid item xs={12} sm={5}>
                                    <CardResultYear
                                        year={year}
                                        dataMonthChart={dataChartMonth}/>
                                </Grid>
                            </Grid>
                        </div>
                    )
            }
        </div>
    )
};

export default UserUse;
