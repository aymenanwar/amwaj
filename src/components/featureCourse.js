import React, {Component} from 'react'
import {Link} from "react-router-dom";
import c1 from "./images/startup.png"
import c2 from "./images/doctor.png"
import c3 from "./images/laptop.png"
import c4 from "./images/engineer.png"
import c5 from "./images/employee.png"
import c6 from "./images/meeting.png"

class FeatureCourse extends Component{
    render()
   { 
       
    return(
        <div className="container-fluid my-5">
                        <div className="row my-5">
                            <div className="col-lg-12 services-wrap my-5">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c1} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Business Administration</p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c2} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Optimitry <br /></p>
                                            </div>
                                          </div>
                                    </div>                                    
                                    <div className="col-lg-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c3} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Computer Science <br /></p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c4} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Engineering <br /></p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c5} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Accounting & Finance</p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6 text-center animate-box">
                                        <div className="card" >
                                            <img className="card-img-top" src={c6} alt="Card  cap" />
                                            <div className="card-body">
                                              <p className="card-text">Mass Communication</p>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center my-4 ">
                                <p><Link to="./courses"className="btn btn-primary btn-outline btn-lg btn-discover popup-vimeo">Discover Courses </Link> </p>
                            </div>
                        </div>
                    </div>
                
                
    );

}
}
export default FeatureCourse;