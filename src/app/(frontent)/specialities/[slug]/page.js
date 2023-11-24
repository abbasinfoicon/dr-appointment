'use client'
import React from 'react'
import Banner from '@/app/components/Banner';
import { usePathname } from 'next/navigation';

const SpecialitiesDetails = () => {
    const pathname = usePathname();
    const specialitySlug = pathname.replace(/^\/specialities\//, '');
    return (
        <>
            <Banner title={specialitySlug} img="bnr1.jpg" />

            <div className="content-area">
                <div className="container">
                    <div className="row portfolio-detail">
                        <div className="col-md-12">
                            <img src="/assets/images/details.jpg" className="m-b30" alt="" />
                            <h2 className="m-b10 font-weight-700 ">{specialitySlug}</h2>
                            <p className="m-b50">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>

                            <div className="row m-b30">
                                <div className="col-md-6">
                                    <div className="p-a30 port-info-box bg-gray radius-sm">
                                        <h5>Project Name: <span className="m-l10 font-weight-300 text-black"> Business Accounting</span></h5>
                                        <h5>Client: <span className="m-l10 font-weight-300 text-black"> Company Name Inc.</span></h5>
                                        <h5>Project Commencement Date: <span className="m-l10 font-weight-300 text-black"> August 18, 2020</span></h5>
                                        <h5>Priject Completion Date: <span className="m-l10 font-weight-300 text-black"> August 18, 2020</span></h5>
                                        <h5>Project url: <span className="m-l10 font-weight-300 text-black">www.example.com</span></h5>
                                    </div>
                                </div>
                                <div className="col-md-6 info-box align-self-center">
                                    <h5 className="text-black fw5 m-b10">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close.</h5>
                                    <p className="m-b0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialitiesDetails