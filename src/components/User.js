import React from "react";
import {UserBanner} from "../layout";
import Loadable from "react-loadable";
import {
    Tab,
    Tabs,
    AppBar,
    Grid,
    BottomNavigation,
    BottomNavigationAction
} from "@material-ui/core";

import "../styles/user.css";
import UserView from "./Users/UserView";
import UserUse from "./Users/UserUse";
import {UserComponent} from "./index";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
// const ChartViewYear = Loadable({
//   loader: () => import("./Users/Chart/ChartUserViewMonth"),
//   loading: () => null
// });
// const ChartViewYearAndMonth = Loadable({
//   loader: () => import("./Users/Chart/ChartUserViewDays"),
//   loading: () => null
// });

const User = ({
                  valueBtNavigateUserView,
                  valueBtNavigateUserUse,
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
                  changeBtNavigateUserView,
                  changeBtNavigateUserUse,
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
                  onChangeRowPerPageTableInResultCardUserViewDays,
                  dataMonthChartUserUse,
                  dataDayChartUserUse,
                  resultSumUserView,
                  resultSumTrainUserUse,
                  selectYearAndMonth,
                  yearAndMonth,
                  yearValueViewYear,
                  selectYearUserUse,
                  yearValueUseYear

              }) => {
    console.log(yearValueUseYear, 'year')
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
            {
                valueTabs === 0 && (<UserView
                    valueBtNavigate={valueBtNavigateUserView}
                    changeBtNavigate={changeBtNavigateUserView}
                    year={year}
                    yearValueViewYear={yearValueViewYear}
                    dataMonthChart={dataMonthChart}
                    valueYear={valueYear}
                    selectYear={selectYear}
                    selectYearAndMonth={selectYearAndMonth}
                    valueYearAndMonth={yearAndMonth}
                    submitSelectYear={submitSelectYear}
                    month={month}
                    valueUserViewDaysMonth={valueUserViewDaysMonth}
                    selectUserViewDaysYear={selectUserViewDaysYear}
                    selectUserViewDaysMonth={selectUserViewDaysMonth}
                    submitSelectUserViewDays={submitSelectUserViewDays}
                    dataDayChart={dataDayChart}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePageTableInResultCardUserViewDays={onChangePageTableInResultCardUserViewDays}
                    onChangeRowPerPageTableInResultCardUserViewDays={onChangeRowPerPageTableInResultCardUserViewDays}
                    resultSumYear={resultSumUserView}
                />)
            }
            {
                valueTabs === 1 && (<UserUse
                    valueBtNavigate={valueBtNavigateUserUse}
                    changeBtNavigate={changeBtNavigateUserUse}
                    year={year}
                    dataMonthChart={dataMonthChartUserUse}
                    valueYear={valueYear}
                    selectYear={selectYear}
                    submitSelectYear={submitSelectYear}
                    month={month}
                    valueUserViewDaysMonth={valueUserViewDaysMonth}
                    selectUserViewDaysYear={selectUserViewDaysYear}
                    selectUserViewDaysMonth={selectUserViewDaysMonth}
                    submitSelectUserViewDays={submitSelectUserViewDays}
                    dataDayChart={dataDayChartUserUse}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePageTableInResultCardUserViewDays={onChangePageTableInResultCardUserViewDays}
                    onChangeRowPerPageTableInResultCardUserViewDays={onChangeRowPerPageTableInResultCardUserViewDays}
                    resultSumTrainUserUse={resultSumTrainUserUse}
                    selectYearUserUse={selectYearUserUse}
                    yearValueUseYear={yearValueUseYear}/>)
            }

        </div>
    );
};
export default User;
