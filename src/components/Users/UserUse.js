import React from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Grid
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChartViewYearAndMonth from "./Chart/ChartUserUseDays";
import Loadable from "react-loadable";
import ChartSumUserUse from "./Chart/Chart_train_sum/ChartSumUseUse";
import ChartViewYear from './Chart/ChartUserUseMonth';
// const ChartViewYear = Loadable({
//     loader: () => import("./Chart/ChartUserViewMonth"),
//     loading: () => null
// });
const style = {
    bgTabs: {
        backgroundColor: 'aliceblue'
    }
}
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
                     resultSumTrainUserUse,
                     selectYearUserUse,
                     yearValueUseYear,
                     yearAndMonthUserUse,
                     monthUse,
                     selectYearAndMonth_Years,
                     selectYearAndMonth_Month
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
                <ChartSumUserUse dataTrainResult={resultSumTrainUserUse}/>
            )}
            {valueBtNavigate === 1 && <ChartViewYear
                year={yearValueUseYear}
                dataChartMonth={dataMonthChart}
                valueYear={valueYear}
                selectYear={selectYearUserUse}
                submitSelectYear={submitSelectYear}/>}
            {valueBtNavigate === 2 && <ChartViewYearAndMonth
                year={yearAndMonthUserUse}
                valueYear={valueYear}
                month={monthUse}
                valueUserViewDaysMonth={valueUserViewDaysMonth}
                selectUserViewDayYear={selectUserViewDaysYear}
                selectUserViewDayMonth={selectUserViewDaysMonth}
                submitSelectUserViewDay={submitSelectUserViewDays}
                dataChartDay={dataDayChart}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={onChangePageTableInResultCardUserViewDays}
                onChangeRowPerPage={onChangeRowPerPageTableInResultCardUserViewDays}
                selectYearAndMonth_Years={selectYearAndMonth_Years}
                selectYearAndMonth_Month={selectYearAndMonth_Month}/>}
        </div>
    )
};

export default UserUse;
