import Link from 'next/link'
import React from 'react'

const AddDoctor = () => {
    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Add New Doctor</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/doctors">Doctors</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">Add Doctor</Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-sm-12">
                    <div className="card">
                        <form action="#" method="post">
                            <div className="card-header">
                                <h5 className="card-title">Basic Info</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label" for="add-name">Name</label>
                                        <input type="text" className="form-control" id="add-name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-date">Date of Birth</label>
                                        <input type="text" id="add-date" className="form-control datepicker" data-format="mm/dd/yyyy" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-gender">Gender</label>
                                        <select className="form-control">
                                            <option></option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-profile">Profile Image</label>
                                        <input type="file" className="form-control" id="add-profile" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-speciality">Speciality</label>
                                        <div className="controls">
                                            <input type="text" className="form-control" id="add-speciality" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-brief">Brief</label>
                                        <textarea className="form-control" cols="5" id="add-brief"></textarea>
                                        <small className="text-muted">Enter any size of text description here</small>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-website">Website URL</label>
                                        <input type="text" className="form-control" id="add-website" />
                                    </div>
                                </div>
                            </div>

                            <div className="card-header">
                                <h5 className="card-title">Doctor Account Info</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label" for="add-email">Email</label>
                                        <input type="text" className="form-control" id="add-email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-phone">Phone</label>
                                        <input type="text" className="form-control" id="add-phone" data-mask="phone" placeholder="(+91) 123 456 7890" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-password">Password</label>
                                        <input type="password" value="" className="form-control" id="add-password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-con-password">Confirm Password</label>
                                        <input type="password" value="" className="form-control" id="add-con-password" />
                                    </div>
                                </div>
                            </div>

                            <div className="card-header">
                                <h5 className="card-title">Doctor Social Media Info</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label" for="add-facebook">Facebook URL</label>
                                        <input type="text" className="form-control" value="http://www.facebook.com" id="add-facebook" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-twitter">Twitter URL</label>
                                        <input type="text" className="form-control" value="http://www.twitter.com" id="add-twitter" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="add-google">Google Plus URL</label>
                                        <input type="text" className="form-control" value="http://www.plus.google.com" id="add-google" />
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoctor