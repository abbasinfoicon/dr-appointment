import Banner from '@/app/components/Banner'
import Link from 'next/link'
import React from 'react'

const Doctor = () => {
  return (
    <>
      <Banner title="Doctor" img="bnr1.jpg" />

      <div className="section-full content-inner bg-gray">
        <div className="container">
          <div className="section-head text-center ">
            <h3 className="h3 text-uppercase">Meet Our  <span className="text-primary">Doctors</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="section-content text-center ">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/jon-miller"><img src="assets/images/our-team/pic13.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/jon-miller">Dr. Jon Miller</Link></h4>

                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Cardiology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>

                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/andy-miller"><img src="assets/images/our-team/pic14.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/andy-miller">Dr. Andy Miller</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Neurology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/nashid-martines"><img src="assets/images/our-team/pic15.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/nashid-martines">Dr. Nashid Martines</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Ophthalmology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/martines-nashid"><img src="assets/images/our-team/pic16.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/martines-nashid">Dr. Martines Nashid</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Pediatric</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/jon-miller"><img src="assets/images/our-team/pic13.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/jon-miller">Dr. Jon Miller</Link></h4>

                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Cardiology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>

                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/andy-miller"><img src="assets/images/our-team/pic14.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/andy-miller">Dr. Andy Miller</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Neurology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/nashid-martines"><img src="assets/images/our-team/pic15.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/nashid-martines">Dr. Nashid Martines</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Ophthalmology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/martines-nashid"><img src="assets/images/our-team/pic16.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/martines-nashid">Dr. Martines Nashid</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Pediatric</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/jon-miller"><img src="assets/images/our-team/pic13.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/jon-miller">Dr. Jon Miller</Link></h4>

                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Cardiology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>

                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/andy-miller"><img src="assets/images/our-team/pic14.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/andy-miller">Dr. Andy Miller</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Neurology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/nashid-martines"><img src="assets/images/our-team/pic15.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/nashid-martines">Dr. Nashid Martines</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Ophthalmology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/martines-nashid"><img src="assets/images/our-team/pic16.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/martines-nashid">Dr. Martines Nashid</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Pediatric</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/jon-miller"><img src="assets/images/our-team/pic13.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/jon-miller">Dr. Jon Miller</Link></h4>

                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Cardiology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>

                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/andy-miller"><img src="assets/images/our-team/pic14.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/andy-miller">Dr. Andy Miller</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Neurology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/nashid-martines"><img src="assets/images/our-team/pic15.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/nashid-martines">Dr. Nashid Martines</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Ophthalmology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/martines-nashid"><img src="assets/images/our-team/pic16.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/martines-nashid">Dr. Martines Nashid</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Pediatric</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/jon-miller"><img src="assets/images/our-team/pic13.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/jon-miller">Dr. Jon Miller</Link></h4>

                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Cardiology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>

                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/andy-miller"><img src="assets/images/our-team/pic14.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/andy-miller">Dr. Andy Miller</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Neurology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/nashid-martines"><img src="assets/images/our-team/pic15.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/nashid-martines">Dr. Nashid Martines</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Ophthalmology</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b15">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/doctor/martines-nashid"><img src="assets/images/our-team/pic16.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 bg-white">
                    <h4 className="dez-title m-t0 m-b15"><Link href="/doctor/martines-nashid">Dr. Martines Nashid</Link></h4>
                    <div className="specialitie">
                      <p><i className="fa fa-user-md" aria-hidden="true"></i> Pediatric</p>
                      <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> MBBS, FCPS, FRCS</p>
                    </div>
                    <ul className="dez-social-icon border dez-social-icon-lg">
                      <li><Link href="#" className="fa fa-facebook fb-btn"></Link></li>
                      <li><Link href="#" className="fa fa-twitter tw-btn"></Link></li>
                      <li><Link href="#" className="fa fa-linkedin link-btn"></Link></li>
                      <li><Link href="#" className="fa fa-pinterest-p pin-btn"></Link></li>
                    </ul>
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

export default Doctor