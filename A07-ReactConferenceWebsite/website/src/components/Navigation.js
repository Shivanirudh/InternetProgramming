import React, { Component } from 'react';
import {Link} from "react-router-dom";
/*
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faHistory} from '@fortawesome/free-solid-svg-icons';*/
export class Navigation extends Component {
    render() {
        return (
            <div>
                <span>
                <ul className="navbar">  
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/committee">Committees</Link>
                    </li>
                    <li>
                        <Link to="/paper">Call for papers</Link>
                    </li>
                    <li>
                        <Link to="/dates">Important Dates</Link>
                    </li>
                    <li>
                        <Link to="/workshop">Workshop</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
                </span>
            </div>
        )
    }
}

export default Navigation