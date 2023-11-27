import React from 'react'

const Appointment = () => {
    return (
        <div className="dashboard_content">
            <h5>Appointment History</h5>
            <div className="appointment_history">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="sn">
                                    SN
                                </th>
                                <th className="name">
                                    Doctor
                                </th>

                                <th className="date">
                                    Date
                                </th>

                                <th className="chamber">
                                    Chamber
                                </th>

                                <th className="status">
                                    Status
                                </th>

                                <th className="edit">
                                    Action
                                </th>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>1</p>
                                </td>

                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>

                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>

                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>

                                <td className="status">
                                    <button>Complete</button>
                                </td>

                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>2</p>
                                </td>
                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>
                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>
                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>
                                <td className="status">
                                    <button className="pending_btn">Pending</button>
                                </td>
                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>3</p>
                                </td>
                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>
                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>
                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>
                                <td className="status">
                                    <button>Complete</button>
                                </td>
                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>4</p>
                                </td>
                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>
                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>
                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>
                                <td className="status">
                                    <button className="pending_btn">Pending</button>
                                </td>
                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>5</p>
                                </td>
                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>
                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>
                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>
                                <td className="status">
                                    <button>Complete</button>
                                </td>
                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                            <tr className="tabile_row">
                                <td className="sn">
                                    <p>6</p>
                                </td>
                                <td className="name">
                                    <p>Dr. Samuel Bro</p>
                                    <span>Dental</span>
                                </td>
                                <td className="date">
                                    <p>05 Jun 2023</p>
                                    <span className="date_time">4:30 PM</span>
                                </td>
                                <td className="chamber">
                                    <p>12/3 Mirpur Dhaka Bangladesh</p>
                                </td>
                                <td className="status">
                                    <button className="pending_btn">Pending</button>
                                </td>
                                <td className="edit">
                                    <a href="#">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt_60">
                <div className="col-12">
                    <div id="pagination">
                        <nav aria-label="...">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a className="page-link" href="#"><i
                                    className="fa fa-angle-double-left"></i></a></li>
                                <li className="page-item"><a className="page-link active" href="#">01</a></li>
                                <li className="page-item"><a className="page-link" href="#">02</a></li>
                                <li className="page-item"><a className="page-link" href="#">03</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i
                                    className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment