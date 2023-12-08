'use client'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import JoditEditor from 'jodit-react';
import FetchData from '@/app/components/FetchData';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const editor = useRef(null);
    const [data, setData] = useState({ first_name: "", last_name: "", gender: "", phone_no: "", address: "", city: "", state: "", email: "", password: "", roles: "" });
    const [dataSec, setDataSec] = useState({ cur_id: "", specialization: "", qualifications: "", experience: "", license_no: "", consultation_fees_online: "" });
    const [userId, setUserId] = useState('');
    const [cookies, setCookie] = useCookies(['access_token']);
    const token = cookies.access_token;
    const cur_id = cookies.current_id;

    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter bio...'
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { first_name, last_name, gender, phone_no, address, city, state, email, password, roles } = data;

        try {
            const res = await FetchData({ url: "registration_by_admin", body: data, method: "POST", authorization: `Bearer ${token}` });
            const result = await res.json();

            if (!first_name || !last_name || !email || !password || !phone_no) {
                toast.error("All (*) fields Required!!!");
            }

            if (password.length < 8) {
                toast.error(result.Error);
            }

            if (result.status === 400 || result.status === 409 || result.status === 500 || result.status === 415) {
                toast.error(result.Error);
            }

            if (result.status === 201 || res.ok) {
                setUserId(result.User_id);
                setTimeout(() => {
                    setCookie('current_id', result.User_id);
                }, 100);
                setData({ first_name: "", last_name: "", gender: "", phone_no: "", address: "", city: "", state: "", email: "", password: "", roles: "" });
                toast.success(result.Message);
            }

        } catch (error) {
            console.error("Doctor not added !!!", error)
        }
    }

    const handleChangeReg = (e) => {
        setData({ ...dataSec, [e.target.name]: e.target.value });
    }

    const handleSubmitReg = async (e) => {
        e.preventDefault();

        const { cur_id, specialization, qualifications, experience, license_no, consultation_fees_online, } = dataSec;

        try {
            const resRegister = await FetchData({ url: "doctor_registration", body: dataSec, method: "POST", authorization: `Bearer ${token}` });
            const resultReg = await resRegister.json();

            if (!license_no || !specialization) {
                toast.error("All (*) fields Required!!!");
            }

            if (resultReg.status === 400 || resultReg.status === 409 || resultReg.status === 500 || resultReg.status === 415) {
                toast.error(resultReg.Error);
            }

            if (resultReg.status === 201 || resRegister.ok) {
                setData({ cur_id: "", specialization: "", qualifications: "", experience: "", license_no: "", consultation_fees_online: "" });
                toast.success(resultReg.Message);
            }

        } catch (error) {
            console.error("Doctor not added !!!", error)
        }
    }

    useEffect(() => {
        if (userId) {
            setCookie('current_id', userId);
        }
    }, [userId, setCookie]);


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
                        <form className={cur_id || userId ? 'd-none' : 'first_form'} onSubmit={handleSubmit}>
                            <div className="card-header">
                                <h5 className="card-title">Basic Info</h5>
                            </div>

                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <label className="form-label">First Name *</label>
                                            <input type="text" name='first_name' value={data.first_name} onChange={handleChange} className="form-control" placeholder="Enter First Name" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Last Name *</label>
                                            <input type="text" name='last_name' value={data.last_name} onChange={handleChange} className="form-control" placeholder="Enter Last Name" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Gender</label>
                                            <select className="form-control" name='gender' value={data.gender} onChange={handleChange}>
                                                <option>--select--</option>
                                                <option defaultValue="male">Male</option>
                                                <option defaultValue="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Phone *</label>
                                            <input type="number" name='phone_no' value={data.phone_no} onChange={handleChange} className="form-control" placeholder="(+91) 123 456 7890" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Email *</label>
                                            <input type="email" name='email' value={data.email} onChange={handleChange} className="form-control" placeholder="Enter Email ID" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Password *</label>
                                            <input type="password" name="password" value={data.password} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3 form-group">
                                            <label className="form-label">Address</label>
                                            <input type="text" name='address' value={data.address} onChange={handleChange} className="form-control" placeholder="Enter Address" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">City</label>
                                            <input type="text" name='city' value={data.city} onChange={handleChange} className="form-control" placeholder="Enter City" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">State</label>
                                            <input type="text" name='state' value={data.state} onChange={handleChange} className="form-control" placeholder="Enter State" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">Role</label>
                                            <select className="form-control" name='roles' value={data.roles} onChange={handleChange}>
                                                <option>--select--</option>
                                                <option defaultValue="doctor">Doctor</option>
                                                <option defaultValue="patient">Patient</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-xs-12">
                                        <button type='submit' className="btn btn-primary">Save</button>
                                        <button type="reset" className="btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form className={cur_id || userId ? 'second_form' : 'd-none'} onSubmit={handleSubmitReg}>
                            <div className="card-header">
                                <h5 className="card-title">Doctor Qualification Info</h5>
                            </div>

                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label">User ID</label>
                                        <div className="controls">
                                            <input type="text" className="form-control" name='cur_id' defaultValue={cur_id || userId} placeholder='User ID' disabled />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" >Profile Image</label>
                                        <input type="file" className="form-control" name='image' value={dataSec.image} onChange={handleChangeReg} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Brief</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => { }}
                                        />
                                        {/* <textarea className="form-control" cols="5" name="brief_description"></textarea> */}
                                        <small className="text-muted">Enter any size of text description here</small>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Specialization</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='specialization' value={dataSec.specialization} onChange={handleChangeReg} placeholder='Enter Specialization' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Qualifications</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='qualifications' value={dataSec.qualifications} onChange={handleChangeReg} placeholder='Enter Qualifications' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Experience</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='experience' value={dataSec.experience} onChange={handleChangeReg} placeholder='Enter Experience' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Licence Number</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='license_no' value={dataSec.license_no} onChange={handleChangeReg} placeholder='Enter Licence Number' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-header">
                                <h5 className="card-title">Doctor Fees Info</h5>
                            </div>

                            <div className="card-body">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Consultation Fees Online</label>
                                            <input type="text" className="form-control" name='consultation_fees_online' value={dataSec.first_name} onChange={handleChangeReg} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                    <button type="reset" className="btn">Cancel</button>
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