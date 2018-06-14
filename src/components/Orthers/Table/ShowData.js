import React from "react";
import {Table,TablePagination} from '@material-ui/core';
import {HeaderTable,BodyTable} from '../'
const ShowData = ({dataCourse,page,rowsPerPage,onChangePage,onChangeRow}) => (
  <div>
    <Table>
      <HeaderTable />
      <BodyTable
        dataCourse={dataCourse}
        page={page}
        rowsPerPage={rowsPerPage}/>
    </Table>
    {
      dataCourse && (
        <TablePagination
          component="div"
          count={dataCourse.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRow}
        />
      )
    }
  </div>
);

export default ShowData;
