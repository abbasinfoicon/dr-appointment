'use client'
import Banner from '@/app/components/Banner';
import FetchData from '@/app/components/FetchData';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const pathname = usePathname();
    const doctorSlug = pathname.replace(/^\/doctor\//, '');
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await FetchData({ url: `user/doctor/${doctorSlug}`, method: "GET" });

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

    console.log("Single Frontend dr.:", data)

    return (
        <>
            <Banner title={`Dr. ${data.user.first_name} ${data.user.last_name}`} img="bnr1.jpg" parents="doctor" />

            <section className="team_details content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src={`${data.image == null ? "/assets/images/our-team/pic13.jpg" : data.image}`} alt={data.user.first_name} className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-lg-7">
                                    <div className="team_details_img_text">
                                        <p className='mt-0 mb-2 rating-star'>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </p>
                                        <h3>Dr. <strong>{data.user.first_name} {data.user.last_name}</strong></h3>
                                        <p>Gender: <strong>{data.user.gender}</strong></p>
                                        <p>Address: <strong>{data.user.address}</strong></p>
                                        <p>City: <strong>{data.user.city}</strong></p>
                                        <p>State: <strong>{data.user.state}</strong></p>
                                        <a href={`callto:${data.user.phone_no}`}>Call: <strong>{data.user.phone_no}</strong></a>
                                        <a href={`mailto:${data.user.email}`}>Email: <strong>{data.user.email}</strong></a>
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>Biography of Dr. {data.user.first_name} {data.user.last_name}</h3>
                                <div className="biography_text">
                                    <h4 className="mb-3">Educational Background</h4>
                                    <p>Qualifications: <strong>{data.qualifications}</strong></p>
                                    <p>Experience: <strong>{data.experience} Year</strong></p>
                                    <p>Specialization: <strong>{data.specialization}</strong></p>
                                    <p>License No: <strong>{data.license_no}</strong></p>

                                    <p className="mb-4">{data.brief_description}</p>

                                    <h4 className="mb-3">Consultation Fees</h4>
                                    <p>Consultation Fees Online: <strong>{data.consultation_fees_online}</strong></p>
                                    <p>Consultation Fees Offline: <strong>{data.consultation_fees_offline}</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
                            <div className="team_details_sidebar" id="sticky_sidebar">
                                <form className="team_details_form">
                                    <h5>Make an Appointment</h5>
                                    <div className="row">
                                        <div className="col-xx-6 col-md-6 col-lg-12">
                                            <input type="text" placeholder="Name" className='form-control' />
                                        </div>
                                        <div className="col-xx-6 col-md-6 col-lg-12">
                                            <input type="email" placeholder="Email" className='form-control' />
                                        </div>
                                        <div className="col-xx-6 col-md-6 col-lg-12">
                                            <select className="select_2 form-control">
                                                <option value="">Select Date</option>
                                                <option value="">Date 1</option>
                                                <option value="">Date 2</option>
                                                <option value="">Date 3</option>
                                                <option value="">Date 4</option>
                                                <option value="">Date 5</option>
                                            </select>
                                        </div>
                                        <div className="col-xx-6 col-md-6 col-lg-12">
                                            <select className="reservation_input select_2 form-control">
                                                <option value="">Select Time</option>
                                                <option value="">10.00 am to 11.00 am</option>
                                                <option value="">11.00 am to 12.00 pm</option>
                                                <option value="">3.00 pm to 4.00 pm</option>
                                                <option value="">4.00 pm to 5.00 pm</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12">
                                            <select className="reservation_input select_2 form-control">
                                                <option value="">Select Time</option>
                                                <option value="">Type Of Service</option>
                                                <option value="">Type Of Service</option>
                                                <option value="">Type Of Service</option>
                                                <option value="">Type Of Service</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 text-center">
                                            <button type="submit" value="Submit" className="site-button white outline" name="submit"> <span>Make An Appointment</span> </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="team_details_timeing">
                                    <h5>Opening Time</h5>
                                    <p className="d-flex justify-content-between">Friday - Saturday <span>7.30 am - 4.00 pm</span>
                                    </p>
                                    <p className="d-flex justify-content-between">Sunday - Monday<span>10.30 am - 12.00 pm</span>
                                    </p>
                                    <p className="d-flex justify-content-between">Tuesday<span>Closed</span></p>
                                    <p className="d-flex justify-content-between">Wednesday<span>8.30 am - 5.00 pm</span></p>
                                    <p className="last_date d-flex justify-content-between">Thursday<span>7.30 am - 4.00 pm</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page