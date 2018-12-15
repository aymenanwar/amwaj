import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Contact extends Component{
    state = {
        firsName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});   
    }
    render(){
        return(
            <MuiThemeProvider className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1 style={{marginTop: "150px"}}>Get in touch wiht us!</h1>
                        <TextField style={{marginRight:"30px"}}
                            hintText="Enter Your First Name"
                            floatingLabelText="First Name"
                            onChange={this.handleChange('firstName')}
                        />
                        <TextField
                            hintText="Enter Your Last name"
                            floatingLabelText="Last Name"
                            onChange={this.handleChange('lastName')}
                        />
                        <br />
                        <TextField style={{marginRight:"30px"}}
                            hintText="Enter Your Email"
                            floatingLabelText="Your Email"
                            onChange={this.handleChange('email')}
                        />
                    
                        <TextField
                            hintText="Enter Your Phone number"
                            floatingLabelText="Phone"
                            onChange={this.handleChange('phone')}
                        />
                        <br />
                        <TextField
                            id="standard-textarea"
                            label="With placeholder multiline"
                            hintText="Type your message here"
                            floatingLabelText="Message"
                            multiline
                            margin="normal"
                            onChage={this.handleChange('message')}
                            
                        />
                            <br />
                        <RaisedButton
                        label="Send"
                        primary={true}
                        style={{margin:"20px"}}
                        />
                        
                </div>        

                <div className="col-md-6 col-sm-12 contactus-social" style={{marginTop:"250px"}}> 
                    <h2>AMWAJ Education</h2>
                    <p>47810 Kota Damansara, PJ Uptown, taman Sains</p>
                    <p><a href="call:+601123381956">+601123381956</a></p>
                    <a href="mailto:support@amwaj-edu.com">support@amwaj-edu.com</a>
                    
                    
                    <div className=" text-center "
                        style={{marginTop:"10px"}}
                    >

                            
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
                        
                            <a className="ins-ic"href="http://www.instagram.com">
                            <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </div>
                </div>   

            </div>         
          </MuiThemeProvider>
        );
    }
}
export default Contact;