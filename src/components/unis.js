import React, {Component} from 'react';  
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import '../App.css';
import Pics from './images/iium.jpeg'
import {  blue600 } from 'material-ui/styles/colors';



class Unis extends Component {

  state= {
    unis:[{
      id:1,
      pic:Pics,
      name:'Abertay Dundee',
      location:'Scotland, United Kingdom',
      text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:2,
      pic:Pics,
      name:'SEGi University',
      location:'Petaling Jaya, Malaysia',
      text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:3,
      pic:Pics,
      name:'Islamic International University Malaysia',
      location:'Kuala Lumpur, Malaysia',
      text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:4,
      pic:Pics,
      name:'Islamic International University Malaysia',
      location:'Kuala Lumpur, Malaysia',
      text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }]
  }
        render(){
          return (
            <div style={{marginTop:'50px'}} className="container cards">
              <h1>Featured Universities</h1>
                <div className="row">
                {this.state.unis.map((item) =>{
                  
                        return(
                          <CardDeck className=' col-md-4 my-3'  key={item.id}>
                            <Card className='card-item'>
                              <CardImg top  src={item.pic} alt="Card image cap" className="round" />
                              <CardBody>
                                <CardTitle style={{color: blue600}}>{item.name}</CardTitle>
                                <CardSubtitle>{item.location}</CardSubtitle>
                                <CardText>{item.text}</CardText>
                                <a href="#"className="btn btn-success" >Read more</a>
                              </CardBody>
                            </Card>
                          </CardDeck>
                      );
                  
                    }
                )
              }
            </div>
            </div>
          );
        }
      }

export default Unis;