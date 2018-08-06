import React from "react";
import { Table, TablePagination } from "@material-ui/core";
import { HeaderTable, BodyTable } from "../";

const ShowData = ({ dataCourse, page, rowsPerPage, onChangePage, onChangeRow, data }) => {
  return (
    <div>
      {
        //course_count,fullname
        // data.dataT && console.log('dataT',data.dataT.data.result)
        data.dataT && (
          <div>
            <Table>
              <HeaderTable/>
              <BodyTable
                dataCourse={dataCourse}
                data={data.dataT.data.result}
                page={page}
                rowsPerPage={rowsPerPage}/>
            </Table>
            {
              data.dataT && (
                <TablePagination
                  component="div"
                  count={data.dataT.data.result.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={onChangePage}
                  onChangeRowsPerPage={onChangeRow}
                />
              )
            }
          </div>
        )
      }

    </div>
  );
};

export default ShowData;
