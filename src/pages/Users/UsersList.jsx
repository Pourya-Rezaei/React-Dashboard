import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./UsersList.css";
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UsersList() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const response = await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/Users.json");
            const data = await response.json();
            const formattedData = Object.entries(data).map(([id, user]) => ({ id, ...user }));
            setUserData(formattedData);
        }
        fetchUserData();
        const interval = setInterval(() => {
            fetchUserData();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const userDeleteHandler = async (userId) => {
        await fetch(`https://react-db-c0aaf-default-rtdb.firebaseio.com/Users/${userId}.json`, {
            method: "DELETE"
        });
        setUserData((prevData) => prevData.filter(user => user.id !== userId));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => (
                <Link to={"/"} className='user-link'>
                    <div className="user-list__user">
                        <img src="./images/user3.jpg" className='user-list__image' alt="user" />
                        {params.row.name}
                    </div>
                </Link>
            )
        },
        { field: "email", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 120 },
        { field: "transaction", headerName: "Transaction", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => (
                <div className="user-action__btn">
                    <Link to={`/user/${params.row.id}`}>
                        <button className='user-list__edit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon
                        onClick={() => userDeleteHandler(params.row.id)}
                        className='user-list__delete'
                    />
                </div>
            )
        },
    ];

    return (
        <div className="user-list">
            <DataGrid
                rows={userData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
}
