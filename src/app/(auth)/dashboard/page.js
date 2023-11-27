import Banner from '@/app/components/Banner'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="dashboard_content">
            <h5>overview</h5>

            <div className="row">
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-handshake-o" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Total Appointment</p>
                            <h3>255</h3>
                            <p>15 Today</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Done Appointment</p>
                            <h3>220</h3>
                            <p>12 Today</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Pending Appointment</p>
                            <h3>35</h3>
                            <p>5 Today</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Total Payment</p>
                            <h3>255</h3>
                            <p>15 Today</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-star" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Total Review</p>
                            <h3>220</h3>
                            <p>5 Today</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="dashboard_overview">
                        <div className="icon"><i className="fa fa-snowflake-o" aria-hidden="true"></i></div>
                        <div className="text">
                            <p>Any One</p>
                            <h3>35</h3>
                            <p>5 Today</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard_profile">
                <h5>Profile information</h5>
                <Link href="/dashboard/profile">edit</Link>
                <ul>
                    <li><span>Name:</span> Smith Jhon</li>
                    <li><span>Phone:</span> +880-161568-59689 </li>
                    <li><span>Email:</span> example@gmail.com</li>
                    <li><span>Gender:</span> Male</li>
                    <li><span>Weight:</span> 64kg</li>
                    <li><span>Age:</span> 35</li>
                    <li><span>Adress:</span> 2767 Sunrise Street, NY 1002, USA</li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard