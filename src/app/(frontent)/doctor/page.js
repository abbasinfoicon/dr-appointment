"use client"
import Banner from '@/app/components/Banner'
import FetchData from '@/app/components/FetchData';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Doctor = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchData({ url: "user/doctors", method: "GET" });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner title="Doctors" img="bnr1.jpg" />

      <div className="section-full content-inner bg-gray">
        <div className="container">
          <div className="section-head text-center ">
            <h3 className="h3 text-uppercase">Meet Our  <span className="text-primary">Doctors</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="section-content text-center ">
            <div className="row">
              {
                data.length && data.map((item, i) => (
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b15" key={i}>
                    <div className="dez-box">
                      <div className="dez-media">
                        <Link href={`/doctor/${item.user.id}`}><img src={`${item?.image == null ? "/assets/images/avatar/1.jpg" : item?.image}`} alt={item.user.first_name} /></Link>
                      </div>

                      <div className="dez-info p-a30 bg-white">
                        <h4 className="dez-title m-t0 m-b15"><Link href={`/doctor/${item.user.id}`}>Dr. {item.user.first_name} {item.user.last_name}</Link></h4>

                        <div className="specialitie">
                          <p><i className="fa fa-user-md" aria-hidden="true"></i> {item.specialization}</p>
                          <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {item.qualifications}</p>
                        </div>

                        <ul className="dez-social-icon border dez-social-icon-lg">
                          <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                          <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                          <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                          <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctor