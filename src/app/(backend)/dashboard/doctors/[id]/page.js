'use client'
 
import { useRouter} from 'next/navigation'
import FetchData from '@/app/components/FetchData';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';


const DoctorDetail = (id) => {

  const [data, setData] = useState({});
  const [cookies] = useCookies(['access_token']);
  const token = cookies.access_token;
  const router = useRouter()
  //const {id} = router.query;
  console.log(id.params.id);

  
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
  }, [token]);

  return (
    
    <div className="container-fluid">
      <div className="row page-titles mx-0">
        <div className="col-sm-6">
          <div className="welcome-text">
            <h4>View Doctor Profile</h4>
          </div>
        </div>
        <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/dashboard/doctors">Doctors</Link></li>
            <li className="breadcrumb-item active"><Link href="#">Doctor Profile</Link></li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="text-center p-3 overlay-box" style={{ backgroundImage: 'url(assets/images/big/img5.jpg)' }}>
              <img src={`${data.user?.image}`} width="100" className="img-fluid rounded-circle mt-2" alt="" />
              <h3 className="mt-3 mb-0 text-white">{`${data.user?.first_name} ${data.user?.last_name}`}</h3>
              <p className="text-white mb-0 mt-2">{`${data?.specialization}`}</p>
            </div>
            <div className="card-body">
            
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="rating-bar">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <span className="badge border-dark border ml-3">4.9</span>
                  </div>
                </div>
                <div className="col-6">
                  <Link href="#" className="d-block my-2"><strong>{data.user?.email}</strong></Link>
                </div>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Doctor Gender</span> {data.user?.gender}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Years of Experience</span> 		{data?.experience}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">License number</span>{data?.license_no} </li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Consultation_fees_online</span> {data?.consultation_fees_online}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Consultation_fees_offline</span> {data?.consultation_fees_offline}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Contact Number</span>  {data.user?.phone_no}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Active</span> {data.user?.is_active}</li>
                <li className="list-group-item d-flex justify-content-between"><span className="mb-0">Address</span> {data.user?.address} {data.user?.city} {data.user?.state}</li>
              </ul>
            </div>
            <div className="card-footer mt-0">
              <button className="btn btn-primary btn-lg btn-block">Send Message</button>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h4 className="card-title">Brief Information About Doctor</h4>
            </div>
            <p dangerouslySetInnerHTML={{ __html: data?.brief_description }}>
							</p>
          </div>
        </div>

        <div className="col-xl-8 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h4 className="card-title">Speciality</h4>
            </div>
            <div className="card-body dz-scroll" style={{ height: '250px' }} id="DZ_W_Speciality">
              <div className="media mb-3 align-items-center bg-white dz-scroll" id="DZ_W_Speciality">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/20.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Certified</h5>
                  <span className="text-muted mb-0">Cold Laser Therapy</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/21.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Medication Laser</h5>
                  <span className="text-muted mb-0">Hair Lose Product</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/22.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Professional</h5>
                  <span className="text-muted mb-0">Certified Hair Lose Surgery</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/23.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Dentist Certified</h5>
                  <span className="text-muted mb-0">Dentist </span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/21.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Medication Laser</h5>
                  <span className="text-muted mb-0">Hair Lose Product</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/22.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Professional</h5>
                  <span className="text-muted mb-0">Certified Hair Lose Surgery</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/23.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Dentist Certified</h5>
                  <span className="text-muted mb-0">Dentist </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
       
      </div>
    </div>
  )
}

export default DoctorDetail