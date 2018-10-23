import React from "react";
import {
    Grid,
    Paper,
    CircularProgress
} from "@material-ui/core";
import "../../../styles/user.css";
import Loadable from "react-loadable";
import TitleUSerViewYearAndMonth from "./Title/UserViewYearAndMonth";
import SelectYearAndMonth from "../SelectChange/ChangeYearAndMonth";
import ChartForDay from "./Chart_User/UserViewDays";
import CardResultMonth from "../CardResult/FindMonth";

const USerView = ({
                      year,
                      valueYear,
                      month,
                      valueUserViewDaysMonth,
                      selectUserViewDayYear,
                      dataChartDay,
                      selectUserViewDayMonth,
                      submitSelectUserViewDay,
                      rowsPerPage,
                      page,
                      onChangePage,
                      onChangeRowPerPage,
                      selectYearAndMonth_Years,
                      selectYearAndMonth_Month
                  }) => (
    <div>
        {
            dataChartDay === null ? (<CircularProgress size={250} thickness={5} className='centeredProgress'/>)
                : (
                    <div>
                        <Grid container justify='center'>
                            <Grid item sm={7} xs={12}>
                                <SelectYearAndMonth
                                    valueYear={valueYear}
                                    year={year}
                                    month={month}
                                    valueMonth={valueUserViewDaysMonth}
                                    selectYear={selectUserViewDayYear}
                                    selectMonth={selectUserViewDayMonth}
                                    submitSelectYear={submitSelectUserViewDay}/>
                                {/*<Paper elevation={5}>*/}
                                    <TitleUSerViewYearAndMonth year={year} month={month}/>
                                    <ChartForDay dataChartDay={dataChartDay}/>
                                {/*</Paper>*/}
                            </Grid>
                        </Grid>
                        <Grid container justify='center' className='paperShowResult'>
                            <Grid item sm={5} xs={12}>
                                <CardResultMonth
                                    dataChartDay={dataChartDay}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={onChangePage}
                                    onChangeRowPerPage={onChangeRowPerPage}/>
                            </Grid>
                        </Grid>
                    </div>
                )
        }
    </div>
);

export default USerView;
