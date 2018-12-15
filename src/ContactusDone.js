import React, {Component} from 'react'


class ContactusDone extends Component{

 render(){
    let firstName = this.props;
    return(
        <h1>`Thank you {firstName} we will contact you soon`</h1>
    );
}
}
export default ContactusDone;