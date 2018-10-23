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
import ChartSumUserUse from "./Chart/Chart_train_sum/ChartSumUseUse";

const ChartViewYear = Loadable({
    loader: () => import("./Chart/ChartUserViewMonth"),
    loading: () => null
});

const UserUse = ({
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
                     resultSumTrainUserUse
                 }) => (
    <div>
        {/*button navigation Your Choose show month or day*/}
        <Grid container justify='center' className='btYourChoose'>
            <Grid item>
                <BottomNavigation
                    value={valueBtNavigate}
                    onChange={changeBtNavigate}
                    showLabels>
                    <BottomNavigationAction label="รวม" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="แสดงรายเดือน" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="แสดงรายวัน" icon={<FavoriteIcon/>}/>
                </BottomNavigation>
            </Grid>
        </Grid>
        {valueBtNavigate === 0 && (
            <ChartSumUserUse dataTrainResult={resultSumTrainUserUse}/>
        )}
        {valueBtNavigate === 1 && <ChartViewYear
            year={year}
            dataChartMonth={dataMonthChart}
            valueYear={valueYear}
            selectYear={selectYear}
            submitSelectYear={submitSelectYear}/>}
        {valueBtNavigate === 2 && <ChartViewYearAndMonth
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

export default UserUse;
