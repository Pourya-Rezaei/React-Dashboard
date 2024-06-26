import React from 'react'
import "./Features.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Features() {
    return (
        <>
            <div className="features">
                <div className="feature-items">
                    <span className="feature-title">
                        Revanue
                    </span>
                    <div className="feature-container">
                        <span className="feature-money">
                            $2.415
                        </span>
                        <span className="feature-rate">
                            -11.4
                            <ArrowDownwardIcon className='feature-icon negative' />
                        </span>
                    </div>
                    <span className="feature-sub">
                        Compared to last month
                    </span>
                </div>
                <div className="feature-items">
                    <span className="feature-title">
                        Sale
                    </span>
                    <div className="feature-container">
                        <span className="feature-money">
                            $2.415
                        </span>
                        <span className="feature-rate">
                            -1.4
                            <ArrowDownwardIcon className='feature-icon negative' />
                        </span>
                    </div>
                    <span className="feature-sub">
                        Compared to last month
                    </span>
                </div>
                <div className="feature-items">
                    <span className="feature-title">
                        Cost
                    </span>
                    <div className="feature-container">
                        <span className="feature-money">
                            $2.415
                        </span>
                        <span className="feature-rate">
                            -11.4
                            <ArrowUpwardIcon className='feature-icon' />
                        </span>
                    </div>
                    <span className="feature-sub">
                        Compared to last month
                    </span>
                </div>
            </div>
        </>
    )
}
