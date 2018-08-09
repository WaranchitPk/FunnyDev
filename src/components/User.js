import React from "react";
import { UserBanner } from "../layout";
import Loadable from "react-loadable";
import {
  Grid,
  Tab,
  Tabs,
  AppBar,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChartViewYearAndMonth from "./Users/Chart/ChartUserViewDays";
import "../styles/user.css";
import { UserComponent } from "./index";

const ChartViewYear = Loadable({
  loader: () => import("./Users/Chart/ChartUserViewMonth"),
  loading: () => null
});
// const ChartViewYearAndMonth = Loadable({
//   loader: () => import("./Users/Chart/ChartUserViewDays"),
//   loading: () => null
// });
const User = ({
  valueBtNavigate,
  year,
  quarter,
  showMonth,
  month,
  onSubmit,
  onSelect,
  dashboardUser,
  accessUser,
  dataMonthChart,
  valueTabs,
  changeTabs,
  changeBtNavigate,
  selectYear,
  valueYear,
  submitSelectYear,
  valueUserViewDaysMonth,
  selectUserViewDaysYear,
  selectUserViewDaysMonth,
  submitSelectUserViewDays,
  dataDayChart,
  rowsPerPage,
  page,
  onChangePageTableInResultCardUserViewDays,
  onChangeRowPerPageTableInResultCardUserViewDays
}) => {
  return (
    <div>
      <UserBanner/>
      <AppBar position='static'>
        <Tabs
          value={valueTabs}
          onChange={changeTabs}
          centered>
          <Tab label='ผู้เข้าชมระบบ'/>
          <Tab label='ผู้เข้าใช้ระบบ'/>
        </Tabs>
      </AppBar>
      {/*button Your Choose*/}
      <Grid container justify='center' className='btYourChoose'>
        <Grid item>
          <BottomNavigation
            value={valueBtNavigate}
            onChange={changeBtNavigate}
            showLabels>
            <BottomNavigationAction label="แสดงรายเดือน" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="แสดงรายวัน" icon={<FavoriteIcon/>}/>
          </BottomNavigation>
        </Grid>
      </Grid>
      {valueBtNavigate === 0 && <ChartViewYear
        year={year}
        dataChartMonth={dataMonthChart}
        valueYear={valueYear}
        selectYear={selectYear}
        submitSelectYear={submitSelectYear}/>}
      {valueBtNavigate === 1 && <ChartViewYearAndMonth
        year={year}
        valueYear={valueYear}
        month={month}
        valueUserViewDaysMonth={valueUserViewDaysMonth}
        selectUserViewDayYear={selectUserViewDaysYear}
        selectUserViewDayMonth={selectUserViewDaysMonth}
        submitSelectUserViewDay={submitSelectUserViewDays}
        dataChartDay={dataDayChart}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePageTableInResultCardUserViewDays}
        onChangeRowPerPage={onChangeRowPerPageTableInResultCardUserViewDays}/>}
    </div>
  );
};
export default User;
