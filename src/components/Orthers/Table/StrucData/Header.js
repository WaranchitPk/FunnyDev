import React from "react";
import {TableHead,TableCell,TableRow} from '@material-ui/core';

const HeaderTable = () => (
  <TableHead>
    <TableRow>
      {/*<TableCell>No.</TableCell>*/}
      <TableCell>ชื่อวิชา/ชื่อผู้สอน</TableCell>
      <TableCell>ชื่อคณะ/หน่วยงาน</TableCell>
      <TableCell>เขตพื้นที่</TableCell>
      <TableCell>จำนวน</TableCell>
    </TableRow>
  </TableHead>
);

export default HeaderTable;
