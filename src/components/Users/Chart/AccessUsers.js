import React from "react";
import { Paper } from "@material-ui/core";
import {TitleAccessUser,ChartAccessUser} from '../'
const AccessUsers = ({year,stylePaper,data}) => (
  <Paper elevation={5} style={stylePaper}>
    <TitleAccessUser year={year}/>
    <ChartAccessUser data={data}/>
  </Paper>
);

export default AccessUsers;
