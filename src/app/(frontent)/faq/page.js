'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/app/components/Banner';
import Link from 'next/link';

const Faq = () => {
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
        setActivePanel((prevPanel) => (prevPanel === panel ? null : panel));
    };

    useEffect(() => {
        // Add any additional initialization or side effects here
    }, []);

    return (
        <>
            <Banner title="FAQ's" img="bnr1.jpg" />

            <div className="section-full  bg-white">
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                {/* Your other content */}
                                {faqData.map((section, index) => (
                                    <div className="m-b30" key={index}>
                                        <h2 className="m-b10">{section.title}</h2>
                                        <p>{section.description}</p>

                                        <div className="accordion space faq-bx">
                                            {section.questions.map((question, i) => (
                                                <div className="panel" key={i}>
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <p className={activePanel === i + 1 + index * 100 ? '' : 'collapsed'} onClick={() => togglePanel(i + 1 + index * 100)}>
                                                                <i className="fa fa-question-circle"></i> {question.title}
                                                            </p>
                                                        </h6>
                                                    </div>
                                                    <div id={`collapse${i + 1}${index}`} className={`acod-body collapse ${activePanel === i + 1 + index * 100 ? 'show' : ''}`}>
                                                        <div className="acod-content">{question.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-3">
                                <div className="faqside m-b30">
                                    <div className="candidates-are-sys m-b30">
                                        <div className="candidates-bx">
                                            <div className="testimonial-pic radius"><img src="/assets/images/testimonials/pic3.jpg" alt="" width="100" height="100" /></div>
                                            <div className="testimonial-text">
                                                <p>I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.</p>
                                            </div>
                                            <div className="testimonial-detail"> <strong className="testimonial-name">Richard Anderson</strong> <span className="testimonial-position">Nevada, USA</span> </div>
                                        </div>
                                    </div>
                                    <div className="quote-bx">
                                        <div className="quote-info">
                                            <h4>Be healthy now is so simple!</h4>
                                            <p>Your resume in minutes with JobBoard resume assistant is ready!</p>
                                            <Link href="#" className="site-button">Create an Account</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Faq

const faqData = [
    {
        title: 'General Questions',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        questions: [
            {
                title: 'Can I Get A Refund?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Where Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: ' here Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
        ],
    },
    {
        title: 'Popular articles',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        questions: [
            {
                title: 'Can I Get A Refund?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Where Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: ' here Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
        ],
    },
    {
        title: 'General Questions',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        questions: [
            {
                title: 'Can I Get A Refund?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Where Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: 'Showcase Items with a Referral Widget',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
            {
                title: ' here Can I Find my Purchase Code?',
                answer: 'Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus. ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Claritas est etiam processu',
            },
        ],
    },
];