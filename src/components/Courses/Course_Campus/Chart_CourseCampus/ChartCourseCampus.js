import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar, Cell, Text
} from 'recharts';
import '../../../../styles/course_chart.css'


const ChartCourseCampus = ({data}) => {

    return (
        <div >
            <ResponsiveContainer
                width="100%"
                aspect={3}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar
                        dataKey="value"
                        fill="#85B8CB"
                        name="จำนวนรายวิชา"/>

                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default ChartCourseCampus;
