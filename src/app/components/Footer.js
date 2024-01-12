'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FetchData from './FetchData';

const Footer = () => {
    const pathname = usePathname();
    const [posts, setPosts] = useState([]);
    const reversedArray = posts.slice().reverse();

    const fetchData = async () => {
        try {
            const res = await FetchData({ url: "app/blogs", method: "GET" });

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const result = await res.json();

            setPosts(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <footer className={pathname.startsWith('/dashboard') ? 'd-none' : 'site-footer'}>
            <div className="footer-top text-white footer-image overlay-black-dark bg-img-fix" style={{ backgroundImage: 'url(/assets/images/background/bg3.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                            <div className="widget widget_about">
                                <div className="logo-footer"><img src="/assets/images/footer-logo.png" alt="" /></div>
                                <p className="m-t30 m-b20"><strong>Dr.Appointment</strong>  Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus.  cons ectetur elit. Vestibulum nec odios Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec.</p>
                                <ul className="dez-social-icon border dez-social-icon-lg">
                                    <li><Link href="https://www.facebook.com/" className="fa fa-facebook fb-btn" target='_blank'></Link></li>
                                    <li><Link href="https://twitter.com/" className="fa fa-twitter tw-btn" target='_blank'></Link></li>
                                    <li><Link href="https://in.linkedin.com/" className="fa fa-linkedin link-btn" target='_blank'></Link></li>
                                    <li><Link href="https://www.instagram.com/" className="fa fa-instagram pin-btn" target='_blank'></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                            <div className="widget widget_services">
                                <h4 className="m-b15 text-uppercase">Our services</h4>
                                <div className="dez-separator bg-primary"></div>
                                <ul>
                                    <li><Link href="/specialities">Emegency Care</Link></li>
                                    <li><Link href="/specialities">Operation Theater</Link></li>
                                    <li><Link href="/specialities">Medical Checkup</Link></li>
                                    <li><Link href="/specialities">Ddiagnostic Center</Link></li>
                                    <li><Link href="/specialities">Outdoor Checkup</Link></li>
                                    <li><Link href="/specialities">Pharmacy Servicea</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                            <div className="widget widget_getintuch">
                                <h4 className="m-b15 text-uppercase">Contact us</h4>
                                <div className="dez-separator bg-primary"></div>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                    <li><i className="fa fa-phone"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                    <li><i className="fa fa-fax"></i><strong>FAX</strong>(123) 123-4567<br />
                                        000 123 2294 089</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                            <div className="widget widget_gallery">
                                <h4 className="m-b15 text-uppercase">Recent Post</h4>
                                <div className="dez-separator bg-primary"></div>
                                <ul>
                                    {
                                        posts && posts.length ?
                                            reversedArray.slice(0, 9).map((item) => {
                                                return (
                                                    <li className="img-effect2" key={item.blog_id}> <Link href={`/blog/${item.blog_id}`}><img src={process.env.BASE_URL + item.blog_image} alt={item.title} /></Link> </li>
                                                )
                                            })
                                            : <p>No data available!!!</p>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row dez-newsletter p-a30 style1">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-bx-wraper left">
                                <div className="icon-lg text-primary radius m-t10"> <Link href="#" className="icon-cell"><i className="fa fa-envelope-o"></i></Link> </div>
                                <div className="icon-content">
                                    <h2 className="dez-tilte m-b0">NewsLetter</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="newsLetter-bx m-t20 m-b10">
                                <form className="dzSubscribe" action="/" method="post">
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="input-group">
                                        <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                        <span className="input-group-btn">
                                            <button name="submit" defaultValue="Submit" type="submit" className="site-button m-l10">Submit</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-primary">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-4 col-md-4 text-left">
                            <span>Copyright © 2023 Dr.Appointment</span>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <span> Design With <i className="fa fa-heart heart"></i> By <Link href="https://www.infoicontechnologies.com/" target='_blank'>Infoicon</Link> </span>
                        </div>
                        <div className="col-lg-4 col-md-4 text-right">
                            <ul className="footer-info-list text-right">
                                <li><Link href="/faq"> FAQ's</Link></li>
                                <li><Link href="/career"> Career</Link></li>
                                <li><Link href="/help"> Help Desk</Link></li>
                                <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer