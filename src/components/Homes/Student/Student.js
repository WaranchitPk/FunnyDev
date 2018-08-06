import React from "react";
import { Paper } from "@material-ui/core";

import { TitleStudent, ChartStudent } from "../";

const Student = ({ data }) => (
  <Paper>
    <TitleStudent/>
    <ChartStudent data={data}/>
  </Paper>
);

export default Student;
