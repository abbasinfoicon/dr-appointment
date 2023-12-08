"use client"
import React from 'react'
import VisitorActivityChart from '../components/VisitorActivityChart'
import SimpleUserChart from '../components/SimpleUserChart'
import PharmacyOrderChart from '../components/PharmacyOrderChart'

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="widget-stat card">
                        <div className="card-body">
                            <div className="media ai-icon">
                                <span className="mr-3">
                                    <svg id="icon-customers" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </span>
                                <div className="media-body">
                                    <p className="mb-1">Patient</p>
                                    <h4 className="mb-0">3280</h4>
                                    <span className="badge badge-primary">+3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="widget-stat card">
                        <div className="card-body">
                            <div className="media ai-icon">
                                <span className="mr-3">
                                    <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </span>
                                <div className="media-body">
                                    <p className="mb-1">Bills</p>
                                    <h4 className="mb-0">2570</h4>
                                    <span className="badge badge-warning">+3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="widget-stat card">
                        <div className="card-body">
                            <div className="media ai-icon">
                                <span className="mr-3">
                                    <svg id="icon-revenue" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </span>
                                <div className="media-body">
                                    <p className="mb-1">Revenue</p>
                                    <h4 className="mb-0">364.50K</h4>
                                    <span className="badge badge-danger">-3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="widget-stat card">
                        <div className="card-body">
                            <div className="media ai-icon">
                                <span className="mr-3">
                                    <svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database">
                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                    </svg>
                                </span>
                                <div className="media-body">
                                    <p className="mb-1">Patient</p>
                                    <h4 className="mb-0">364.50K</h4>
                                    <span className="badge badge-success">-3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="profile-photo">
                                    <img src="assets/images/profile/profile.png" width="100" className="img-fluid rounded-circle" alt="" />
                                </div>
                                <h3 className="mt-4 mb-1">Deangelo Sena</h3>
                                <p className="text-muted">Senior Doctor</p>
                                <a className="btn btn-outline-primary btn-rounded mt-3 pl-5 pr-5" href="#">Folllow</a>
                            </div>
                        </div>
                        <div className="card-footer pt-0 pb-0 text-center">
                            <div className="row">
                                <div className="col-4 pt-3 pb-3 border-right">
                                    <h3 className="mb-1">150</h3><span>Follower</span>
                                </div>
                                <div className="col-4 pt-3 pb-3 border-right">
                                    <h3 className="mb-1">140</h3><span>Place Stay</span>
                                </div>
                                <div className="col-4 pt-3 pb-3">
                                    <h3 className="mb-1">45</h3><span>Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-8 col-xxl-8 col-lg-8 col-md-12 col-sm-12">
                    <div id="user-activity" className="card">
                        <div className="card-header">
                            <h4 className="card-title">Visitor Activity</h4>
                            <div className="card-action">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#user" role="tab">
                                            Day
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#session" role="tab">
                                            Week
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#bounce" role="tab">
                                            Month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#session-duration" role="tab">
                                            Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="user" role="tabpanel">
                                    <VisitorActivityChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Timeline</h4>
                        </div>
                        <div className="card-body">
                            <div className="widget-timeline">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-badge primary"></div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>10 minutes ago</span>
                                            <h6 className="m-t-5">Youtube, a video-sharing website, goes live.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge warning">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>20 minutes ago</span>
                                            <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge danger">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>30 minutes ago</span>
                                            <h6 className="m-t-5">Google acquires Youtube.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge success">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>15 minutes ago</span>
                                            <h6 className="m-t-5">StumbleUpon is acquired by eBay. </h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge warning">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>20 minutes ago</span>
                                            <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge dark">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>20 minutes ago</span>
                                            <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge info">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>30 minutes ago</span>
                                            <h6 className="m-t-5">Google acquires Youtube.</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="timeline-badge danger">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>30 minutes ago</span>
                                            <h6 className="m-t-5">Google acquires Youtube.</h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge success">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>15 minutes ago</span>
                                            <h6 className="m-t-5">StumbleUpon is acquired by eBay. </h6>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="timeline-badge warning">
                                        </div>
                                        <a className="timeline-panel text-muted" href="#">
                                            <span>20 minutes ago</span>
                                            <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Doctor List</h4>
                        </div>
                        <div className="py-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a className="timeline-panel text-muted d-flex align-items-center" href="#">
                                        <img className="rounded-sm" alt="image" width="50" src="assets/images/avatar/1.jpg" />
                                        <div className="col pr-1">
                                            <h5 className="mb-1">James Logan</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="d-block">Dentist - Specialist</small>
                                                <div className="rating-bar">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a className="timeline-panel text-muted d-flex align-items-center" href="#">
                                        <img className="rounded-sm" alt="image" width="50" src="assets/images/avatar/2.jpg" />
                                        <div className="col pr-1">
                                            <h5 className="mb-1">Muhammad Clay</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="d-block">Fever - Specialist</small>
                                                <div className="rating-bar">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a className="timeline-panel text-muted d-flex align-items-center" href="#">
                                        <img className="rounded-sm" alt="image" width="50" src="assets/images/avatar/3.jpg" />
                                        <div className="col pr-1">
                                            <h5 className="mb-1">Jacob Tucker</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="d-block">Dentist - Specialist</small>
                                                <div className="rating-bar">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a className="timeline-panel text-muted d-flex align-items-center" href="#">
                                        <img className="rounded-sm" alt="image" width="50" src="assets/images/avatar/4.jpg" />
                                        <div className="col pr-1">
                                            <h5 className="mb-1">Harry Parker</h5>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small className="d-block">Fever - Specialist</small>
                                                <div className="rating-bar">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Pharmacy Orders</h4>
                            <div className="card-action">
                                <div className="dropdown custom-dropdown">
                                    <div data-toggle="dropdown">
                                        <i className="ti-more-alt"></i>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Option 1</a>
                                        <a className="dropdown-item" href="#">Option 2</a>
                                        <a className="dropdown-item" href="#">Option 3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-wrapper">
                            <div className="mt-5 pt-2">
                                <PharmacyOrderChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="card active_users">
                        <div className="card-header">
                            <h4 className="card-title">Active Users</h4>
                            <span id="counter"></span>
                        </div>
                        <div className="card-body pt-5">
                            <SimpleUserChart />
                        </div>
                    </div>
                </div>

                <div className="col-xl-8 col-xxl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Recent Payments Queue</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive recentOrderTable">
                                <table className="table verticle-middle table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ward No.</th>
                                            <th scope="col">Patient</th>
                                            <th scope="col">Dr Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Bills</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12</td>
                                            <td>Mr. Bobby</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                            <td><span className="badge badge-rounded badge-primary">Checkin</span></td>
                                            <td>$120</td>
                                            <td>
                                                <div className="dropdown custom-dropdown mb-0">
                                                    <div data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Details</a>
                                                        <a className="dropdown-item text-danger" href="#">Cancel</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10 </td>
                                            <td>Mr. Dexter</td>
                                            <td>Dr. Charles</td>
                                            <td>31 July 2020</td>
                                            <td><span className="badge badge-rounded badge-warning">Panding</span></td>
                                            <td>$540</td>
                                            <td>
                                                <div className="dropdown custom-dropdown mb-0">
                                                    <div data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Details</a>
                                                        <a className="dropdown-item text-danger" href="#">Cancel</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03 </td>
                                            <td>Mr. Nathan</td>
                                            <td>Dr. Frederick</td>
                                            <td>30 July 2020</td>
                                            <td><span className="badge badge-rounded badge-danger">Canceled</span></td>
                                            <td>$301</td>
                                            <td>
                                                <div className="dropdown custom-dropdown mb-0">
                                                    <div data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Details</a>
                                                        <a className="dropdown-item text-danger" href="#">Cancel</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>Mr. Aurora</td>
                                            <td>Dr. Roman</td>
                                            <td>29 July 2020</td>
                                            <td><span className="badge badge-rounded badge-success">Checkin</span></td>
                                            <td>$099</td>
                                            <td>
                                                <div className="dropdown custom-dropdown mb-0">
                                                    <div data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Details</a>
                                                        <a className="dropdown-item text-danger" href="#">Cancel</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>Mr. Matthew</td>
                                            <td>Dr. Samantha</td>
                                            <td>28 July 2020</td>
                                            <td><span className="badge badge-rounded badge-success">Checkin</span></td>
                                            <td>$520</td>
                                            <td>
                                                <div className="dropdown custom-dropdown mb-0">
                                                    <div data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Details</a>
                                                        <a className="dropdown-item text-danger" href="#">Cancel</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="social-graph-wrapper widget-facebook">
                            <span className="s-icon"><i className="fa fa-facebook"></i></span>
                        </div>
                        <div className="row">
                            <div className="col-6 border-right">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                                    <p className="m-0">Friends</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                                    <p className="m-0">Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="social-graph-wrapper widget-linkedin">
                            <span className="s-icon"><i className="fa fa-linkedin"></i></span>
                        </div>
                        <div className="row">
                            <div className="col-6 border-right">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                                    <p className="m-0">Friends</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                                    <p className="m-0">Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="social-graph-wrapper widget-googleplus">
                            <span className="s-icon"><i className="fa fa-google-plus"></i></span>
                        </div>
                        <div className="row">
                            <div className="col-6 border-right">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                                    <p className="m-0">Friends</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                                    <p className="m-0">Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="social-graph-wrapper widget-twitter">
                            <span className="s-icon"><i className="fa fa-twitter"></i></span>
                        </div>
                        <div className="row">
                            <div className="col-6 border-right">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">89</span> k</h4>
                                    <p className="m-0">Friends</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                    <h4 className="m-1"><span className="counter">119</span> k</h4>
                                    <p className="m-0">Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard