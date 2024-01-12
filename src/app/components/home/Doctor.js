"use client"
import React from 'react'
import Link from 'next/link';
import Loading from '@/app/loading';
import { useGetAllDoctorQuery } from '@/redux/slices/serviceApi';

const Doctor = () => {
    const { data = [], isLoading, isFetching, isError } = useGetAllDoctorQuery();

    if (isError) return <p>An error has occurred!</p>
    if (isLoading) return <Loading />
    if (isFetching) return <p>Fetching...</p>

    return (
        <div className="section-full content-inner bg-gray">
            <div className="container">
                <div className="section-head text-center ">
                    <h3 className="h3 text-uppercase">Meet Our  <span className="text-primary">Doctors</span></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                </div>

                <div className="section-content text-center ">
                    <div className="row">
                        {
                            data.length ? data.slice(0, 4).map((item, i) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b15" key={i}>
                                    <div className="dez-box xob-zed">
                                        <div className="dez-media"> <Link href={`/doctor/${item.user.id}`}><img src={`${item?.image == null ? "/assets/images/our-team/pic13.jpg" : item?.image}`} alt={item.user.first_name} /></Link> </div>
                                        <div className="dez-info p-a30 bg-white">
                                            <h4 className="dez-title m-t0 m-b15"><Link href={`/doctor/${item.user.id}`}>Dr. {item.user.first_name} {item.user.last_name}</Link></h4>

                                            <div className="specialitie">
                                                <p><i className="fa fa-user-md" aria-hidden="true"></i> {item.specialization}</p>
                                                <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {item.qualifications}</p>
                                            </div>

                                            <ul className="dez-social-icon border dez-social-icon-lg">
                                                <li><Link href="#" target='_blank' className="fa fa-facebook fb-btn"></Link></li>
                                                <li><Link href="#" target='_blank' className="fa fa-twitter tw-btn"></Link></li>
                                                <li><Link href="#" target='_blank' className="fa fa-linkedin link-btn"></Link></li>
                                                <li><Link href="#" target='_blank' className="fa fa-pinterest-p pin-btn"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Doctor not found...!!!</p>
                        }

                        <div className="col-md-12 text-center">
                            <Link className="site-button" href="/doctor">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor