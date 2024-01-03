"use client"
import React, { useEffect, useState } from 'react'
import Banner from '@/app/components/Banner';
import { SlideshowLightbox } from 'lightbox.js-react';
import FetchData from '@/app/components/FetchData';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchData({ url: "app/allGImages", method: "GET" });        

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Gallery Images:", data)

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
            {
              data.length && data.map((item) => (<img className="lightbox_img" src={`http://172.232.189.142:8000/${item.image}`} alt={item.heading} />))
            }
          </SlideshowLightbox>
        </div>
      </div>
    </>
  )
}

export default Gallery