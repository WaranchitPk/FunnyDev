import React from "react";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";
import Loadable from "react-hot-loader";


const UserUseMonth = ({dataChartMonth}) => {
    let showData = "";
    // let dataKeyXAxis = "";
    // let dataBar = "";
    if (dataChartMonth !== undefined && dataChartMonth !== null) {
        dataChartMonth.data.result.map(result => {
            if (result.month === 1) {
                result.month = "ม.ค"
            }
            if (result.month === 2) {

                result.month = "ก.พ"
            }
            if (result.month === 3) {
                result.month = "มี.ค"
            }
            if (result.month === 4) {
                result.month = "เม.ย"
            }
            if (result.month === 5) {
                result.month = "พ.ค"
            }
            if (result.month === 6) {
                result.month = "มิ.ย"
            }
            if (result.month === 6) {
                result.month = "มิ.ย"
            }
            if (result.month === 7) {

                result.month = "ก.ค"
            }
            if (result.month === 8) {
                result.month = "ส.ค"
            }
            if (result.month === 9) {
                result.month = "ก.ย"
            }
            if (result.month === 10) {
                result.month = "ต.ค"
            }
            if (result.month === 11) {
                result.month = "พ.ย"
            }
            if (result.month === 12) {
                result.month = "ธ.ค"
            }
            showData = dataChartMonth.data.result
        })
        // dataKeyXAxis = "month";
        // dataBar = "countMonth";
        //  {countMonth: 73760, month: 1}
    }
    // if (dataChartDay !== undefined && dataChartDay !== null) {
    //   console.log("dataChartDay", dataChartDay.data.result);
    //   showData = dataChartDay.data.result;
    //   dataKeyXAxis = "day";
    //   dataBar = "countDay";
    //   //  {day: 1, countDay: 507}
    // }
    return (
        <div>
            <ResponsiveContainer width='100%' aspect={2}>
                <BarChart data={showData}>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="countMonth" fill='#82ca9d' name="จำนวน"/>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default UserUseMonth;
