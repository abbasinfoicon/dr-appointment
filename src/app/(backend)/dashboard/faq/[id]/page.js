"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal';
import FetchData from '@/app/components/FetchData';

const FaqDetail = () => {
    const params = useParams();
    const id = params.id
    const [data, setData] = useState(null);
    const [deleteContent, setDeleteContent] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [loading, setLoading] = useState(true);

    const handleDeletePopup = (delId) => {
        setDeleteContent(!deleteContent);
        setDeleteId(delId);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await FetchData({ url: `FAQ/view/${id}`, method: "GET" });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const postData = await res.json();

                setData(postData);
                setLoading(false);
            } catch (error) {
                setLoading(true);
                console.error('Error fetching data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    // Function to format the date string
    const formatDateString = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid">
            <div className="row page-titles mx-0">
                <div className="col-sm-6 p-md-0">
                    <div className="blog_id_heading">
                        <div className="blog_id">
                            {data.id}
                        </div>
                        <div className="welcome-text">
                            <h4>{data.question}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/dashboard/faq">FAQ's</Link></li>
                        <li className="breadcrumb-item active"><Link href="#">{data.question}</Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="profile-tab">
                                <div className="profile-about-me">
                                    <div className="pt-4 border-bottom-1 pb-4">
                                        <h4><strong className='text-primary'>Question: </strong>{data.question}</h4>

                                        <p dangerouslySetInnerHTML={{ __html: data.answer }}></p>
                                    </div>
                                </div>

                                <div className="profile-personal-info">
                                    <h4 className="text-primary mb-4">More Information</h4>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <h5 className="f-w-500">Availability <span className="pull-right">:</span></h5>
                                        </div>
                                        <div className="col-9">
                                            <span>{data.show_visibility ? 'True' : "False"}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <h5 className="f-w-500">FAQ's Id. <span className="pull-right">:</span></h5>
                                        </div>
                                        <div className="col-9"><span>{data.id}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <h5 className="f-w-500">Create Time <span className="pull-right">:</span></h5>
                                        </div>
                                        <div className="col-9">
                                            <span>{formatDateString(data.updated_at)}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/dashboard/faq" className='btn rounded btn-primary'><i className="icon-list"></i> All Lists</Link>
                                <Link href={`/dashboard/faq/edit/${data.id}`} className='btn rounded btn-info mx-1'><i className="icon-pencil"></i> Update</Link>
                                <button className='btn rounded btn-danger' onClick={() => handleDeletePopup(data.id)}><i className="icon-trash"></i> Delete</button>
                                <Link href="/dashboard/faq/add" className='btn rounded btn-primary mx-1'><i className="icon-plus"></i> Add New</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteModal did={deleteId} dc={deleteContent} setdc={setDeleteContent} />
        </div >
    )
}

export default FaqDetail