'use client'
import Banner from '@/app/components/Banner';
import { usePathname } from 'next/navigation';
import React from 'react'

const page = () => {
    const pathname = usePathname();
    const doctorSlug = pathname.replace(/^\/doctor\//, '');
    return (
        <>
            <Banner title={`Dr. ${doctorSlug}`} img="bnr1.jpg" />

        
            <section className="team_details content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src="/assets/images/our-team/pic13.jpg" alt="team" className="img-fluid w-100" />
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
                                        <h3>Dr. {doctorSlug}</h3>
                                        <p>MBBS (University of Wyoming).</p>
                                        <p>M.D. of Medicine (Netherland Medical College).</p>
                                        <p><b>Senior Prof. (MBBS, M.D)</b> Netherland Medical College.</p>
                                        <p>Reg No: A-36589</p>
                                        <a href="callto:0123456789">Call: +1 (700) 230-0035</a>
                                        <a href="mailto:example@gmail.com">Email: example@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>Biography of Dr. {doctorSlug}</h3>
                                <div className="biography_text">
                                    <h4 className="mb-3">Educational Background</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt
                                        utlabore et dolor
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit.</p>

                                    <h4 className="mb-3">Medical Experience & Skills</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        utlabore et dolor
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit.</p>
                                </div>
                            </div>

                            <div className="comment_area">
                                <h2>Total Review (04)</h2>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src="/assets/images/comment-1.png" alt="review" className="img-fluid w-100" />
                                    </div>
                                    <div className="comment_text">
                                        <h4>Robert Smith <span><i className="fa fa-clock-o"></i>4 hour ago</span></h4>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <p>But the majority have suffered alteration in some form, by injected humour, or
                                            randomi sed its wordsn look even slightly believable.</p>
                                        <a href="#"><i className="fa fa-reply-all"></i>reply</a>
                                    </div>
                                </div>
                                <div className="single_comment commant_reply">
                                    <div className="comment_img">
                                        <img src="/assets/images/comment-2.png" alt="review" className="img-fluid w-100" />
                                    </div>
                                    <div className="comment_text">
                                        <h4>Steven Smith <span><i className="fa fa-clock-o" aria-hidden="true"></i>1
                                            hour ago</span></h4>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <p>But the majority have suffered alteration in some form, by injected humour, or
                                            randomi sed its
                                            wordsn look even slightly believable.</p>
                                        <a href="#"><i className="fa fa-reply-all"></i>reply</a>
                                    </div>
                                </div>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src="/assets/images/comment-3.png" alt="review" className="img-fluid w-100" />
                                    </div>
                                    <div className="comment_text">
                                        <h4>Deni Rover<span><i className="fa fa-clock-o" aria-hidden="true"></i> 6
                                            hour ago</span></h4>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <p>But the majority have suffered alteration in some form, by injected humour, or
                                            randomi sed its
                                            wordsn look even slightly believable.</p>
                                        <a href="#"><i className="fa fa-reply-all"></i>reply</a>
                                    </div>
                                </div>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src="/assets/images/comment-1.png" alt="review" className="img-fluid w-100" />
                                    </div>
                                    <div className="comment_text">
                                        <h4>Robert Smith <span><i className="fa fa-clock-o" aria-hidden="true"></i>4
                                            hour ago</span></h4>
                                        <span className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <p>But the majority have suffered alteration in some form, by injected humour, or
                                            randomi sed its
                                            wordsn look even slightly believable.</p>
                                        <a href="#"><i className="fa fa-reply-all"></i>reply</a>
                                    </div>
                                </div>
                            </div>

                            <form className="comment_input_area">
                                <h2>Leave a Review</h2>
                                <p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input type="text" placeholder="Name..." className='form-control' />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="text" placeholder="Email..." className='form-control' />
                                    </div>
                                    <div className="col-xl-12 mt-4 mb-4">
                                        <textarea rows="4" placeholder="Write A Comment..." className='form-control'></textarea>
                                    </div>
                                    <div className="col-xl-12">
                                        <a class="site-button" href="/doctor">Submit Now</a>
                                    </div>
                                </div>
                            </form>

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
                                            <button type="submit" value="Submit" class="site-button white outline" name="submit"> <span>Make An Appointment</span> </button>
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