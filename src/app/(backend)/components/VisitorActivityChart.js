"use client"
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
        name: '02:00',
        active: 2400,
        inactive: 2400,
    },
    {
        name: '03:00',
        active: 1398,
        inactive: 2210,
    },
    {
        name: '04:00',
        active: 9800,
        inactive: 2290,
    },
    {
        name: '05:00',
        active: 3908,
        inactive: 2000,
    },
    {
        name: '06:00',
        active: 4800,
        inactive: 2181,
    },
    {
        name: '07:00',
        active: 3800,
        inactive: 2500,
    },
    {
        name: '08:00',
        active: 4300,
        inactive: 2100,
    },
];

export default function VisitorActivityChart() {
    return (
        <AreaChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="active" stackId="1" stroke="#3695eb" fill="#3695eb" />
            <Area type="monotone" dataKey="inactive" stackId="1" stroke="#9acaf5" fill="#9acaf5" />
        </AreaChart>
    );
}
