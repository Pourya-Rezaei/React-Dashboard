import React, { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetSm.css"

export default function WidgetSm() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/newUsers.json", {
                method: "GET"
            })
                .then(
                    res => res.json()
                )
                .then(data => {
                    setUserData(Object.entries(data))
                    console.log(data)
                })
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="widget-sm">

                <span className="widget-sm__title">New Join Members</span>
                <ul className="widget-sm__list">
                    {userData.map(member => (
                        <li className="widget-sm__list-item" key={member[0].id}>
                            <img src="./images/user3.jpg" alt="" className="widget-sm__img" />
                            <div className="widget-sm__user">
                                <span className="widget-sm__user-name">{member[1].name}</span>
                                <span className="widget-sm__user-title">{member[1].title}</span>
                            </div>
                            <button className="widget-sm__btn">
                                <VisibilityIcon className='widget-sm__icon' />
                            </button>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}
