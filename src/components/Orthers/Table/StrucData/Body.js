import React from "react";
import {
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";

const NameCampus = ({
  path
}) => {
  if (path === "2") {
    return (
      <TableCell>เชียงราย</TableCell>
    );
  }
  if (path === "3") {
    return (
      <TableCell>ตาก</TableCell>
    );
  }
  if (path === "4") {
    return (
      <TableCell>น่าน</TableCell>
    );
  }
  if (path === "5") {
    return (
      <TableCell>พิษณุโลก</TableCell>
    );
  }
  if (path === "6") {
    return (
      <TableCell>ส่วนกลาง</TableCell>
    );
  }
  if (path === "7") {
    return (
      <TableCell>ลำปาง</TableCell>
    );
  }
};
const BodyTable = ({ dataCourse, page, rowsPerPage, data }) => (
  ////course_count,fullname
  <TableBody>
    {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => (
      <TableRow>
        {/*<TableCell scope="row" component="th">*/}
        {/*{index}*/}
        {/*</TableCell>*/}
        <TableCell>{n.fullname}</TableCell>
        <TableCell>{n.name}</TableCell>
        <NameCampus path={n.path.charAt(1)}/>
        <TableCell>{n.course_count}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default BodyTable;
