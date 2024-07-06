import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import ProductsData from './ProductsData'

import PublishIcon from '@mui/icons-material/Publish';
export default function Product() {
    return (
        <>
            <div className="product">
                <div className="product-title-container">
                    <h1 className="product-title">
                        Product
                    </h1>
                    <Link to={"/newProduct"}>
                        <button className="product-add__btn">
                            Create
                        </button>
                    </Link>
                </div>
                <div className="product-top">
                    <div className="product-top__left">
                        <Chart title={"Sale In Month"} data={ProductsData} dataKey={"sale"} />
                    </div>
                    <div className="product-top__right">
                        <div className="product-info__top">
                            <img src="/images/l.jpg" alt="" className="product-info__img" />
                            <span className="product-top__name">
                                Asus Laptop
                            </span>
                        </div>
                        <div className="product-info__botton">
                            <div className="product-info__item">
                                <div className="product-info__key">
                                    ID:
                                </div>
                                <div className="product-info__value">
                                    182
                                </div>
                            </div>
                            <div className="product-info__item">
                                <div className="product-info__key">
                                    Name:
                                </div>
                                <div className="product-info__value">
                                    Asus
                                </div>
                            </div>
                            <div className="product-info__item">
                                <div className="product-info__key">
                                    Sales:
                                </div>
                                <div className="product-info__value">
                                    $250.000
                                </div>
                            </div>
                            <div className="product-info__item">
                                <div className="product-info__key">
                                    Active:
                                </div>
                                <div className="product-info__value">
                                    Yes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-bottom">
                    <form className="product-form">
                        <div className="product-form__left">
                            <label>Product Name</label>
                            <input type="text" placeholder='Asus Laptop' />

                            <label>In Stock</label>
                            <select id="in-stock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                            <label>Active</label>
                            <select id="in-stock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="product-form__right">
                            <div className="product-uploader">
                                <img src="/images/l.jpg" alt="" className='product-upload__img' />
                            </div>
                            <input type="file" style={{ display: "none" }} />
                            <button className='product-btn'>
                                Upload (Edit)
                                <PublishIcon />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
