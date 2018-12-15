import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Footer extends Component{
    render(){
        return(
            
                <div className="page-footer font-small unique-color-dark" >

                    <div className="footer-bg" style={{backgroundColor: "#6351ce"}}>
                    <div className="container">

                        
                        <div className="row py-4 d-flex align-items-center">

                        
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h5 className="mb-0">Get connected with us on social networks!</h5>
                        </div>
                        
                        <div className="col-md-6 col-lg-7 text-center text-md-right socials">

                            
                            <Link className="facebook-f" to="http://www.facebook.com">
                            <i className="fab fa-facebook-f mr-4"></i>
                            </Link>
                            
                            <Link className="tw-ic"to="http://www.twitter.com">
                            <i className="fab fa-twitter white-text mr-4"> </i>
                            </Link>
                            
                            <Link className="gplus-ic"to="http://www.google.com">
                            <i className="fab fa-google-plus white-text mr-4"> </i>
                            </Link>
                        
                            <Link className="li-ic"to="http://www.facebook.com">
                            <i className="fab fa-linkedin white-text mr-4"> </i>
                            </Link>
                        
                            <Link className="ins-ic"to="http://www.instagram.com">
                            <i className="fab fa-instagram white-text"> </i>
                            </Link>

                        </div>
                    

                        </div>
                    

                    </div>
                    </div>

                    
                    <div className="container text-center text-md-left mt-5">

                    
                    <div className="row mt-3">

                    
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        
                        <h6 className="text-uppercase font-weight-bold">Amwaj Education</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor:"#6351ce"}} />
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.</p>

                        </div>
                        
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor:"#6351ce"}} />
                        <p>
                            <Link to="#!">Latest News</Link>
                        </p>
                        <p>
                            <Link to="/unis">Universities</Link>
                        </p>
                        <p>
                            <Link to="/courses">Courses</Link>
                        </p>


                        </div>
                    
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor:"#6351ce"}} />
                        <p>
                            <a href="/register">Apply</a>
                        </p>
                        <p>
                            <a href="/about">About us</a>
                        </p>
                        <p>
                            <a href="/contactus">Contact us</a>
                        </p>
                        

                        </div>
                    
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor:"#6351ce"}} />
                        <p>
                            <i className="fa fa-home mr-3"></i> Kuala Lumpur, PJ 47810, Malaysia</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i> support@amwaj-edu.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> +6 01 123 3819 56</p>
                        

                        </div>
                        

                    </div>
                    
                    </div>
                    

                
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> AMWAJ EDUCATION</a>
                    </div>
                    

            </div>
 
        );
    }
}

export default Footer;