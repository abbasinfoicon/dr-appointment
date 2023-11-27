import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className="page-content dez-login p-t50 overlay-black-dark bg-img-fix" style={{ backgroundImage: 'url(assets/images/background/bg3.jpg)' }}>
            <div className="login-form relative z-index999 ">
                <div id="login" className="text-center">
                    <form className="p-a30 dez-form  m-t100">
                        <h3 className="form-title m-t0">Sign In</h3>
                        <div className="dez-separator-outer m-b5">
                            <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p>Enter your e-mail address and your password. </p>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control" placeholder="User Name" type="text" />
                        </div>
                        <div className="form-group">
                            <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                        </div>
                        <div className="form-group text-left pass-check d-flex justify-content-between w-100">
                            <label>
                                <input id="check1" type="checkbox" />
                                <label for="check1">Remember me</label>
                            </label>
                            <Link href="/forgot-password" className="m-l15"><i className="fa fa-unlock-alt"></i> Forgot Password</Link>
                        </div>

                        <div className="form-group text-left">
                            <button className="site-button dz-xs-flex">login</button>
                        </div>
                    </form>
                    <div className="bg-primary p-a15 ">
                        <Link href="/register" className="text-white">Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login