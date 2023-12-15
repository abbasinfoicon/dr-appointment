"use client"
import FetchData from '@/app/components/FetchData';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

const Doctors = () => {
  const [data, setData] = useState({});
  const [cookies] = useCookies(['access_token']);
  const token = cookies.access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchData({ url: "doctors", method: "GET", authorization: `Bearer ${token}` });

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
  }, [token]);

  console.log("Dr Lists Data", data);
  console.log(FetchData);

  return (
    <div className="container-fluid">
      <div className="row page-titles mx-0">
        <div className="col-sm-6">
          <div className="welcome-text">
            <h4>All Doctors</h4>
          </div>
        </div>
        <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/dashboard/doctors">Doctors</Link></li>
            <li className="breadcrumb-item active"><Link href="#">All Doctors</Link></li>
          </ol>
        </div>
      </div>

      <div className="row page-titles mx-0 justify-content-between">
        <div className="col-sm-3">
          <div className="form-search">
            <form action="" className="">
              <input type="search" name="" id="" className="form-control" placeholder='Search Doctors...' />
              <button className='search-btn'><i className="mdi mdi-magnify"></i></button>
            </form>
          </div>
        </div>

        <div className="col-sm-2">
          <div className="add-new text-right">
            <Link href="/dashboard/doctors/add-doctor" className="btn btn-outline-primary btn-lg btn-rounded mt-1 pl-5 pr-5 add-new">Add New</Link>
          </div>
        </div>
      </div>

      <div className="row">
        
      {data.length && data.map((item) => (
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <div className="profile-photo">
                  <img src={`${item?.image ==null? "/assets/images/avatar/1.jpg" : item?.image}`} width="100" className="img-fluid rounded-circle" alt="" />
                </div>
                <h3 className="mt-4 mb-1">Dr. {`${item?.user.first_name} ${item?.user.last_name}`}</h3>
                <p className="text-muted">{item?.specialization}</p>
                <div className="action">
                  <Link className="btn btn-primary btn-rounded pl-3 pr-3" href="/dashboard/doctors/name"><i className="icon-eye"></i> View</Link>
                  <Link className="btn btn-info btn-rounded pl-3 pr-3 mx-2" href="/dashboard/doctors/name"><i className="icon-pencil"></i> Update</Link>
                  <Link className="btn btn-danger btn-rounded pl-3 pr-3" href="/dashboard/doctors/name"><i className="icon-trash"></i> Delete</Link>
                </div>
              </div>
            </div>
            <div className="card-footer pt-0 pb-0 text-center">
              <div className="row">
                <div className="col-4 pt-3 pb-3 border-right">
                  <h3 className="mb-1">606</h3><span>Patient</span>
                </div>
                <div className="col-4 pt-3 pb-3 border-right">
                  <h3 className="mb-1">45 yrs</h3><span>Doc age</span>
                </div>
                <div className="col-4 pt-3 pb-3">
                  <h3 className="mb-1">546</h3><span>Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

        <div className="col-xl-12 text-center">
          <Link href="#" className="btn mb-3 pl-5 pr-5 btn-primary btn-lg">Load More</Link>
        </div>
      </div>
    </div>
  )
}

export default Doctors






