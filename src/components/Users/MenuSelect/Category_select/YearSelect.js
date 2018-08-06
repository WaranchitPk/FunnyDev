import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const YearSelect = ({ year, onSelect }) => (
  <Select
    value={year}
    onChange={onSelect}
    inputProps={{ name: "year" }}>
    <MenuItem value={2018}>2018</MenuItem>
    <MenuItem value={2017}>2017</MenuItem>
  </Select>
);

export default YearSelect;
