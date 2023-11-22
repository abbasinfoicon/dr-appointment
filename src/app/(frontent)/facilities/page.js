import React from 'react'
import Banner from '@/app/components/Banner';

const Facilities = () => {
  return (
    <>
      <Banner title="Facilities" img="bnr1.jpg" />

      <div className="section-full content-area bg-white">
        <div className="container">
          <div className="row m-b50">
            <div className="col-lg-4 col-md-4 m-b30">
              <img src="/assets/images/machine.jpg" alt="" />
            </div>
            <div className="col-lg-8 col-md-8">
              <h2 className="text-uppercase"> Latest Facilities</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-cogs"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Safety</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-recycle"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Community</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-graduation-cap"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Sustainability</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-trophy"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Best Quality</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-pencil"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Integrity</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 m-b0">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20"> <a href="#" className="icon-cell"><i className="fa fa-flag-checkered"></i></a> </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">Strategy</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                      </div>
                    </div>
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

export default Facilities