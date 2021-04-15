import React, { Component } from 'react';

export class Contact extends Component{
    render(){
        return(
            <div>
            <div className="content">
            <h1 >Contact</h1>
            <br/><br/>
            <ul>
                <li><h2>Shivanirudh S G</h2></li>
                <li>Mobile: +91 94454 35407</li>
                <li>Email: <a className="mail" href="mailto:shivanirudh18146@cse.ssn.edu.in">shivanirudh18146@cse.ssn.edu.in</a></li>
            </ul>
            <br/><br/>
            </div>
            </div>
        )
    }
} 

export default Contact;