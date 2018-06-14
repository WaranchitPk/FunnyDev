import React from "react";
import { Paper, MenuItem, Button, Select } from "@material-ui/core";
import { YearSelect, QuarterSelect, MonthSelect } from "../";

const chooseMonthMenu = ({ year, quarter, showMonth, monthValue, onSelect, onSubmit, styleSelect, month }) => (
  <Paper elevation={5}>
    <form style={styleSelect}>
      Year: <YearSelect
      year={year}
      onSelect={onSelect}/>
      Quarter: <QuarterSelect
      quarter={quarter}
      onSelect={onSelect}/>
      Month: <MonthSelect
      monthValue={monthValue}
      onSelect={onSelect}
      month={month}
      quarter={quarter}
      showMonth={showMonth}/>
      <Button onClick={onSubmit}>Go</Button>
    </form>
  </Paper>
);

export default chooseMonthMenu;
