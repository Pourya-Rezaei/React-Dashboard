import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Products.css";
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Products() {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        async function fetchProductsData() {
            const response = await fetch("https://react-db-c0aaf-default-rtdb.firebaseio.com/Products.json");
            const data = await response.json();
            const formattedData = Object.entries(data).map(([id, products]) => ({ id, ...products }));
            setProductsData(formattedData);
        }
        fetchProductsData();
        const interval = setInterval(() => {
            fetchProductsData();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const productsDeleteHandler = async (productId) => {

        await fetch(`https://react-db-c0aaf-default-rtdb.firebaseio.com/Users/${productId}.json`, {
            method: "DELETE"
        });

        setProductsData((prevData) => prevData.filter(product => product.id !== productId));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "Brand",
            headerName: "Brand",
            width: 200,
            renderCell: (params) => (
                <Link to={`/product/${params.row.id}`} className='user-link'>
                    <div className="user-list__user">
                        <img src="./images/l.jpg" className='user-list__image' alt="user" />
                        {params.row.title}
                    </div>
                </Link>
            )
        },
        { field: "price", headerName: "Price", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => (
                <div className="user-action__btn">
                    <Link to={`/product/${params.row.id}`}>
                        <button className='user-list__edit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon
                        onClick={() => productsDeleteHandler(params.row.id)}
                        className='user-list__delete'
                    />
                </div>
            )
        },
    ];

    return (
        <div className="user-list">
            <DataGrid
                rows={productsData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
}
