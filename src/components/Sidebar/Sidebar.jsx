import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


import { Link } from 'react-router-dom';



export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">
                            Dashboard
                        </h3>
                        <ul className="sidebar-list">
                            <Link to={"/"} className={"link"}>
                                <li className="sidebar-list__item active">
                                    <LineStyleIcon className='sidebar__icon' />
                                    <span className="sidebar__text">Home</span>
                                </li>
                            </Link>

                            <li className="sidebar-list__item ">
                                <TimelineIcon className='sidebar__icon' />
                                <span className="sidebar__text">Analytics</span>
                            </li>
                            <li className="sidebar-list__item">
                                <TimelineIcon className='sidebar__icon' />
                                <span className="sidebar__text">Sale</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">
                            Quick Menu
                        </h3>
                        <ul className="sidebar-list">
                            <Link to={"/users"} className={"link"}>
                                <li className="sidebar-list__item ">
                                    <PermIdentityIcon className='sidebar__icon' />
                                    <span className="sidebar__text">Users</span>
                                </li>
                            </Link>

                            <Link to={"/newUser"} className={"link"}>
                                <li className="sidebar-list__item">
                                    <PermIdentityIcon className='sidebar__icon' />
                                    <span className="sidebar__text">New Users</span>
                                </li>
                            </Link>

                            <Link to={"/products"} className={"link"}>
                                <li className="sidebar-list__item ">
                                    <StorefrontIcon className='sidebar__icon' />
                                    <span className="sidebar__text">Products</span>
                                </li>
                            </Link>


                            <li className="sidebar-list__item">
                                <AttachMoneyIcon className='sidebar__icon' />
                                <span className="sidebar__text">Transactions</span>
                            </li>
                            <li className="sidebar-list__item">
                                <AssessmentOutlinedIcon className='sidebar__icon' />
                                <span className="sidebar__text">Logs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">
                            Notifications
                        </h3>
                        <ul className="sidebar-list">
                            <li className="sidebar-list__item ">
                                <MailOutlineIcon className='sidebar__icon' />
                                <span className="sidebar__text">Mail</span>
                            </li>
                            <li className="sidebar-list__item">
                                <DynamicFeedIcon className='sidebar__icon' />
                                <span className="sidebar__text">Feedback</span>
                            </li>
                            <li className="sidebar-list__item ">
                                <MessageOutlinedIcon className='sidebar__icon' />
                                <span className="sidebar__text">Message</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-menu">
                        <h3 className="sidebar-title">
                            Staff
                        </h3>
                        <ul className="sidebar-list">
                            <li className="sidebar-list__item ">
                                <ManageAccountsIcon className='sidebar__icon' />
                                <span className="sidebar__text">Manage</span>
                            </li>
                            <li className="sidebar-list__item">
                                <TimelineIcon className='sidebar__icon' />
                                <span className="sidebar__text">Analytics</span>
                            </li>
                            <li className="sidebar-list__item ">
                                <ReportGmailerrorredIcon className='sidebar__icon' />
                                <span className="sidebar__text">Reports</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
