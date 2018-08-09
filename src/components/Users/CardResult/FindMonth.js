import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TablePagination
} from "@material-ui/core";

const ShowResultFindMonth = ({ dataChartDay, rowsPerPage, page, onChangePage, onChangeRowPerPage }) => {
  // let data = "";
  // if (dataChartDay !== undefined && dataChartDay !== null) {
  //   data = dataChartDay.data.result;
  // }
  return (
    <div>
      <Paper elevation={5}>
        <Table>
          <TableHead>
            <TableCell>วันที่</TableCell>
            <TableCell>จำนวน</TableCell>
          </TableHead>
          <TableBody>
            {
              dataChartDay && dataChartDay.data.result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(result => (
                  <TableRow key={result.day}>
                    <TableCell>{result.day}</TableCell>
                    <TableCell>{result.countDay}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        {
          dataChartDay && (
            <TablePagination
              component='div'
              count={dataChartDay.data.result.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={onChangePage}
              onChangeRowsPerPage={onChangeRowPerPage}/>
          )
        }
      </Paper>
    </div>
  );
};

export default ShowResultFindMonth;
