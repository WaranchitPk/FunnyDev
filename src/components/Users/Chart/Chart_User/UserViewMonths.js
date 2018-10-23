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


const UserViewMonths = ({dataChartMonth}) => {
    let showData = "";
    // let dataKeyXAxis = "";
    // let dataBar = "";
    if (dataChartMonth !== undefined && dataChartMonth !== null) {
        console.log("UserViewdataMonth", dataChartMonth.data.result);
        dataChartMonth.data.result.map(result => {
            if (result.month === 1) {
                result.month = "มกราคม"
            }
            if (result.month === 2) {

                result.month = "กุมภาพันธ์"
            }
            if (result.month === 3) {
                result.month = "มีนาคม"
            }
            if (result.month === 4) {
                result.month = "เมษายน"
            }
            if (result.month === 5) {
                result.month = "พฤษภาคม"
            }
            if (result.month === 6) {
                result.month = "มิถุนายน"
            }

            if (result.month === 7) {

                result.month = "กรกฎาคม"
            }
            if (result.month === 8) {
                result.month = "สิงหาคม"
            }
            if (result.month === 9) {
                result.month = "กันยายน"
            }
            if (result.month === 10) {
                result.month = "ตุลาคม"
            }
            if (result.month === 11) {
                result.month = "พฤศจิกายน"
            }
            if (result.month === 12) {
                result.month = "ธันวาคม"
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
    console.log('dataChart', dataChartMonth)
    return (
        <ResponsiveContainer width='100%' aspect={2}>
            <BarChart data={showData}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="countMonth" fill='#85B8CB' name="จำนวน"/>
            </BarChart>
        </ResponsiveContainer>

    );
};

export default UserViewMonths;
