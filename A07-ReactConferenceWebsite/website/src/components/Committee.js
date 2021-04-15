import React, { Component } from 'react';

export class Committee extends Component{
    render(){
        return(
            <div>
                <div className="content">
                <h1 >Committees</h1>
                <ul className="committee_content">
                    <li>
                        <h3>Chief Patron</h3>
                        <p><b>Dr. Shiv Nadar</b></p>
                        <p>Founder, SSN Institutions & Chairman, HCL Technologies</p> 
                    </li>
                    <li>
                        <h3>Patron</h3>
                        <p><b>Dr. Kala Vijayakumar</b></p>
                        <p>President, <a href="https://www.ssn.edu.in/">SSN Institutions</a></p> 
                    </li>
                </ul>
            </div>
            </div>
        )
    }
} 

export default Committee;