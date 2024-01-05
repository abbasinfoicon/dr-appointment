'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [cookies, , removeCookie] = useCookies(['access_token', 'refresh_token', 'role', 'user_id']);
    const router = useRouter();
    useEffect(() => {
        const menuItems = document.querySelectorAll('.metismenu li');

        menuItems.forEach((item) => {
            item.addEventListener('click', function () {
                this.classList.add('mm-active');

                const siblings = Array.from(this.parentElement.children);
                siblings.forEach((sibling) => {
                    if (sibling !== this) {
                        sibling.classList.remove('mm-active');
                    }
                });
            });
        });
    }, []);

    const removeCookies = () => {
        removeCookie('access_token');
        removeCookie('refresh_token');
        removeCookie('role');
        removeCookie('user_id');

        router.push("/login");
    };

    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="nav-label first">Main Menu</li>
                    <li><Link className="ai-icon" href="/dashboard">
                        <i className="icon-home"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-user"></i>
                        <span className="nav-text">Doctors</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/doctors">All Doctors</Link></li>
                            <li><Link href="/dashboard/doctors/add-doctor">Add Doctor</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-people"></i>
                        <span className="nav-text">Patients</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/patients">All Patients</Link></li>
                            <li><Link href="/dashboard/patients/add-patient">Add Patient</Link></li>
                        </ul>
                    </li>

                    <li className="nav-label">Services</li>

                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-docs"></i>
                        <span className="nav-text">Appointments</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/doctors-schedule">Doctor Schedule</Link></li>
                            <li><Link href="/dashboard/book-appointment">Book Appointment</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-chemistry"></i>
                        <span className="nav-text">Specialities</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/specialities">All Specialities</Link></li>
                            <li><Link href="/dashboard/specialities/add">Add Specialities</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-briefcase"></i>
                        <span className="nav-text">Career</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/job">All Jobs</Link></li>
                            <li><Link href="/dashboard/job/add-job">Add Job</Link></li>
                        </ul>
                    </li>

                    <li className="nav-label">Media</li>

                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-film"></i>
                        <span className="nav-text">Slider</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/slider">All Slider</Link></li>
                            <li><Link href="/dashboard/slider/add">Add Slider</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-note"></i>
                        <span className="nav-text">Blog</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/blog">All Blog</Link></li>
                            <li><Link href="/dashboard/blog/add-blog">Add Blog</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-picture"></i>
                        <span className="nav-text">Gallery</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/gallery">All Gallery</Link></li>
                            <li><Link href="/dashboard/gallery/add-img">Add Image</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-support"></i>
                        <span className="nav-text">Support</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/faq">FAQ</Link></li>
                            <li><Link href="/dashboard/contact">Contact us</Link></li>
                            <li><Link href="/dashboard/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/dashboard/help-center">Help center</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-bubbles"></i>
                        <span className="nav-text">Testimonial</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/testimonial">All Testimonial</Link></li>
                            <li><Link href="/dashboard/testimonial/add-testimonial">Add Testimonial</Link></li>
                        </ul>
                    </li>

                    <li className="nav-label">Extra App</li>

                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-paypal"></i>
                        <span className="nav-text">Billing</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/payments">Payments</Link></li>
                            <li><Link href="/dashboard/add-payment">Add Payment</Link></li>
                            <li><Link href="/dashboard/patient-invoice">Patient Invoice</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" href="#">
                        <i className="icon-envelope-open"></i>
                        <span className="nav-text">Apps</span>
                    </Link>
                        <ul className="mm-collapse">
                            <li><Link href="/dashboard/app-profile">Profile</Link></li>
                            <li><Link className="has-arrow" href="#">Email</Link>
                                <ul className="mm-collapse">
                                    <li><Link href="/dashboard/email-compose">Compose</Link></li>
                                    <li><Link href="/dashboard/email-inbox">Inbox</Link></li>
                                    <li><Link href="/dashboard/email-read">Read</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/dashboard/app-calender">Calendar</Link></li>
                        </ul>
                    </li>
                    <li><Link className="ai-icon" href="/login">
                        <i className="icon-speech"></i>
                        <span className="nav-text">Chat</span>
                    </Link>
                    </li>
                    <li>
                        <button className="ai-icon" onClick={removeCookies}>
                            <i className="icon-logout"></i>
                            <span className="nav-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar