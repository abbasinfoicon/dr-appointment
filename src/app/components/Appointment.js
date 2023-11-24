import React from 'react'

const Appointment = () => {
    return (
        <form method="post" className="dzForm" action="/">
            <input type="hidden" value="Contact" name="dzToDo" />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="input-group">
                            <input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="input-group">
                            <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="input-group">
                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="input-group">
                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Subject" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="input-group">
                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input className="form-control d-none" style={{ display: 'none' }} data-recaptcha="true" required data-error="Please complete the Captcha" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <button name="submit" type="submit" value="Submit" className="site-button white outline"> <span>Make An Appointment</span> </button>
                </div>
            </div>
        </form>
    )
}

export default Appointment