"use client"
import JoditEditor from 'jodit-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

const Edit = () => {
    const params = useParams();
    const id = params.id
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter bio...'
    }
    const [data, setData] = useState({ title: "", subTitle: "", blog_image: "", approved: "", availablity: "", description: "" });
    const [cookies, setCookie, removeCookies] = useCookies(['access_token']);
    const token = cookies.access_token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://172.232.189.142:8000/app/update_blog/${id}/`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const postData = await res.json();

                setData(postData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    const handleInputChange = (e) => {
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
        formData.set('subTitle', data.subTitle);
        formData.set('approved', data.approved);
        formData.set('availablity', data.availablity);
        formData.set('description', content);
        formData.append('blog_image', data.blog_image);

        try {
            const res = await fetch(`http://172.232.189.142:8000/app/update_blog/${id}/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Failed to update blog');
            }

            toast.success("Blog updated successfully!");
        } catch (error) {
            console.error("Error updating blog:", error);
            toast.error("Failed to update blog");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Edit Blog</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/blog">Blog</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">Edit Blog</Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-sm-12">
                    <div className="card">
                        <form className="blog-form" onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2 form-group">
                                        <label className="form-label">Blog Id</label>
                                        <input type="text" name='blog_id' value={data.blog_id} onChange={handleInputChange} className="form-control" readOnly />
                                    </div>
                                    <div className="col-md-2 form-group">
                                        <label className="form-label">Created by user id</label>
                                        <input type="text" name='created_by' value={data.created_by} onChange={handleInputChange} className="form-control" readOnly />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Title</label>
                                    <input type="text" name='title' value={data.title} onChange={handleInputChange} className="form-control" placeholder="Enter Title" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Sub Title</label>
                                    <input type="text" name='subTitle' value={data.subTitle} onChange={handleInputChange} className="form-control" placeholder="Enter Sub Title" />
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="form-group">
                                            <label className="form-label">Status</label>
                                            <select name="approved" className="form-control" value={data.approved} onChange={handleInputChange}>
                                                <option value="Pending">Pending</option>
                                                <option value="Approved">Approved</option>
                                                <option value="Unapproved">Unapproved</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Availability</label>
                                            <select name="availablity" className="form-control" value={data.availablity ? 'Show' : 'Hide'} onChange={handleInputChange}>
                                                <option value="Show">Show</option>
                                                <option value="Hide">Hide</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" >Blog Image</label>
                                            <input type="file" id="image" className="form-control" name='blog_image' onChange={handleInputChange} accept="image/gif, image/jpeg, image/png" />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <img src={`http://172.232.189.142:8000/${data.blog_image}`} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="form-label">Brief</label>
                                    <JoditEditor
                                        ref={editor}
                                        value={data.description}
                                        config={config}
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => { }}
                                    />
                                    {/* <textarea className="form-control" cols="5" name="description" value={data.description} </textarea> */}
                                    <small className="text-muted">Enter any size of text description here</small>
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

export default Edit