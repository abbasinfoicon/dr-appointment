import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="site-header header header-style-2 mo-left">
            <div className="top-bar">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="dez-topbar-left">
                            <ul className="social-line text-center pull-right">
                                <li><Link href="tel:01234567890"><i className="fa fa-phone"></i> <span>+0 123-456-7890</span> </Link></li>
                                <li><Link href="mailto:info@example.com"><i className="fa fa-clock-o"></i> <span>info@example.com</span></Link></li>
                                <li><Link href="#"><i className="fa fa-envelope-o"></i> <span>Mon - Fri: 08.00 - 17.00</span></Link></li>
                            </ul>
                        </div>
                        <div className="dez-topbar-right">
                            <ul className="social-line text-center pull-right">
                                <li><Link href="/" className="fa fa-facebook"></Link></li>
                                <li><Link href="/" className="fa fa-twitter"></Link></li>
                                <li><Link href="/" className="fa fa-linkedin"></Link></li>
                                <li><Link href="/" className="fa fa-google-plus"></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky-header  main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        <div className="logo-header mostion"><Link href="/"><img src="/assets/images/logo.png" width="193" height="89" alt="" /></Link></div>
                        <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="extra-nav">
                            <div className="extra-cell">
                                <button id="quik-search-btn" type="button" className="site-button"><i className="fa fa-search"></i></button>
                            </div>
                        </div>

                        <div className="dez-quik-search bg-primary ">
                            <form action="#">
                                <input name="search" defaultValue="" type="text" className="form-control" placeholder="Type to search" />
                                <span id="quik-search-remove"><i className="fa fa-remove"></i></span>
                            </form>
                        </div>

                        <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="nav navbar-nav">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/specialities">Specialities <i className="fa fa-chevron-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/specialities/slug">Emegency Care</Link></li>
                                        <li><Link href="/specialities/slug">Operation Theater</Link></li>
                                        <li><Link href="/specialities/slug">Medical Checkup</Link></li>
                                        <li><Link href="/specialities/slug">Ddiagnostic Center</Link></li>
                                        <li><Link href="/specialities/slug">Outdoor Checkup</Link></li>
                                        <li><Link href="/specialities/slug">Pharmacy Servicea</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/facilities">Facilities</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/gallery">Gallery</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header