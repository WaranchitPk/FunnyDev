import React from 'react';
import {
  Grid,
  Button,
} from '@material-ui/core';
import { OrtherBanner } from '../layout';
import {
  SelectMenu,
  ShowData,
} from './Orthers';

const styles = {
  campusSelect: {
    textAlign: 'center',
    marginTop: '2em',
  },
};
const Orther = ({ onSelect, rating, onSubmit, dataCourse, rowsPerPage, page, type, onChangePage, onChangeRow, data }) => (
  <div>
    <OrtherBanner/>
    {/*Select Most Course*/}
    <Grid container>
      <Grid item xs={12} sm={12}>
        <form style={styles.campusSelect}>
          <SelectMenu
            type={type}
            onSelect={onSelect}
            rating={rating}/>
          <Button onClick={onSubmit}>Go</Button>
        </form>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item sm={12} xs={12}>
        <ShowData
          dataCourse={dataCourse}
          data={data}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={onChangePage}
          onChangeRow={onChangeRow}/>
      </Grid>
    </Grid>
  </div>
);
export default Orther;
