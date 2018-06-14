import React from "react";
import {TableCell,TableBody,TableRow} from '@material-ui/core';

const BodyTable = ({dataCourse,page,rowsPerPage}) => (
  <TableBody>
    {dataCourse && dataCourse.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => (
      <TableRow key={n.id}>
        <TableCell scope="row" component="th">
          {n.no}
        </TableCell>
        <TableCell>{n.name}</TableCell>
        <TableCell>{n.course}</TableCell>
        <TableCell>{n.volume}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default BodyTable;
