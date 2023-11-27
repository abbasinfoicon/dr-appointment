import Link from 'next/link'
import React from 'react'

const Profile = () => {
    return (
        <div className="dashboard_content dashboard_profile">
            <h5>Edit Profile info</h5>
            <form className="mb-5">
                <Link href="/dashboard">Cancel</Link>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dashboard_profile_form">
                            <label>Fast Name</label>
                            <input type="text" className='form-control' placeholder="Addition" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>last Name</label>
                            <input type="text" className='form-control' placeholder="Smith" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>phone</label>
                            <input type="text" className='form-control' placeholder="+880-161568-59689 " />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>email</label>
                            <input type="text" className='form-control' placeholder="Company@gmail.com" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Weight</label>
                            <input type="text" className='form-control' placeholder="66" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Gender</label>
                            <input type="text" className='form-control' placeholder="male" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard_profile_form">
                            <label>Age</label>
                            <input type="text" className='form-control' placeholder="35" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dashboard_profile_form">
                            <label>Address</label>
                            <input type="text" className='form-control' placeholder="12/3 Mirpur Dhaka Bangladesh" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button className="common_btn">Save Change</button>
                    </div>
                </div>
            </form>
            <h5>Change password</h5>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dashboard_profile_form">
                            <label>old Password</label>
                            <input type="text" className='form-control' placeholder="Old Password" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dashboard_profile_form">
                            <label>new Password</label>
                            <input type="text" className='form-control' placeholder="New Password" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="dashboard_profile_form">
                            <label>Change Password</label>
                            <input type="text" className='form-control' placeholder="ChangePassword" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <button className="common_btn">Save Change</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile