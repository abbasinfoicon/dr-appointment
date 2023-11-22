"use client"
import React, { useEffect } from 'react'
import Banner from '@/app/components/Banner';
import { SlideshowLightbox } from 'lightbox.js-react';
var $ = require("jquery");

const Gallery = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = require('jquery');
    }
  }, []);

  return (
    <>
      <Banner title="Gallery" img="bnr1.jpg" />

      <div className="section-full content-inner gallery-projects">
        <div className="section-head  text-center text-black">
          <h3 className="h3 text-uppercase">Our <span className="text-primary">Gallery</span></h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
        </div>

        <div className="clearfix">
          <SlideshowLightbox className="slide__gallery">
            <img className="lightbox_img" src="/assets/images/our-work/work/pic1.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic2.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic3.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic4.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic5.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic6.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic7.jpg" />
            <img className="lightbox_img" src="/assets/images/our-work/work/pic8.jpg" />
          </SlideshowLightbox>
        </div>
      </div>
    </>
  )
}

export default Gallery