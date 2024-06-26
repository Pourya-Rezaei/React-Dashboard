import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./UsersList.css"
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UsersList() {
    const [userData, setUserData] = useState([])
    const [userID, setUserID] = useState("")

    useEffect(() => {
        async function fetchUserData() {
            await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/Users.json", {
                method: "GET"
            })
                .then(res => res.json())
                .then(data => (
                    setUserData(Object.entries(data)),
                    console.log(data)
                ))
        }
        fetchUserData()
    }, [])

    const userDeleteHandler = async () => {
        await fetch(`https://react-db-c0aaf-default-rtdb.firebaseio.com/Users/${userID}.json`, {
            method: "DELETE"
        }).then(res => console.log(res))
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90
        },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to={"/"} className='user-link'>
                        <div className="user-list__user">
                            <img src="./images/user3.jpg" className='user-list__image' />
                            {params.row.username}
                        </div>
                    </Link>
                )
            }
        },
        {
            field: "email",
            headerName: "Email",
            width: 200
        },
        {
            field: "status",
            headerName: "Status",
            width: 120
        },
        {
            field: "transaction",
            headerName: "Transaction",
            width: 160
        },
        {
            field: "acion",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <div className="user-action__btn">
                            <Link to={`/user/${params.row.id}`}>
                                <button className='user-list__edit'>Edit</button>
                            </Link>
                            <DeleteOutlineIcon
                                onClick={() => userDeleteHandler(
                                    setUserID(params.row.id),
                                    console.log(params.row)
                                )}
                                className='user-list__delete'
                            />
                        </div>
                    </>
                )
            }
        },

    ]


    return (
        <>
            <div className="user-list">
                <DataGrid
                    rows={userData.map(user => user[1])}
                    columns={columns}
                    pageSize={2}
                />
            </div>
        </>
    )
}
