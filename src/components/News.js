import React, {Component } from 'react';
import {Link} from 'react-router-dom'
import n1 from "./images/adults-agenda-cafe-1056551.jpg";
import n2 from "./images/slide1.jpg"
import n3 from "./images/startup-photos.jpg"

class  News extends Component{
    render(){
     return (
        <div>
            <div className="latest-news-events my-5">
                <div className="container my-5">
                    <div className="row my-5">
                        <div className="col-12">
                            <header className="heading flex justify-content-between align-items-center">
                                <h1 className="entry-title">Latest News & Events</h1>
                            </header>
                        </div>

                        <div className="col-12 col-lg-6 my-5">
                            <div className="featured-event-content">
                                <figure className="event-thumbnail position-relative m-0">
                                    <Link to="#"><img src={n1} alt="" /></Link>

                                    <div className="posted-date">
                                        <i className="fa fa-calendar"></i> 23 Mar 2018
                                    </div>
                                    
                                </figure>

                                <header className="entry-header flex flex-wrap align-items-center">
                                    
                                    <h4 className="entry-title"><a href="#">The Complete Financial Analyst Training & Investing Course</a></h4>
                                    <div className="entry-meta flex flex-wrap align-items-center">
                                            <div className="post-author"><a className="text-success"href="#">Support Team</a></div>
                                        </div>
                                    <div className="event-location"><i className="fa fa-map-marker"></i>40 Baria Sreet 133/2 NewYork City, US</div>

                                    <div className="event-duration"><i className="fa fa-calendar"></i>10 Dec - 12 dec</div>
                                </header>
                            </div>
                        </div>



                        <div className="col-12 col-lg-6 mt-5 mt-lg-0 ">
                            <div className="event-content flex flex-wrap justify-content-between align-content-stretch ">
                                <figure className="event-thumbnail">
                                    <a href="#"><img src={n2} alt="" /></a>
                                </figure>
                                <div className="event-content-wrap">
                                    <header className="entry-header">
                                        <div className="posted-date">
                                            <i className="fa fa-calendar"></i> 22 Mar 2018
                                        </div>

                                        <h4 className="entry-title"><a href="#">Personalized online learning experience</a></h4>

                                        <div className="entry-meta flex flex-wrap align-items-center">
                                            <div className="post-author"><a className="text-success"href="#">Support Team</a></div>
                                        </div>
                                    </header>

                                    <div className="entry-content">
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="event-content flex flex-wrap justify-content-between align-content-lg-stretch">
                                <figure className="event-thumbnail">
                                    <a href="#"><img src={n3} alt="" /></a>
                                </figure>

                                <div className="event-content-wrap">
                                    <header className="entry-header">
                                        <div className="posted-date">
                                            <i className="fa fa-calendar"></i> 22 Mar 2018
                                        </div>

                                        <h4 className="entry-title"><a href="#">Which investment project should my company choose?</a></h4>

                                        <div className="entry-meta flex flex-wrap align-items-center">
                                            <div className="post-author"><a className="text-success"href="#">Support Team</a></div>
                                        </div>
                                    </header>

                                    <div className="entry-content">
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
</div>


            <div className="scrol"></div>
        </div>
        );
    }
}

export default News;