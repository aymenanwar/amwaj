import React, {Component} from 'react';
import { Card,  CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import courseImg from './components/images/startup-photos.jpg';
import "./App.css";

class Courses extends Component{
    state = {
        courses:[{
            id:1,
            name: "Business Administration",
            years: 4,
            unis: ["Abertay Dundee", "SEGi University", "IIUM", "Monash University"],
            text: "Business Administration is a great startup to your business career, huge potentil growth as well as optimistic future.",
            pic: courseImg
        },
            {
            id: 2,
            name: "Business Administration",
            years: 4,
            unis: ["Abertay Dundee", "SEGi University", "IIUM", "Monash University"],
            text: "Business Administration is a great startup to your business career, huge potentil growth as well as optimistic future.",
            pic: courseImg
            },
            {
            id:3,
            name: "Business Administration",
            years: 4,
            unis: ["Abertay Dundee ", "SEGi University", "IIUM", "Monash University"],
            text: "Business Administration is a great startup to your business career, huge potentil growth as well as optimistic future.",
            pic: courseImg
            }
        ]
    }
    render(){
        
    return(
        <div className="container courses cards " style={{marginTop:'50px'}}>
            <h1>Featured Courses</h1>
            <div className="row ">
                {this.state.courses.map((course =>{
                    return(
                        <CardDeck className="col-md-4 my-3" key={course.id}>
                            <Card className="card-item">
                                <CardImg top src={course.pic} alt={course.name} className="round"/>
                                <CardBody>
                                    <CardTitle>{course.name}</CardTitle>
                                    <CardSubtitle>Available at: {course.unis} </CardSubtitle>
                                    <CardText>Duration: {course.years} years</CardText>
                                    <CardText>{course.text}</CardText>
                                    <a href="/courses"className="btn btn-success" >Read more</a>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    );
                })
                )}
            </div>
        </div> 
    );}
}

export default Courses;