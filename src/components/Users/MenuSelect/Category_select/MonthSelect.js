import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const MonthSelect = ({ monthValue, onSelect, quarter, showMonth, month }) => (
  <Select
    value={monthValue}
    onChange={onSelect}
    inputProps={{ name: "monthValue" }}>
    {
      month && month.slice(((quarter * showMonth) - showMonth), (((quarter * showMonth) - showMonth) + showMonth)).map(data => (
        <MenuItem
          key={data.id}
          value={data.no}>{data.name}</MenuItem>
      ))
    }
  </Select>
);

export default MonthSelect;
