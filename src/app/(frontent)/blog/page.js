'use client'
import React, { useState, useEffect } from 'react';
import Banner from '@/app/components/Banner';
import Sidebar from './Sidebar';
import Link from 'next/link';

const itemsPerPage = 5;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
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

  // Check if 'posts' is an array before trying to slice it
  const currentPosts = Array.isArray(posts) ? posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Banner title="Blog" img="bnr1.jpg" />

      <div className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mb-4">
              {
                currentPosts.length ?
                  currentPosts.map((item) => (
                    <div className="blog-post blog-lg date-style-2" key={item.id}>
                      <div className="blog-post blog-lg date-style-2" key={item.id}>
                        <div className="dez-post-media dez-img-effect zoom-slow">
                          <Link href={`/blog/${item.id}`}><img src="/assets/images/blog/default/thum1.jpg" alt="" /></Link>
                        </div>

                        <div className="dez-post-info">
                          <div className="dez-post-title ">
                            <h3 className="post-title"><Link href={`/blog/${item.id}`}>{item.id}-{item.title}</Link></h3>
                          </div>

                          <div className="dez-post-meta ">
                            <ul>
                              <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2020</span> </li>
                              <li className="post-author"><i className="fa fa-user"></i>By <Link href="#">demongo</Link> </li>
                              <li className="post-comment"><i className="fa fa-comments"></i> <Link href="#">{item.userId} Comments</Link> </li>
                            </ul>
                          </div>

                          <div className="dez-post-text">
                            <p>{item.body}</p>
                          </div>

                          <div className="dez-post-readmore">
                            <Link href={`/blog/${item.id}`} title="READ MORE" rel="bookmark" className="site-button-link">READ MORE<i className="fa fa-angle-double-right"></i></Link>
                          </div>

                          <div className="dez-post-tags">
                            <div className="post-tags">
                              {
                                item.tags.map((tag, i) => {
                                  return (
                                    <Link href="#" key={i}>{tag}</Link>)
                                })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  : <p>Loading...</p>
              }

              {currentPosts.length ?
                <div className="pagination-bx clearfix ">
                  <ul className="pagination">
                    <li className="previous" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                      <Link href="#">
                        <i className="fa fa-angle-double-left"></i>
                      </Link>
                    </li>
                    {Array.from({ length: Math.ceil(posts.length / itemsPerPage) }, (_, index) => (
                      <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <Link href="#" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                    <li
                      className="next"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
                    >
                      <Link href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                : null}
            </div>

            <div className="col-lg-3">
              <Sidebar apiData={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
