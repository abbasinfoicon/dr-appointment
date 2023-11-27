import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="page-content dez-login p-t50 overlay-black-dark bg-img-fix" style={{ backgroundImage: 'url(assets/images/background/bg3.jpg)' }}>
            <div className="login-form relative z-index999 ">
                <div id="register" className="text-center">
                    <form className="p-a30 dez-form text-center">
                        <h3 className="form-title m-t0">Sign Up</h3>
                        <div className="dez-separator-outer m-b5">
                            <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p>Enter your personal details below: </p>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="Full Name" type="text" />
                        </div>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="Email Id" type="text" />
                        </div>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="Address" type="text" />
                        </div>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="City/Town" type="text" />
                        </div>
                        <label className="text-left m-b20">Enter your account details below: </label>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="User Name" type="text" />
                        </div>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="Password" type="text" />
                        </div>
                        <div className="">
                            <input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="text" />
                        </div>
                        <label className="m-b30 pass-check">
                            <input id="checkAgree" type="checkbox" />
                            <label className="terms-text" htmlFor='checkAgree'>I agree to the <Link href="/terms-of-service">Terms of Service</Link> & <Link href="/privacy-policy">Privacy Policy </Link></label>
                        </label>
                        <div className="form-group text-left ">
                            <Link className="site-button outline gray" href="/login">Back</Link>
                            <button className="site-button pull-right">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page