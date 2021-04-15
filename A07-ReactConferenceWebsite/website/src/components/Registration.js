import React, { Component } from 'react';

export class Registration extends Component{
    render(){
        return(
            <div>
                <div className="content">
            <h1>Pre-Conference Workshop Registration</h1>
            <br/><br/>
            <table>
                <tr> 
                    <td><label for="fname">Full name:</label></td>
                    <td><input type="text" id="fname" name="fname" placeholder="John Johnson"/></td>
                </tr>
                <tr> 
                    <td><label for="mob">Mobile number:</label></td>
                    <td><input type="number" id="mob" name="mob" placeholder="987654321"/></td>
                </tr>
                <tr> 
                    <td><label for="mail">Email ID:</label></td>
                    <td><input type="text" id="mail" name="mail" placeholder="name@domain.com"/></td>
                </tr>
                <tr> 
                    <td><label for="category">Choose your category:</label></td>
                    <td>
                        <select id="category" name="category">
                            <option value="None"></option>
                            <option value="Student">Student</option>
                            <option value="Academic">Academic/R&D</option>
                            <option value="Industry Delegates">Industry Delegates</option>
                          </select>
                    </td>
                </tr>
                <tr> 
                    <td><label for="track">Choose track:</label></td>
                    <td>
                        <select id="track" name="track">
                            <option value="None"></option>
                            <option value="Track1">Track 1: Data Analytics & Blockchain</option>
                            <option value="Track2">Track 2: IoT and Blockchain</option>
                          </select>
                    </td>
                </tr>
                <tr rowspan="2">
                    <td><input type="submit" value="Submit"/></td>
                </tr>
            </table>
            <br/><br/>
            </div>
            </div>
        )
    }
} 

export default Registration;