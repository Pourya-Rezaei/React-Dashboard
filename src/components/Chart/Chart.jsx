import React from 'react'
import "./Chart.css"
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import xAxisData from './ChartData';

export default function Chart({ title, data, dataKey, grid }) {

    return (
        <>
            <div className="chart">
                <h3 className='chart-title'>{title}</h3>
                <ResponsiveContainer width={"100%"} aspect={4}>
                    <LineChart data={data}>
                        <XAxis dataKey={"name"} stroke='#5550db' />
                        {grid && <CartesianGrid stroke="#eee" strokeDasharray="5 5" />}
                        <Line type="monotone" dataKey={dataKey} stroke='#5550db' />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
