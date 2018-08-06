import React from "react";
import { Paper } from "@material-ui/core";

import { TitleTeacher, ChartTeacher } from "../";

const Teacher = ({ data }) => (

  <Paper>
    <TitleTeacher/>
    <ChartTeacher data={data}/>
  </Paper>
);

export default Teacher;
