import React from "react";
import {
  MenuItem,
  Select,
  Button
} from "@material-ui/core";

const ChangeYear = ({ valueYear, year, selectYear, submitSelectYear }) => (
  <div>
    {
      valueYear && (
        <div>
          <Select
            value={year}
            onChange={selectYear}>
            {
              valueYear.data.result.map(data => (
                <MenuItem key={data.YEAR} value={data.YEAR}>{data.YEAR}</MenuItem>
              ))
            }
          </Select>
          <Button variant="outlined" color="secondary" onClick={submitSelectYear}>ตกลง</Button>
        </div>
      )
    }
  </div>
);

export default ChangeYear;
