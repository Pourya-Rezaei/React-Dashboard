import React, { useState, useEffect } from 'react'
import "./WidgetLg.css"

export default function WidgetLg() {
    const [customer, setCustomer] = useState([])
    const Button = ({ type }) => {
        return <button className={'widget-lg__btn ' + type}>{type}</button>
    }

    useEffect(() => {
        async function fetchData() {
            await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/Customers.json", {
                method: "GET"
            })
                .then(
                    res => res.json()
                )
                .then(
                    data => {
                        setCustomer(Object.entries(data))
                        console.log(data)
                    }
                )
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="widget-lg">
                <h3 className="widget-lg__title">
                    Last TransActions
                </h3>
                <table className="widget-lg__table">
                    <tr className="widget-lg__tr">
                        <th className="widge-lg-th">
                            Customer
                        </th>
                        <th className="widge-lg-th">
                            Date
                        </th>
                        <th className="widge-lg-th">
                            Amount
                        </th>
                        <th className="widge-lg-th">
                            Status
                        </th>
                    </tr>
                    {customer.map(custom => (

                        <tr className="widge-lg__tr">
                            <td className="widget-lg__user">
                                <img src="./images/user3.jpg" alt="" className='widget-lg__img' />
                                <span className="widget-lg__username">
                                    {custom[1].name}
                                </span>
                            </td>
                            <td className="widget-lg__date">
                                {custom[1].date}
                            </td>
                            <td className="widget-lg__amount">
                                {custom[1].amount}
                            </td>
                            <td className='widget-lg__status'>
                                <Button type={custom[1].status} />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
