'use client'
import FetchData from '@/app/components/FetchData'
import JoditEditor from 'jodit-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

const AddSpecialities = () => {
    const router = useRouter();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter Description...'
    }
    const [data, setData] = useState({ title: "", subtitle: "", image: "" });
    const [cookies, setCookie, removeCookies] = useCookies(['access_token']);
    const token = cookies.access_token;

    const handleChange = (e) => {
        if (e.target.id === 'image') {
            // Use append to add the file to FormData
            setData({ ...data, [e.target.name]: e.target.files?.[0] });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('title', data.title);
        formData.set('subtitle', data.subtitle);
        formData.append('image', data.image);
        formData.set('description', content);

        const { title, subtitle, image } = data;

        const maxLengthTitle = 49; // Adjust this value based on your database schema
        const maxLengthSubtitle = 99; // Adjust this value based on your database schema

        if (title.length > maxLengthTitle && subtitle.length > maxLengthSubtitle) {
            toast.error("Title is too long!");
            return; // Stop the submission process
        }

        if (!title || !subtitle || !content) {
            toast.error("All (*) fields Required!!!");
            return; // Stop the submission process
        }

        try {
            const res = await FetchData({ url: "app/create/Services", method: "POST", formdata: formData, authorization: `Bearer ${token}` });

            const result = await res.json();

            if (res.status === 400 || res.status === 409 || res.status === 500 || res.status === 415) {
                toast.error(res.error);
            }

            if (res.status === 201 || res.ok || res.status === 200) {
                router.push('/dashboard/specialities');
                setData({ heading: "", image: null });
                $('#image').val('');
                setContent('');
                toast.success("Service added !!!");
            } else {
                toast.error(res.title[0]);
            }

        } catch (error) {
            console.error("Service not added !!!", error);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Add New Service</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/specialities">Service</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">Add Service</Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-sm-12">
                    <div className="card">
                        <form className="blog-form" onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Title</label>
                                    <input type="text" name='title' value={data.title} onChange={handleChange} className="form-control" placeholder="Enter Title" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Sub Title</label>
                                    <input type="text" name='subtitle' value={data.subtitle} onChange={handleChange} className="form-control" placeholder="Enter Sub Title" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" >Service Image</label>
                                    <input type="file" id="image" onChange={handleChange} className="form-control" name='image' accept="image/gif, image/jpeg, image/png" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Description</label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => { }}
                                    />
                                    {/* <textarea className="form-control" cols="5" name="description" value={data.description} onChange={handleChange}></textarea> */}
                                    <small className="text-muted">Enter any size of text description here</small>
                                </div>

                                <div className="col-xs-12">
                                    <button type='submit' className="btn btn-primary">Save</button>
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

export default AddSpecialities