import React, {Component} from 'react'
import {Link} from "react-router-dom"
import { ActionAssignmentReturned } from 'material-ui/svg-icons';
import { red400 } from 'material-ui/styles/colors';


class FeatureUni extends Component{
    render(){
        return(
            <div>
                <div className="container my-5">
                    
                    <div className="row">
                        <div className="col-lg-6 my-5">
                            <h1>Featured Universities</h1>
                        </div>
                        <div className="offset-5 my-5">
                            <Link to="./unis"className="btn btn-light btn-outline-primary text-dark feature-btn">View All</Link>
                        </div>
                    </div>

                    <div className="row my-1">
                        <div className="col-lg-5 uni">
                            <div className="row">
                                <div className="col-lg-5 first-uni">
                                </div>
                                    <div className="col-lg-6 my-2">
                                        <h4>International Islamic University Malaysia</h4>
                                        <br />
                                        <h6>Kuala Lumpur (Gombak)</h6>
                                        <br />
                                        <span>Intakes: </span><span style={{color: red400}}>August</span><span> / </span><span style={{color: red400}}>Feburary</span>
                                    </div>
                                </div>
                            </div>
                    <div className="col-lg-5 uni">
                        <div className="row">
                            <div className="col-lg-5 second-uni "> </div>
                                <div className="col-lg-6 my-2">
                                    <h4>SEGi University</h4>
                                    <br />
                                    <h6>Kota Damansara - Kuala Lumpur - Penang - Subang Jaya</h6>
                                    <br />
                                    <span>Intakes: </span><span style={{color: red400}}>Januray</span><span> / </span><span style={{color: red400}}>May</span>
                                    <span> / </span><span style={{color: red400}}>September</span>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default FeatureUni;