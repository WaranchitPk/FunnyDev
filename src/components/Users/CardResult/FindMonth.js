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
    const styles = {
        fontTableCell: {
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'black',
            opacity: 0.85
        },
        AlignTableCellText: {
            textAlign: 'left',
            fontSize: '1rem',
            opacity: 0.80
        },
        AlignTableCellNumber: {
            textAlign: 'right',
            fontSize: '1rem',
            opacity: 0.80
        }
    }
  return (
    <div>
      <Paper elevation={5}>
        <Table>
          <TableHead>
            <TableCell style={styles.fontTableCell}>วันที่</TableCell>
            <TableCell style={styles.fontTableCell}>จำนวน/ครั้ง</TableCell>
          </TableHead>
          <TableBody>
            {
              dataChartDay && dataChartDay.data.result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(result => (
                  <TableRow key={result.day}>
                    <TableCell style={styles.AlignTableCellNumber}>{result.day}</TableCell>
                    <TableCell style={styles.AlignTableCellNumber}>{result.countDay}</TableCell>
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
