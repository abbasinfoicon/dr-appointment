import React from 'react'

const Sidebar = ({apiData}) => {
    console.log("currentPosts -", apiData)
    return (
        <aside className="side-bar">
            <div className="widget">
                <h4 className="widget-title">Search</h4>
                <div className="search-bx">
                    <form role="search" method="post">
                        <div className="input-group">
                            <input name="text" type="text" className="form-control" placeholder="Write your text" />
                            <span className="input-group-btn">
                                <button type="submit" className="site-button"><i className="fa fa-search"></i></button>
                            </span> </div>
                    </form>
                </div>
            </div>

            <div className="widget recent-posts-entry">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="widget-post-bx">
                    {
                        apiData.length ?
                            apiData.slice(0, 4).map((item) => {
                                return (
                                    <div className="widget-post clearfix" key={item.id}>
                                        <div className="dez-post-media"> <img src="/assets/images/blog/recent-blog/pic1.jpg" width="200" height="143" alt="" /> </div>
                                        <div className="dez-post-info">
                                            <div className="dez-post-header">
                                                <h6 className="post-title"><a href="#">{item.title}</a></h6>
                                            </div>
                                            <div className="dez-post-meta">
                                                <ul>
                                                    <li className="post-author">By <a href="#">Admin</a></li>
                                                    <li className="post-comment"><i className="fa fa-comments"></i> {item.userId}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : <p>Loading...</p>
                    }
                </div>
            </div>

            <div className="widget widget_categories">
                <h4 className="widget-title">Categories List</h4>
                <ul>
                    <li><a href="#">aciform</a> (1)</li>
                    <li><a href="#">championship</a> (1) </li>
                    <li><a href="#">chastening</a> (1) </li>
                    <li><a href="#">clerkship</a> (1) </li>
                    <li><a href="#">disinclination</a> (1) </li>
                    <li><a href="#">disinfection</a> (1) </li>
                    <li><a href="#">dispatch</a> (1) </li>
                    <li><a href="#">echappee</a> (1) </li>
                    <li><a href="#">Edge Case</a> (6) </li>
                    <li><a href="#">enphagy</a> (1) </li>
                </ul>
            </div>

            <div className="widget widget_gallery">
                <h5 className="widget-title">Our services</h5>
                <ul>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic2.jpg" alt="" /></div></a>
                    </li>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic1.jpg" alt="" /></div></a>
                    </li>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic5.jpg" alt="" /></div></a>
                    </li>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic7.jpg" alt="" /></div></a>
                    </li>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic8.jpg" alt="" /></div></a>
                    </li>
                    <li><a href="#"><div className="dez-post-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <img src="/assets/images/gallery/small/pic9.jpg" alt="" /></div></a>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h4 className="tagcloud">Tags</h4>
                <div className="tagcloud"> <a href="#">Design</a> <a href="#">User interface</a> <a href="#">SEO</a> <a href="#">WordPress</a> <a href="#">Development</a> <a href="#">Joomla</a> <a href="#">Design</a> <a href="#">User interface</a> <a href="#">SEO</a> <a href="#">WordPress</a> <a href="#">Development</a> <a href="#">Joomla</a> <a href="#">Design</a> <a href="#">User interface</a> <a href="#">SEO</a> <a href="#">WordPress</a> <a href="#">Development</a> <a href="#">Joomla</a> </div>
            </div>
        </aside>
    )
}

export default Sidebar