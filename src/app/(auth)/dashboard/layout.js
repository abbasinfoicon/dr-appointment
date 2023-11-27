'use client'
import Banner from "@/app/components/Banner";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const dashboardSlug = pathname.replace(/^\/dashboard\//, '');
    return (
        <>
            <Banner title={dashboardSlug == '/dashboard' ? 'dashboard' : dashboardSlug} img="bnr1.jpg" />

            <section className="dashboard content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="user_profile">
                                <div className="user_profile_img">
                                    <img src="/assets/images/user_img.png" alt="user" className=" img-fluid w-100" />
                                    <label htmlFor="profile_photo"><i className="fa fa-camera" aria-hidden="true"></i></label>
                                    <input id="profile_photo" type="file" className='d-none' />
                                </div>
                                <h4>Addition Smith</h4>
                                <p>Patient Id : 20220501073345</p>
                            </div>
                            <ul className="dashboard_menu">
                                <li><Link className={pathname === '/dashboard' ? 'active' : ''} href="/dashboard">My Profile</Link></li>
                                <li><Link className={pathname === '/dashboard/appointment' ? 'active' : ''} href="/dashboard/appointment">Appointment</Link></li>
                                <li><Link className={pathname === '/dashboard/transaction-history' ? 'active' : ''} href="/dashboard/transaction-history">Transaction History</Link></li>
                                <li><Link className={pathname === '/dashboard/meeting-history' ? 'active' : ''} href="/dashboard/meeting-history">Meeting History</Link></li>
                                <li><Link className={pathname === '/dashboard/upcoming-meeting' ? 'active' : ''} href="/dashboard/upcoming-meeting">Upcoming Meeting</Link></li>
                                <li><Link className={pathname === '/dashboard/chat' ? 'active' : ''} href="/dashboard/chat">Chat</Link></li>
                                <li><Link href="/login">Logout</Link></li>
                            </ul>
                        </div>

                        <div className="col-xl-9 col-lg-8">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}