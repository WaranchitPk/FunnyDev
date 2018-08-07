import React from 'react';
import { Paper } from '@material-ui/core';
import Loadable from 'react-loadable';


const TitleChart = Loadable({
  loader: () => import('./Title/TitleDashBoardUsers'),
  loading: () => null,
});
const ChartForMonth = Loadable({
  loader: () => import('./Chart_User/ChartDashBoard'),
  loading: () => null,
});
const DashBoardUsers = ({ year, dataChartMonth }) => (
  <Paper elevation={5}>
    <TitleChart year={year}/>
    <ChartForMonth
      dataChartMonth={dataChartMonth}/>
  </Paper>
);

export default DashBoardUsers;
