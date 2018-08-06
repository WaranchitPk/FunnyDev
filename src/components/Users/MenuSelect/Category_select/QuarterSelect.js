import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const QuarTerSelect = ({ quarter, onSelect }) => (
  <Select
    value={quarter}
    onChange={onSelect}
    inputProps={{ name: "quarter" }}>
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
  </Select>
);

export default QuarTerSelect;
