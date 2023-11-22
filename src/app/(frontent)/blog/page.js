import React from 'react'
import Banner from '@/app/components/Banner';
import Sidebar from './Sidebar';
import Link from 'next/link';

const Blog = async () => {
  const res = await fetch('https://dummyjson.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Banner title="Blog" img="bnr1.jpg" />

      <div className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mb-4">
              {
                data.posts.map((item) => {
                  return (
                    <div className="blog-post blog-lg date-style-2" key={item.id}>
                      <div className="dez-post-media dez-img-effect zoom-slow">
                        <Link href={`/blog/${item.id}`}><img src="/assets/images/blog/default/thum1.jpg" alt="" /></Link>
                      </div>

                      <div className="dez-post-info">
                        <div className="dez-post-title ">
                          <h3 className="post-title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
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
                  )
                })
              }

              <div className="pagination-bx clearfix ">
                <ul className="pagination">
                  <li className="previous"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                  <li className="active"><a href="#">1</a> </li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog