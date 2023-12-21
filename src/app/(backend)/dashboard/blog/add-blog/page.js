'use client'
import FetchData from '@/app/components/FetchData'
import JoditEditor from 'jodit-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter bio...'
    }
    const [data, setData] = useState({ title: "", subTitle: "", blog_image: "" });
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
        formData.set('subTitle', data.subTitle);
        // Use append to add the file to FormData
        formData.append('blog_image', data.blog_image);
        formData.set('description', content);

        const { title, subTitle } = data;

        if (!title || !content) {
            toast.error("All (*) fields Required!!!");
        }

        try {
            const res = await fetch(`http://172.232.189.142:8000/app/createBlog/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const result = await res.json();

            if (res.status === 400 || res.status === 409 || res.status === 500 || res.status === 415) {
                toast.error(res.error);
            }

            if (res.status === 201 || res.ok || res.status === 200) {
                setData({ title: "", subTitle: "", blog_image: null });
                $('#image').val('');
                setContent('');
                toast.success("Blog data added !!!");
            } else {
                toast.error(res.title[0]);
            }

        } catch (error) {
            console.error("Blog not added !!!", error);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Add New Blog</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/blog">Blog</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">Add Blog</Link></li>
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
                                    <input type="text" name='subTitle' value={data.subTitle} onChange={handleChange} className="form-control" placeholder="Enter Sub Title" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" >Blog Image</label>
                                    <input type="file" id="image" onChange={handleChange} className="form-control" name='blog_image' accept="image/gif, image/jpeg, image/png" />
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

export default AddBlog