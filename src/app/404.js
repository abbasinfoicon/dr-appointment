import React from 'react'
import Banner from '../components/Banner'

const Custom404 = () => {
    return (
        <>
            <Banner title="About us" />

            <div className="container pb-5">
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-notfound text-center">
                                <form method="post">
                                    <strong>4<i className="fa fa-frown-o text-primary"></i>4</strong>
                                    <h5 className="m-b20 text-uppercase">Page not found</h5>
                                    <a href="#" className="site-button "><span>Go to home</span></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Custom404
