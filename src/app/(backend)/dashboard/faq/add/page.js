'use client'
import FetchData from '@/app/components/FetchData'
import JoditEditor from 'jodit-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

const AddFaq = () => {
    const router = useRouter();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter Description...'
    }
    const [data, setData] = useState({ question: "", answer: "" });
    const [cookies, setCookie, removeCookies] = useCookies(['access_token']);
    const token = cookies.access_token;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('question', data.question);
        formData.set('answer', content);

        const { question } = data;

        if (!question || !content) {
            toast.error("All (*) fields Required!!!");
        }

        try {
            const res = await FetchData({ url: "FAQ/admin", method: "POST", formdata: formData, authorization: `Bearer ${token}` });

            const result = await res.json();

            if (res.status === 400 || res.status === 409 || res.status === 500 || res.status === 415) {
                toast.error(res.error);
            }

            if (res.status === 201 || res.ok || res.status === 200) {
                router.push('/dashboard/faq');
                setData({ question: "" });
                setContent('');
                toast.success("FAQ's added !!!");
            } else {
                toast.error(res.title[0]);
            }

        } catch (error) {
            console.error("FAQ's not added !!!", error);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6">
                    <div className="welcome-text">
                        <h4>Add New FAQ's</h4>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/faq">FAQ's</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">Add FAQ's</Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-sm-12">
                    <div className="card">
                        <form className="blog-form" onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                <label className="form-label">Question</label>
                                    <input type="text" name='question' value={data.question} onChange={handleChange} className="form-control" placeholder="Enter Question" />
                                </div>                                

                                <div className="form-group">
                                    <label className="form-label">Answer</label>
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

export default AddFaq