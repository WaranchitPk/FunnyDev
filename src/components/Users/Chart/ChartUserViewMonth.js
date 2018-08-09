import React from "react";
import {
  Grid,
  Paper,
  CircularProgress
} from "@material-ui/core";
import '../../../styles/user.css';
import Loadable from "react-loadable";


const TitleChart = Loadable({
  loader: () => import("./Title/UserViewYear"),
  loading: () => null
});
const ChartForMonth = Loadable({
  loader: () => import("./Chart_User/UserViewMonths"),
  loading: () => null
});
const ChartForDay = Loadable({
  loader: () => import("./Chart_User/UserViewDays"),
  loading: () => null
});
const CardResultYear = Loadable({
  loader: () => import("../CardResult/FindYear"),
  loading: () => null
});
const SelectYear = Loadable({
  loader: () => import("../SelectChange/ChangeYear"),
  loading: () => null
});
const SelectYearAndMonth = Loadable({
  loader: () => import("../SelectChange/ChangeYearAndMonth"),
  loading: () => null
});

const USerView = ({
  year,
  dataChartMonth,
  valueYear,
  selectYear,
  submitSelectYear
}) => (
  <div>
      {
        dataChartMonth === null ? (<CircularProgress size={250} thickness={7} className='centeredProgress'/>) :
          (
            <div>
              <Grid container justify='center'>
                <Grid item sm={7} xs={12}>
                  <SelectYear valueYear={valueYear} year={year} selectYear={selectYear}
                              submitSelectYear={submitSelectYear}/>
                  <Paper elevation={5}>
                    <TitleChart year={year}/>
                    <ChartForMonth
                      dataChartMonth={dataChartMonth}/>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify='center' className='paperShowResult'>
                <Grid item sm={5} xs={12}>
                  <CardResultYear
                    year={year}
                    dataMonthChart={dataChartMonth}/>
                </Grid>
              </Grid>
            </div>
          )
      }
  </div>
);

export default USerView;
