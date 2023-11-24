import React from 'react'
import Banner from '@/app/components/Banner';
import Link from 'next/link';

const Specialities = () => {
  return (
    <>
      <Banner title="Specialities" img="bnr1.jpg" />

      <div className="section-full bg-white content-inner" id="services">
        <div className="container">
          <div className="section-head text-center ">
            <h3 className="h3 text-uppercase">Our Best <span className="text-primary">Services</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic1.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Dental Fillings</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic2.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Orthodontics</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic3.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Tooth Extraction</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic4.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Root Canal Treatment</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic5.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Teeth Whitening</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/slug"><img src="/assets/images/our-services/service/pic6.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/slug">Routine Dental Exam</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/slug" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specialities