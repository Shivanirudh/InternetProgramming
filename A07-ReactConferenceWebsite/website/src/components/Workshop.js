import React, { Component } from 'react';

export class Workshop extends Component{
    render(){
        return(
            <div>
               <div className="content">
            <h1>Workshops</h1>
            <br/>
            <br/>
            <p>Workshop will be conducted in two tracks:</p>
            <table>
                <tr>
                    <th>Tracks</th>
                    <th>Topic</th>
                </tr>
                <tr>
                    <td><b>Track 1</b></td>
                    <td>Data Analytics & Blockchain</td>
                </tr>
                <tr>
                    <td><b>Track 2</b></td>
                    <td>IoT and Blockchain</td>
                </tr>
            </table>
            <br/>
            <br/>
          
    </div>
            </div>
        )
    }
} 

export default Workshop;