'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import BlogList from './BlogList';

const Blog = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [cookies] = useCookies(['access_token']);
  const token = cookies.access_token;

  const itemsPerPage = 5;

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

  // Check if 'posts' is an array before trying to slice it
  // const currentPosts = Array.isArray(data) ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
  const currentPosts = data.length ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!data) {
    return <div>Loading...</div>; // Add a loading indicator while data is being fetched
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = date.getFullYear();

    // Combine components into the desired format
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const filterData = () => {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredData(filtered);
      setCurrentPage(1); // Reset current page when search changes
    };

    filterData();
  }, [searchData, data]);


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

      <div className="row page-titles mx-0 justify-content-between">
        <div className="col-sm-3">
          <div className="form-search">
            <form action="" className="">
              <input type="search" name="" id="" value={searchData} onChange={e => setSearchData(e.target.value)} className="form-control" placeholder='Search Blog...' />
              <button className='search-btn'><i className="mdi mdi-magnify"></i></button>
            </form>
          </div>
        </div>

        <div className="col-sm-2">
          <div className="add-new text-right">
            <Link href="/dashboard/blog/add-blog" className="btn btn-outline-primary btn-lg btn-rounded mt-1 pl-5 pr-5 add-new">Add New</Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Blogs Details Lists</h4>
            </div>
            <div className="card-body d-none">
              <table id="example" className="table table-bordered table-hover table-striped table-borderd">
                <thead className="thead-primary">
                  <tr>
                    <th>Blog Id</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Sub Title</th>
                    <th>Created By</th>
                    <th>Status</th>
                    <th>Availablity</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    currentPosts.length ?
                      currentPosts.map((item) => (
                        <tr>
                          <td>{item.blog_id}</td>
                          <td>{formatDate(item.created_at)}</td>
                          <td><img src={`http://172.232.189.142:8000/${item.blog_image}`} alt="" className="img-fluid" width="100" /></td>
                          <td>{item.title}</td>
                          <td><small>{item.subTitle}</small></td>
                          {/* <td dangerouslySetInnerHTML={{ __html: item.description }}></td> */}

                          <td>{item.created_by.first_name}</td>
                          <td>{item.approved}</td>
                          <td>{item.availablity}</td>

                          <td>
                            <div className='d-flex'>
                              <Link href="#" className='btn rounded btn-primary'><i className="icon-eye"></i></Link>
                              <Link href="#" className='btn rounded btn-info mx-3'><i className="icon-pencil"></i></Link>
                              <Link href="#" className='btn rounded btn-danger'><i className="icon-trash"></i></Link>
                            </div>
                          </td>
                        </tr>
                      ))
                      : <p>Loading...</p>
                  }
                </tbody>
              </table>

              {currentPosts.length ?
                <div className="pagination-bx clearfix ">
                  <ul className="pagination">
                    <li className="previous" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                      <Link href="#">
                        <i className="fa fa-angle-double-left"></i>
                      </Link>
                    </li>
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                      <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <Link href="#" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                    <li
                      className="next"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                    >
                      <Link href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                : null}

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