import React from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Grid
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChartViewYearAndMonth from "./Chart/ChartUserViewDays";
import Loadable from "react-loadable";
import ChartSumUserView from './Chart/Chart_train_sum/ChartSumUserView';
import ChartViewYear from "./Chart/ChartUserViewMonth";
// const ChartViewYear = Loadable({
//     loader: () => import("./Chart/ChartUserViewMonth"),
//     loading: () => null
// });
const style = {
    bgTabs: {
        backgroundColor: 'aliceblue'
    }
}
const UserView = ({
                      valueBtNavigate,
                      changeBtNavigate,
                      year,
                      dataMonthChart,
                      valueYear,
                      selectYear,
                      submitSelectYear,
                      month,
                      valueUserViewDaysMonth,
                      selectUserViewDaysYear,
                      selectUserViewDaysMonth,
                      submitSelectUserViewDays,
                      dataDayChart,
                      rowsPerPage,
                      page,
                      onChangePageTableInResultCardUserViewDays,
                      onChangeRowPerPageTableInResultCardUserViewDays,
                      resultSumYear,
                      selectYearAndMonth,
                      valueYearAndMonth,
                      yearValueViewYear
                  }) => {
    return (
        <div>
            {/*button navigation Your Choose show month or day*/}
            <Grid container justify='center' className='btYourChoose'>
                <Grid item>
                    <BottomNavigation
                        value={valueBtNavigate}
                        onChange={changeBtNavigate}
                        showLabels
                        style={style.bgTabs}>
                        <BottomNavigationAction label="รวม" icon={<RestoreIcon/>}/>
                        <BottomNavigationAction label="แสดงรายเดือน" icon={<RestoreIcon/>}/>
                        <BottomNavigationAction label="แสดงรายวัน" icon={<FavoriteIcon/>}/>
                    </BottomNavigation>
                </Grid>
            </Grid>
            {valueBtNavigate === 0 && (
                <ChartSumUserView resultSumYear={resultSumYear}/>
            )}
            {valueBtNavigate === 1 && <ChartViewYear
                year={year}
                dataChartMonth={dataMonthChart}
                valueYear={valueYear}
                selectYear={selectYear}
                submitSelectYear={submitSelectYear}
                yearValueViewYear={yearValueViewYear}/>}
            {valueBtNavigate === 2 && <ChartViewYearAndMonth
                year={valueYearAndMonth}
                valueYear={valueYear}
                month={month}
                valueUserViewDaysMonth={valueUserViewDaysMonth}
                selectUserViewDayYear={selectYearAndMonth}
                selectUserViewDayMonth={selectUserViewDaysMonth}
                submitSelectUserViewDay={submitSelectUserViewDays}
                dataChartDay={dataDayChart}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={onChangePageTableInResultCardUserViewDays}
                onChangeRowPerPage={onChangeRowPerPageTableInResultCardUserViewDays}/>}
        </div>
    )
};

export default UserView;
