import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="page-content dez-login p-t50 overlay-black-dark bg-img-fix" style={{ backgroundImage: 'url(assets/images/background/bg3.jpg)' }}>
            <div className="login-form relative z-index999 ">
                <div id="forgot_password" className="text-center">
                    <form className="p-a30 dez-form m-t100 text-center">
                        <h3 className="form-title m-t0">Forget Password ?</h3>
                        <div className="dez-separator-outer m-b5">
                            <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p>Enter your e-mail address below to reset your password. </p>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="Email Id" type="text" />
                        </div>
                        <div className="form-group text-left">
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