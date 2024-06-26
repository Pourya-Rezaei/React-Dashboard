import React from 'react'
import "./Topbar.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <h2 className="topbar__logo">
                        Dashboard
                    </h2>
                </div>
                <div className="topbar-right">
                    <div className="topbar-icon-container">
                        <NotificationsActiveIcon />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <LanguageIcon />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <SettingsIcon />
                    </div>
                    <img src="images/user3.jpg" alt="" className="topbar-right__img" />
                </div>
            </div>
        </div>
    )
}
