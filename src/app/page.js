'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false, });

import { SlideshowLightbox } from 'lightbox.js-react';
import CountUp from 'react-countup';
import Testimonial from "./components/Testimonial";
import Link from "next/link";
import Appointment from "./components/Appointment";

const options = {
  loop: true,
  margin: 0,
  autoplaySpeed: 5000,
  autoplay: 8000,
  items: 1,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  nav: true,
  dots: false,
  navText: ["<i class='arow-left'></i>", "<i class='arow-right'></i>"],
}

const options2 = {
  loop: true,
  margin: 30,
  autoplaySpeed: 2000,
  autoplay: 3000,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: { items: 1 },
    480: { items: 2 },
    991: { items: 2 },
    1000: { items: 3 }
  }
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import and initialize magnific-popup
      const $ = require("jquery");
      require("magnific-popup");

      $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
          type: 'iframe',
        });
      });
    }

    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/posts');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setPosts(data.posts); // Assuming the actual array is under the 'posts' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="page-content">
      <OwlCarousel className="main-slider" id="home" {...options}>
        <div className="item">
          <div className="mainSlider">
            <img className='img-fluid' src="assets/images/main-slider/slide6.jpg" />
            <div className="mainSlider-text">
              <h3>Welcome to Dr. Appointment</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, sequi distinctio atque eaque soluta laudantium. Fugit distinctio commodi natus! Ea aut itaque ipsa similique non autem cupiditate dolores, labore iure!</p>
              <Link href="#" className="site-button">Read More</Link>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="mainSlider">
            <img className='img-fluid' src="assets/images/main-slider/slide7.jpg" />
            <div className="mainSlider-text">
              <h3>Welcome to Dr. Appointment</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, sequi distinctio atque eaque soluta laudantium. Fugit distinctio commodi natus! Ea aut itaque ipsa similique non autem cupiditate dolores, labore iure!</p>
              <Link href="#" className="site-button">Read More</Link>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="mainSlider">
            <img className='img-fluid' src="assets/images/main-slider/slide8.jpg" />
            <div className="mainSlider-text">
              <h3>Welcome to Dr. Appointment</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, sequi distinctio atque eaque soluta laudantium. Fugit distinctio commodi natus! Ea aut itaque ipsa similique non autem cupiditate dolores, labore iure!</p>
              <Link href="#" className="site-button">Read More</Link>
            </div>
          </div>
        </div>
      </OwlCarousel>

      <div className="section-full content-inner bg-white video-section">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6 align-self-center m-b30">
                <h2 className="m-b15">Health Care with <br /><span className="text-primary">Carezone Hospital Center</span></h2>
                <p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has.</p>
                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <img src="assets/images/sign.png" width="200" alt="" />
                <h4 className="m-b0">Jone Doe</h4>
                <span className="font-14">HOSPITAL DIRECTOR</span>
              </div>
              <div className="col-lg-6 col-md-6 m-b30">
                <div className="video-bx">
                  <img src="assets/images/pic1.jpg" alt="" />
                  <div className="video-play-icon">
                    <Link href="https://www.youtube.com/watch?v=q5sURR9fvvk" className="popup-youtube video bg-primary"><i className="fa fa-play"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full content-inner doctor-stats-bx bg__img">
        <div className="container">
          <div className="section-head text-center ">
            <h3 className="h3 text-uppercase">About <span className="text-primary">Dr. Appointment</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-style-1 m-b30">
                <div className="text-primary">
                  <i className="icon flaticon-bar-chart"></i>
                  <CountUp start={0} end={7652} delay={2.75}>
                    {({ countUpRef }) => (
                      <span className="counter" ref={countUpRef} />
                    )}
                  </CountUp>
                </div>
                <span className="counter-text">Completed Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-style-1 m-b30">
                <div className="text-primary">
                  <i className="icon flaticon-social"></i>
                  <CountUp start={0} end={4562} duration={2.75}>
                    {({ countUpRef }) => (
                      <span className="counter" ref={countUpRef} />
                    )}
                  </CountUp>
                </div>
                <span className="counter-text">Happy Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-style-1 m-b30">
                <div className="text-primary">
                  <i className="icon flaticon-file"></i>
                  <CountUp start={0} end={3569} duration={2.75}>
                    {({ countUpRef }) => (
                      <span className="counter" ref={countUpRef} />
                    )}
                  </CountUp>
                </div>
                <span className="counter-text">Questions Answered</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="counter-style-1 m-b30">
                <div className="text-primary">
                  <i className="icon flaticon-pencil"></i>
                  <CountUp start={0} end={2089} duration={2.75}>
                    {({ countUpRef }) => (
                      <span className="counter" ref={countUpRef} />
                    )}
                  </CountUp>
                </div>
                <span className="counter-text">Ordered Coffee's</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <div className="dez-media"> <Link href="/specialities/lental-lillings"><img src="assets/images/our-services/service/pic1.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/lental-lillings">Dental Fillings</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/lental-lilling" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/orthodontics"><img src="assets/images/our-services/service/pic2.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/orthodontics">Orthodontics</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/orthodontics" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/tooth-extraction"><img src="assets/images/our-services/service/pic3.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/tooth-extraction">Tooth Extraction</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/tooth-extraction" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/root-canal-treatment"><img src="assets/images/our-services/service/pic4.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/root-canal-treatment">Root Canal Treatment</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/root-canal-treatment" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/teeth-whitening"><img src="assets/images/our-services/service/pic5.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/teeth-whitening">Teeth Whitening</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/teeth-whitening" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="dez-box">
                  <div className="dez-media"> <Link href="/specialities/routine-dental-exam"><img src="assets/images/our-services/service/pic6.jpg" alt="" /></Link> </div>
                  <div className="dez-info p-a30 border-1">
                    <h4 className="dez-title m-t0"><Link href="/specialities/routine-dental-exam">Routine Dental Exam</Link></h4>
                    <div className="dez-separator bg-primary"></div>
                    <p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p>
                    <Link href="/specialities/routine-dental-exam" className="site-button-link black">Read More <i className="fa fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full bg-img-fix overlay-primary-dark content-inner-1 dez-support" style={{ backgroundImage: 'url(assets/images/background/bg5.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-white ">
              <h2 className="m-b15 m-t0">We provide 24/7 customer support.</h2>
              <h3 className="m-t0 m-b20">Please feel free to contact us at (01) 234 5678 for emergency case.</h3>
              <Link href="#" className="site-button white radius-sm">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-5 align-self-end m-b30">
                <div className="dez-thum d-sm-none d-lg-block"><img src="assets/images/worker.png" alt="" /></div>
              </div>
              <div className="col-lg-7 m-b30">
                <h3 className="h3 text-uppercase">Make An <span className="text-primary"> Appointment</span></h3>
                <p className="m-b10"><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...</strong></p>
                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                <div className="clearfix bg-primary radius-sm text-white p-a30 about-appoint">
                  <div className="dzFormMsg"></div>

                  <Appointment />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

              <div className="col-md-12 text-center">
                <Link className="site-button" href="/doctor">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full content-inner gallery-projects">
        <div className="section-head  text-center text-black">
          <h3 className="h3 text-uppercase">Our <span className="text-primary">Gallery</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
        </div>

        <div className="clearfix">
          <SlideshowLightbox className="slide__gallery">
            <img className="lightbox_img" src="assets/images/our-work/work/pic1.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic2.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic3.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic4.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic5.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic6.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic7.jpg" />
            <img className="lightbox_img" src="assets/images/our-work/work/pic8.jpg" />
          </SlideshowLightbox>
        </div>
      </div>

      <div className="section-full content-inner-1 bg-gray">
        <div className="container">
          <div className="section-head text-center">
            <h3 className="h3 text-uppercase">Latest blog  <span className="text-primary">post</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="section-content ">
            {
              posts.length && <OwlCarousel className="testimonial-one blog-carousel owl-btn-1 primary owl-btn-center-lr" {...options2}>
                {
                  posts.map((item) => {
                    return (
                      <div className="item" key={item.id}>
                        <div className="dez-box">
                          <div className="dez-media">
                            <Link href={`/blog/${item.id}`}><img src="assets/images/blog/latest-blog/blog/pic1.jpg" alt="" /></Link>
                          </div>
                          <div className="dez-info p-t20">
                            <div className="dez-post-meta">
                              <ul>
                                <li className=""> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2020</span> </li>
                                <li className="post-author"><i className="fa fa-user"></i>By <Link href="#">Jone</Link> </li>
                                <li className="post-comment"><i className="fa fa-comments"></i> <Link href="#">{item.userId}</Link> </li>
                              </ul>
                            </div>
                            <h4 className="dez-title m-t15"><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                            <Link href={`/blog/${item.id}`} className="site-button">Read More</Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </OwlCarousel>
            }
          </div>
        </div >
      </div >

      <div className="section-full content-inner-1 bg-white">
        <div className="container">
          <div className="section-head text-center ">
            <h3 className="h3 text-uppercase">What <span className="text-primary"> Patients Says</span></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div className="section-content owl-dots-black-full btn-black">
            <Testimonial />
          </div>
        </div>
      </div>
    </div >
  )
}
