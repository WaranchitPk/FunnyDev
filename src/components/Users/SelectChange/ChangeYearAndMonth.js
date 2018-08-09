import React from "react";
import {
  MenuItem,
  Select,
  Button,
  CircularProgress
} from "@material-ui/core";

const ChangeYearAndMonth = ({
  year,
  month,
  valueYear,
  valueMonth,
  selectYear,
  selectMonth,
  submitSelectYear
}) => {
  console.log("value", valueMonth);
  return (
    <div>
      <p>
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
            </div>
          )
        }
        {
          valueMonth === null ? (<CircularProgress size={30} thickness={2}/>) : (
            <div>
              <Select
                value={month}
                onChange={selectMonth}>
                {
                  valueMonth.data.result.map(data => (
                    <MenuItem key={data.month} value={data.month}>{data.month}</MenuItem>
                  ))
                }
              </Select>
              <Button variant="outlined" color="secondary" onClick={submitSelectYear}>ตกลง</Button>
            </div>
          )
        }
      </p>
    </div>
  );
};

export default ChangeYearAndMonth;
