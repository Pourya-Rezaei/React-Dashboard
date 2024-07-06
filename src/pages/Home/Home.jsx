import React, { useState, useEffect } from 'react'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import "./Home.css"
import xAxisData from '../../components/Chart/ChartData'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
export default function Home() {
    const [chart, setChart] = useState([])
    useEffect(() => {
        async function fetchData() {
            await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/Chart.json", {
                method: "GET"
            })
                .then(res => res.json())
                .then(data => {
                    setChart(Object.entries(data))
                })
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="home">
                <Features />
                <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"Sale"} />

                <div className="home-widgets">
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
        </>
    )
}
