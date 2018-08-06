import React from "react";
import {TableCell,TableBody,TableRow} from '@material-ui/core';

const BodyTable = ({dataCourse,page,rowsPerPage,data}) => (
  ////course_count,fullname
  <TableBody>
    {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => (
      <TableRow >
        {/*<TableCell scope="row" component="th">*/}
          {/*{index}*/}
        {/*</TableCell>*/}
        <TableCell>{n.fullname}</TableCell>
        <TableCell>{n.course_count}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default BodyTable;
