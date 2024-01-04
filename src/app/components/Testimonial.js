'use client'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const options = {
    loop: true,
    margin: 30,
    autoplaySpeed: 8000,
    autoplay: 5000,
    autoplayHoverPause:true,
    nav: true,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: { items: 1 },
        480: { items: 2 },
        991: { items: 2 },
        1000: { items: 3 }
    }
}

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/quotes');

                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }

                const data = await res.json();
                setTestimonial(data.quotes);

                if (!data) {
                    return <p>Loading...</p>;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        testimonial.length && <OwlCarousel className="testimonial-three1 owl-theme owl-btn-3 primary owl-btn-center-lr owl-dots-white-full btn-white" {...options}>
            {
                testimonial.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="testimonial-2 testimonial-bg">
                                <div className="testimonial-text">
                                    <p>{item.quote}</p>
                                </div>
                                <div className="testimonial-detail clearfix">
                                    <div className="testimonial-pic quote-left radius shadow"><img src="/assets/images/testimonials/pic1.jpg" alt="" width="100" height="100" /></div>
                                    <strong className="testimonial-name">{item.author}</strong> <span className="testimonial-position">Student</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    )
}

export default Testimonial