import React, { Component } from 'react';

export class Dates extends Component{
    render(){
        return(
            <div>
                 <div className="content">
            <h1>Important Dates</h1>
            <br/>
            <br/>
            <table>
                <tr>
                    <th>Events</th>
                    <th>Dates/Deadlines</th>
                </tr>
                <tr>
                    <td><b>Paper Submission Opens</b></td>
                    <td>December 01, 2020</td>
                </tr>
                <tr>
                    <td><b>Acceptance Notification</b></td>
                    <td>February 15, 2021</td>
                </tr>
                <tr>
                    <td><b>Camera Ready Submission</b></td>
                    <td>March 10, 2021</td>
                </tr>
                <tr>
                    <td><b>Pre-Conference Workshop</b></td>
                    <td>March 18, 2021</td>
                </tr>
                <tr>
                    <td><b>Conference</b></td>
                    <td>March 18-20, 2021</td>
                </tr>

            </table>
            <br/>
            <br/>
            </div>
            </div>
        )
    }
} 

export default Dates;