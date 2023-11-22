'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/app/components/Banner';
import Sidebar from '../Sidebar';
import { useParams } from 'next/navigation'
import Link from 'next/link';

const BlogDetails = () => {
    const params = useParams();
    const id = params.id
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const postData = await res.json();
                setData(postData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Banner title={data.title} img="bnr1.jpg" />

            <div className="content-area">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 mb-4">

                            <div className="blog-post blog-single">
                                <div className="dez-post-title ">
                                    <h3 className="post-title"><a href="#">{data.id}-{data.title}</a></h3>
                                </div>
                                <div className="dez-post-meta m-b20">
                                    <ul>
                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2020</span> </li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="#">demongo</a> </li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="#">{data.userId} Comments</a> </li>
                                    </ul>
                                </div>
                                <div className="dez-post-media dez-img-effect zoom-slow"> <a href="#"><img src="/assets/images/blog/default/thum1.jpg" alt="" /></a> </div>
                                <div className="dez-post-text">
                                    <p>{data.body}</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum
                                        is simply dummy text of the printing and typesetting  printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen  It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                    <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since
                                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimencenturies.</blockquote>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                                    <h5>Completely Responsive</h5>
                                    <img className="alignleft" width="300" src="/assets/images/blog/grid/pic4.jpg" alt="" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release</p>
                                    <div className="dez-divider bg-gray-dark"></div>
                                    <img className="alignright" width="300" src="/assets/images/blog/grid/pic1.jpg" alt="" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                        Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release</p>
                                </div>
                                <div className="dez-post-tags clear">
                                    <div className="post-tags">
                                        {
                                            data.tags.map((tag, i) => {
                                                return (
                                                    <Link href="#" key={i}>{tag}</Link>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="clear" id="comment-list">
                                <div className="comments-area" id="comments">
                                    <div className="share-details-btn">
                                        <ul>
                                            <li><h5 className="m-a0">Share Post:</h5></li>
                                            <li><a href="#" className="site-button facebook button-sm"><i className="fa fa-facebook"></i> Facebook</a></li>
                                            <li><a href="#" className="site-button google-plus button-sm"><i className="fa fa-google-plus"></i> Google Plus</a></li>
                                            <li><a href="#" className="site-button linkedin button-sm"><i className="fa fa-linkedin"></i> Linkedin</a></li>
                                            <li><a href="#" className="site-button instagram button-sm"><i className="fa fa-instagram"></i> Instagram</a></li>
                                            <li><a href="#" className="site-button twitter button-sm"><i className="fa fa-twitter"></i> Twitter</a></li>
                                            <li><a href="#" className="site-button whatsapp button-sm"><i className="fa fa-whatsapp"></i> Whatsapp</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="comments-title">8 Comments</h2>
                                    <div className="">

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic1.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                    <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
                                                        Nam vitae neque vitae sapien malesuada aliquet. </p>
                                                    <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                </div>
                                                <ol className="children">
                                                    <li className="comment odd parent">
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic2.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                            <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                ac elementum ligula blandit ac.</p>
                                                            <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                        </div>
                                                        <ol className="children">
                                                            <li className="comment odd parent">
                                                                <div className="comment-body">
                                                                    <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic3.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                                    <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                                        ac elementum ligula blandit ac.</p>
                                                                    <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                                </div>
                                                            </li>
                                                        </ol>

                                                    </li>
                                                </ol>

                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic1.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                    <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                        ac elementum ligula blandit ac.</p>
                                                    <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic2.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                    <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                        ac elementum ligula blandit ac.</p>
                                                    <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> <img className="avatar photo" src="/assets/images/testimonials/pic3.jpg" alt="" /> <cite className="fn">Stacy poe</cite> <span className="says">says:</span> </div>
                                                    <div className="comment-meta"> <a href="#">October 6, 2020 at 7:15 am</a> </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet.
                                                        In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis,
                                                        ac elementum ligula blandit ac.</p>
                                                    <div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
                                                </div>
                                            </li>
                                        </ol>

                                        <div className="comment-respond" id="respond">
                                            <h3 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h3>
                                            <form className="comment-form" id="commentform" method="post" action="/">
                                                <p className="comment-form-author">
                                                    <label for="author">Name <span className="required">*</span></label>
                                                    <input type="text" defaultValue="Author" name="Author" placeholder="Author" id="author" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <label for="email">Email <span className="required">*</span></label>
                                                    <input type="text" defaultValue="email" placeholder="Email" name="email" id="email" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <label for="url">Website</label>
                                                    <input type="text" defaultValue="url" placeholder="Website" name="url" id="url" />
                                                </p>
                                                <p className="comment-form-comment">
                                                    <label for="comment">Comment</label>
                                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                </p>
                                                <p className="form-submit">
                                                    <input type="submit" defaultValue="Post Comment" className="submit" id="submit" name="submit" />
                                                </p>
                                            </form>
                                        </div>

                                    </div>
                                </div>
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

export default BlogDetails