'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        window.onscroll = function () { myFunction() };

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.scrollY > sticky) {
                header.classList.add("is-fixed");
            } else {
                header.classList.remove("is-fixed");
            }
        }
    }, []);
    const isSpecialitiesPage = pathname.startsWith('/specialities');
    const isBlogPage = pathname.startsWith('/blog');

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
                                <li><Link href="https://www.facebook.com/" className="fa fa-facebook" target='_blank'></Link></li>
                                <li><Link href="https://twitter.com/" className="fa fa-twitter" target='_blank'></Link></li>
                                <li><Link href="https://in.linkedin.com/" className="fa fa-linkedin" target='_blank'></Link></li>
                                <li><Link href="https://www.instagram.com/" className="fa fa-instagram" target='_blank'></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky-header  main-bar-wraper navbar-expand-lg" id='myHeader'>
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        <div className="logo-header mostion">
                            <Link href="/"><img src="/assets/images/logo.png" width="193" height="89" alt="" /></Link>
                        </div>
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${menu ? "open" : ""}`} type="button" onClick={() => setMenu(!menu)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="extra-nav">
                            <div className="extra-cell">
                                <button id="quik-search-btn" type="button" className="site-button" onClick={() => setOpen(!open)}><i className="fa fa-search"></i></button>
                            </div>
                        </div>

                        <div className={`dez-quik-search bg-primary ${open ? "open" : ""}`}>
                            <form action="#">
                                <input name="search" defaultValue="" type="text" className="form-control" placeholder="Type to search" />
                                <span id="quik-search-remove" onClick={() => setOpen(!open)}><i className="fa fa-remove"></i></span>
                            </form>
                        </div>

                        <div className={`header-nav navbar-collapse collapse justify-content-end ${menu ? "show" : ""}`}>
                            <div className="logo-header mostion"><Link href="/"><img src="assets/images/logo.png" width="193" height="89" alt="" /></Link></div>
                            <ul className="nav navbar-nav">
                                <li className={pathname == '/' ? 'active' : ''}><Link href="/">Home</Link></li>
                                <li className={pathname == '/about' ? 'active' : ''}><Link href="/about">About</Link></li>
                                <li className={isSpecialitiesPage ? 'active' : ''}><Link href="/specialities">Specialities <i className="fa fa-chevron-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/specialities/emegency-care">Emegency Care</Link></li>
                                        <li><Link href="/specialities/operation-theater">Operation Theater</Link></li>
                                        <li><Link href="/specialities/medical-checkup">Medical Checkup</Link></li>
                                        <li><Link href="/specialities/ddiagnostic-center">Ddiagnostic Center</Link></li>
                                        <li><Link href="/specialities/outdoor-checkup">Outdoor Checkup</Link></li>
                                        <li><Link href="/specialities/pharmacy-servicea">Pharmacy Servicea</Link></li>
                                    </ul>
                                </li>
                                <li className={pathname == '/facilities' ? 'active' : ''}><Link href="/facilities">Facilities</Link></li>
                                <li className={isBlogPage ? 'active' : ''}><Link href="/blog">Blog</Link></li>
                                <li className={pathname == '/gallery' ? 'active' : ''}><Link href="/gallery">Gallery</Link></li>
                                <li className={pathname == '/contact' ? 'active' : ''}><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header