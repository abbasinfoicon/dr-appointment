import React from 'react'
import Banner from '@/app/components/Banner';

const Contact = () => {
  return (
    <>
      <Banner title="Contact" img="bnr1.jpg" />

      <div className="section-full content-inner-1 bg-white contact-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="p-a30 bg-gray clearfix m-b30 ">
                <h2>Send Message Us</h2>
                <div className="dzFormMsg"></div>
                <form method="post" className="dzForm" action="/">
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
                      <button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="p-a30 m-b30 border-1 contact-area align-self-stretch">
                <h2 className="m-b10">Quick Contact</h2>
                <p>If you have any questions simply use the following contact details.</p>
                <ul className="no-margin">
                  <li className="icon-bx-wraper left m-b30">
                    <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-map-marker"></i></a> </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dez-tilte">Address:</h6>
                      <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left  m-b30">
                    <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-envelope"></i></a> </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dez-tilte">Email:</h6>
                      <p>info@company.com</p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left">
                    <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-phone"></i></a> </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dez-tilte">PHONE</h6>
                      <p>+61 3 8376 6284</p>
                    </div>
                  </li>
                </ul>
                <div className="m-t20">
                  <ul className="dez-social-icon border dez-social-icon-lg">
                    <li><a href="#" className="fa fa-facebook bg-primary"></a></li>
                    <li><a href="#" className="fa fa-twitter bg-primary"></a></li>
                    <li><a href="#" className="fa fa-linkedin bg-primary"></a></li>
                    <li><a href="#" className="fa fa-pinterest-p bg-primary"></a></li>
                    <li><a href="#" className="fa fa-google-plus bg-primary"></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="m-b20">Our Location</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
                style={{ border: '0', width: '100%', height: '400px' }}
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact