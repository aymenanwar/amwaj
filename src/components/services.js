import React, {Component} from 'react';
import s1 from "./images/consultation.png"
import s2 from "./images/notes.png"
import s3 from "./images/ebook.png"
import s4 from "./images/motel.png"


class Services extends Component{
    render(){
        return(
            <div class="service-section bg-light">
                <div class="container">
                    <div class="row ">
                        <h1 class="col-lg-4 col-sm-12">Our Services</h1>
                            <div class="col-lg-8 col-sm-12 services">
                                <div class="row top-services">
                                    <div class="col-lg-6 col-sm-3">
                                        <img src={s1} alt="pic"/>
                                        <h3 >Consulting</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi laudantium quidem unde asperiores dolore pariatur. Nostrum fuga ratione fugiat.</p>
                                    </div>
                                    <div class="col-lg-6 col-sm-3">
                                        <img src={s2} alt="pic" />
                                            <h3>Registeration</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi laudantium quidem unde asperiores dolore pariatur. Nostrum fuga ratione fugiat.</p>
                                    </div>
                                </div>


                                <div class="row bottom-services services">
                                        <div class="col-lg-6 my-3 col-sm-3">
                                            <img src={s3} alt="pic" />
                                            <h3>English Courses</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi laudantium quidem unde asperiores dolore pariatur. Nostrum fuga ratione fugiat.</p>
                                        </div>
                                        <div class="col-lg-6 my-3 col-sm-3">
                                            <img src={s4} alt="pic" />
                                                <h3>Accomediation</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi laudantium quidem unde asperiores dolore pariatur. Nostrum fuga ratione fugiat.</p>
                                        </div>
                                </div>
                                </div>
                
                </div>
            </div>
        </div>
        );
    };
}
export default Services;