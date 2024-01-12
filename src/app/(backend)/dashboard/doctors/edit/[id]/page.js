'use client'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import JoditEditor from 'jodit-react';
import FetchData from '@/app/components/FetchData';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useRouter} from 'next/navigation'

const EditDoctor = (id) => {
    const editor = useRef(null);
    const [data, setData] = useState();
    const [cookies, setCookie, removeCookies] = useCookies(['access_token']);
    const token = cookies.access_token;
    

    const id1 = id.params.id;
    const [userId, setUserId] = useState('');
    const [dataSec, setDataSec] = useState({ user: id || userId, specialization: "", image: "", qualifications: "", experience: "", license_no: "", consultation_fees_online: "" });

    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter bio...'
    }


    

    const handleChange = (e) => {
        if (e.target.id === 'image') {
            setDataSec({ ...dataSec, [e.target.name]: e.target.files?.[0] });
        } else {
            setDataSec({ ...dataSec, [e.target.name]: e.target.value });
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();

         const editDoctorData = new editDoctorData();
         editDoctorData.set('user', dataSec.user);
         editDoctorData.set('specialization', dataSec.specialization);
         editDoctorData.append('image', dataSec.image);
         editDoctorData.set('qualifications', dataSec.qualifications);
         editDoctorData.set('experience', dataSec.experience);
         editDoctorData.set('license_no', dataSec.license_no);
         editDoctorData.set('consultation_fees_online', dataSec.consultation_fees_online);
         editDoctorData.set('brief_description', content);

        const { license_no, specialization } = dataSec;

        if (!license_no || !specialization) {
            toast.error("All (*) fields Required!!!");
        }

        const resRegister = await fetch(`http://172.232.189.142:8000/user/update_doctor/2/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: editData,
        });

        try {
            const responseData = await resRegister.json();

            if (responseData.status === 400 || responseData.status === 409 || responseData.status === 500 || responseData.status === 415) {
                toast.error(responseData.error);
            }

            if (responseData.status === 201 || responseData.ok || responseData.status === 200) {
                removeCookies('current_id');
                setUserId('');
                setData({ id: "", specialization: "", qualifications: "", experience: "", license_no: "", consultation_fees_online: "" });
                toast.success(responseData.Message);
            } else {
                toast.error(responseData.user[0]);
            }

        } catch (error) {
            console.error("Doctor not added !!!", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await FetchData({ url: `doctor/${id.params.id}`, method: "GET", authorization: `Bearer ${token}` });
    
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const result = await res.json();
            
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
        if (userId) {
            setCookie('current_id', userId);
        }

      }, [token,userId, setCookie]);

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Edit Doctor</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/doctors">Doctors</Link></li>
                     
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-sm-12">
                    <div className="card">
                        <form className="edit_Form" onSubmit={handleEdit}encType='multipart/form-data'>
                            <div className="card-header">
                                <h5 className="card-title">Basic Info</h5>
                            </div>

                            <div className="card-body">
                                <div className="col-xs-12">
                                <div className="form-group">
                                        <label className="form-label">User ID</label>
                                        <div className="controls">
                                            <input type="number" className="form-control" name='user' defaultValue={id || userId} onChange={handleChange} placeholder='User ID' disabled />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <label className="form-label">First Name *</label>
                                            <input type="text" name='first_name' value={data?.user?.first_name}  className="form-control" placeholder="Enter First Name" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Last Name *</label>
                                            <input type="text" name='last_name' value={data?.user?.last_name} onChange={handleChange} className="form-control" placeholder="Enter Last Name" />
                                        </div>

                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Gender</label>
                                            <select className="form-control" name='gender' value={data?.user?.gender} onChange={handleChange}>
                                                <option>--select--</option>
                                                <option defaultValue="male">Male</option>
                                                <option defaultValue="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <label className="form-label">Phone *</label>
                                            <input type="number" name='phone_no' value={data?.user?.phone_no} onChange={handleChange} className="form-control" placeholder="(+91) 123 456 7890" />
                                        </div>

                
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3 form-group">
                                            <label className="form-label">Address</label>
                                            <input type="text" name='address' value={data?.user?.address} onChange={handleChange} className="form-control" placeholder="Enter Address" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">City</label>
                                            <input type="text" name='city' value={data?.user?.city} onChange={handleChange} className="form-control" placeholder="Enter City" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">State</label>
                                            <input type="text" name='state' value={data?.user?.state} onChange={handleChange} className="form-control" placeholder="Enter State" />
                                        </div>

                                        <div className="col-md-3 form-group">
                                            <label className="form-label">Country</label>
                                            <input type="text" name='state' value={data?.state} onChange={handleChange} className="form-control" placeholder="Enter Country" />
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                    

                            <div className="card-body">
                                <div className="col-xs-12">
                                   

                                    <div className="form-group">
                                        <label className="form-label" >Profile Image</label>
                                        <input type="file" id="image" className="form-control" name='image' onChange={handleChange} accept="image/gif, image/jpeg, image/png" />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Brief Description</label>
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
                                                <input type="text" className="form-control" name='specialization' value={data?.user?.specialization} onChange={handleChange} placeholder='Enter Specialization' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Qualifications</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='qualifications' value={data?.user?.qualifications} onChange={handleChange} placeholder='Enter Qualifications' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Experience</label>
                                            <div className="controls">
                                                <input type="number" className="form-control" name='experience' value={data?.user?.experience} onChange={handleChange} placeholder='Enter Experience' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="form-label">Licence Number</label>
                                            <div className="controls">
                                                <input type="text" className="form-control" name='license_no' value={data?.user?.license_no} onChange={handleChange} placeholder='Enter Licence Number' />
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
                                            <input type="number" className="form-control" name='consultation_fees_online' value={data?.user?.consultation_fees_online} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12">
                                        <button type='submit' className="btn btn-primary">Update</button>
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

export default EditDoctor