import React, {Component } from 'react';
import './App.css';
import AboutPic from './components/images/amwaj.jpg' 


class  About extends Component{
    render(){
     return (
        <div>
            <img className='About-image' src={AboutPic} alt='Some pic'  />
            <h1>About AMWAJ Education</h1>
            <p> this is amwaj education a cross contry always there to help you with your academic needs as we advice and register you for the bright future that awaits you </p>
        </div>
        );
    }
}

export default About;