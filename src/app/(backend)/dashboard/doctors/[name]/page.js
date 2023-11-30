import Link from 'next/link'
import React from 'react'

const DoctorDetail = () => {
  return (
    <div className="container-fluid">
      <div className="row page-titles mx-0">
        <div className="col-sm-6">
          <div className="welcome-text">
            <h4>View Doctor Profile</h4>
          </div>
        </div>
        <div className="col-sm-6 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/dashboard/doctors">Doctors</Link></li>
            <li className="breadcrumb-item active"><Link href="#">Doctor Profile</Link></li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="text-center p-3 overlay-box" style={{ backgroundImage: 'url(assets/images/big/img5.jpg)' }}>
              <img src="/assets/images/profile/profile.png" width="100" className="img-fluid rounded-circle mt-2" alt="" />
              <h3 className="mt-3 mb-0 text-white">Deangelo Sena</h3>
              <p className="text-white mb-0 mt-2">Dentist</p>
            </div>
            <div className="card-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..</p>
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="rating-bar">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <span className="badge border-dark border ml-3">4.9</span>
                  </div>
                </div>
                <div className="col-6">
                  <Link href="javascript:void(0);" className="d-block my-2"><strong>info@example.com</strong></Link>
                </div>
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Patient Gender</span> <strong class="text-muted">Male	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Years Old</span> 		<strong class="text-muted">Age: 24	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Blood Group</span> <strong class="text-muted">A+	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Patient Height</span> <strong class="text-muted">1.5 M	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Patient Weight</span> <strong class="text-muted">65 Kg	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Patient DOB</span> <strong class="text-muted">14-07-1996	</strong></li>
                <li class="list-group-item d-flex justify-content-between"><span class="mb-0">Blood Group</span> <strong class="text-muted">O+	</strong></li>
              </ul>
            </div>
            <div className="card-footer mt-0">
              <button className="btn btn-primary btn-lg btn-block">Send Message</button>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h4 className="card-title">Speciality</h4>
            </div>
            <div className="card-body dz-scroll" style={{ height: '250px' }} id="DZ_W_Speciality">
              <div className="media mb-3 align-items-center bg-white dz-scroll" id="DZ_W_Speciality">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/20.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Certified</h5>
                  <span className="text-muted mb-0">Cold Laser Therapy</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/21.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Medication Laser</h5>
                  <span className="text-muted mb-0">Hair Lose Product</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/22.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Professional</h5>
                  <span className="text-muted mb-0">Certified Hair Lose Surgery</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/23.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Dentist Certified</h5>
                  <span className="text-muted mb-0">Dentist </span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/21.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Medication Laser</h5>
                  <span className="text-muted mb-0">Hair Lose Product</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/22.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Professional</h5>
                  <span className="text-muted mb-0">Certified Hair Lose Surgery</span>
                </div>
              </div>
              <div className="media mb-3 align-items-center bg-white">
                <img className="mr-3 p-2 border" alt="image" width="40" src="/assets/images/icons/23.png" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1 text-pale-sky">Dentist Certified</h5>
                  <span className="text-muted mb-0">Dentist </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h4 className="card-title">Timeline</h4>
            </div>
            <div className="card-body">
              <div className="widget-timeline">
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge primary"></div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>10 minutes ago</span>
                      <h6 className="m-t-5">Youtube, a video-sharing website, goes live.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge warning">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge danger">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>30 minutes ago</span>
                      <h6 className="m-t-5">Google acquires Youtube.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge success">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>15 minutes ago</span>
                      <h6 className="m-t-5">StumbleUpon is acquired by eBay. </h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge warning">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge dark">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge info">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>30 minutes ago</span>
                      <h6 className="m-t-5">Google acquires Youtube.</h6>
                    </a>
                  </li>
                  <li>
                    <div className="timeline-badge danger">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>30 minutes ago</span>
                      <h6 className="m-t-5">Google acquires Youtube.</h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge success">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>15 minutes ago</span>
                      <h6 className="m-t-5">StumbleUpon is acquired by eBay. </h6>
                    </a>
                  </li>

                  <li>
                    <div className="timeline-badge warning">
                    </div>
                    <a className="timeline-panel text-muted" href="#">
                      <span>20 minutes ago</span>
                      <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h5 className="card-title">Messages</h5>
            </div>
            <div className="card-body">
              <div className="media mb-3">
                <img className="mr-3 rounded-circle" alt="image" width="50" src="/assets/images/patients/pic1.jpg" />
                <div className="media-body">
                  <h5>Jacob Tucker<small className="text-primary">April 29, 2018</small></h5>
                  <p className="mb-2">I shared this on my fb wall a few months back, and I thought.</p>
                  <Link href="#" className="btn btn-primary btn-sm d-inline-block px-3">Reply</Link>
                  <Link href="#" className="btn btn-outline-danger btn-sm d-inline-block px-3">Delete</Link>
                </div>
              </div>
              <div className="media mb-3">
                <img className="mr-3 rounded-circle" alt="image" width="50" src="/assets/images/patients/pic2.jpg" />
                <div className="media-body">
                  <h5>Noah Baldon <small className="text-primary">April 28, 2018</small></h5>
                  <p className="mb-2">I shared this on my fb wall a few months back, and I thought.</p>
                  <Link href="#" className="btn btn-primary btn-sm d-inline-block px-3">Reply</Link>
                  <Link href="#" className="btn btn-outline-danger btn-sm d-inline-block px-3">Delete</Link>
                </div>
              </div>
              <div className="media mb-3">
                <img className="mr-3 rounded-circle" alt="image" width="50" src="/assets/images/patients/pic3.jpg" />
                <div className="media-body">
                  <h5>Muhammad Clay <small className="text-primary">March 24, 2020</small></h5>
                  <p className="mb-2">I shared this on my fb wall a few months back, and I thought.</p>
                  <Link href="#" className="btn btn-primary btn-sm d-inline-block px-3">Reply</Link>
                  <Link href="#" className="btn btn-outline-danger btn-sm d-inline-block px-3">Delete</Link>
                </div>
              </div>
              <div className="media">
                <img className="mr-3 rounded-circle" alt="image" width="50" src="/assets/images/patients/pic4.jpg" />
                <div className="media-body">
                  <h5>William Logan <small className="text-primary">Dec 24, 2019</small></h5>
                  <p className="mb-2">I shared this on my fb wall a few months back, and I thought.</p>
                  <Link href="#" className="btn btn-primary btn-sm d-inline-block px-3">Reply</Link>
                  <Link href="#" className="btn btn-outline-danger btn-sm d-inline-block px-3">Delete</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-12">
          <div className="card card-custom">
            <div className="card-header">
              <h4 className="card-title">Notifications</h4>
            </div>
            <div className="card-body">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge primary"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/1.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge warning"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/2.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Resport created successfully</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge danger"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/3.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Reminder : Treatment Time!</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge success"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/4.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge warning"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/1.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Resport created successfully</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge dark"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/2.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Reminder : Treatment Time!</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge info"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/3.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge danger"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/4.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Resport created successfully</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge success"></div>
                  <a className="timeline-panel text-muted mb-3 d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/1.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Reminder : Treatment Time!</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="timeline-badge warning"></div>
                  <a className="timeline-panel text-muted d-flex align-items-center" href="javascript:void(0);">
                    <img className="rounded-circle" alt="image" width="50" src="/assets/images/avatar/2.jpg" />
                    <div className="col">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetail