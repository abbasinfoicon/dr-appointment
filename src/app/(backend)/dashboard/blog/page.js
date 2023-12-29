'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import BlogList from './BlogList';

const Blog = () => {
  const [data, setData] = useState([]);
  const [cookies] = useCookies(['access_token']);
  const token = cookies.access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://172.232.189.142:8000/app/all_blogs/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });


        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading...</div>; // Add a loading indicator while data is being fetched
  }

  return (
    <div className="container-fluid">
      <div className="row page-titles mx-0">
        <div className="col-sm-6">
          <div className="welcome-text">
            <h4>All Blogs</h4>
          </div>
        </div>
        <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/dashboard/blog">Blog</Link></li>
            <li className="breadcrumb-item active"><Link href="#">All Blogs</Link></li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Blogs Details Lists</h4>
              <div className="add-new text-right">
                <Link href="/dashboard/blog/add-blog" className="btn btn-outline-primary btn-lg btn-rounded mt-1 pl-5 pr-5 add-new">Add New</Link>
              </div>
            </div>

            <div className='card-body'>
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog