import React from "react";
import { Paper } from "@material-ui/core";
import {TitleDashBoardUsers,ChartDashBoardUser} from '../'
const DashBoardUsers = ({ year, data }) => (
  <Paper elevation={5}>
    <TitleDashBoardUsers year={year}/>
    <ChartDashBoardUser data={data}/>
  </Paper>
);

export default DashBoardUsers;
