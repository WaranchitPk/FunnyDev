import React from "react";
import {TableHead,TableCell,TableRow} from '@material-ui/core';
const styles = {
    fontTableCell: {
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'black',
        opacity: 0.85
    },
}
const HeaderTable = () => (
  <TableHead>
    <TableRow>
      {/*<TableCell>No.</TableCell>*/}
      <TableCell style={styles.fontTableCell}>ชื่อวิชา/ชื่อผู้สอน</TableCell>
      <TableCell style={styles.fontTableCell}>ชื่อคณะ/หน่วยงาน</TableCell>
      <TableCell style={styles.fontTableCell}>เขตพื้นที่</TableCell>
      <TableCell style={styles.fontTableCell}>จำนวน</TableCell>
    </TableRow>
  </TableHead>
);

export default HeaderTable;
