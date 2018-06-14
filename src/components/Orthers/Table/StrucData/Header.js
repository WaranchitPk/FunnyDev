import React from "react";
import {TableHead,TableCell,TableRow} from '@material-ui/core';

const HeaderTable = () => (
  <TableHead>
    <TableRow>
      <TableCell>No.</TableCell>
      <TableCell>Name(Teacher)</TableCell>
      <TableCell>Course</TableCell>
      <TableCell>Volume</TableCell>
    </TableRow>
  </TableHead>
);

export default HeaderTable;
