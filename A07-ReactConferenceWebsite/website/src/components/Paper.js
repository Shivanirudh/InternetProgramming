import React, { Component } from 'react';

export class Paper extends Component{
    render(){
        return(
            <div>
                <div className="content">
        <h1>Call for papers</h1>
        <p>
            The ICCIDS 2021 conference invites the submission of regular and short papers on substantial, original, and unpublished research in all aspects of Computational Intelligence, Data Science, Image / Natural Language Processing and Blockchain.
        </p>
        <p>
            Relevant topics for the conference include, but are not limited to, the following areas: 
        </p>
        <ol className="tracks_list">
            <li>
                <p>Machine Learning (ML), Deep Learning (DL), Internet of Things (IoT)</p>
                <ul>
                    <li>Pattern recognition</li>
                    <li>Evolutionary computation</li>
                    <li>Information retrieval</li>
                </ul>
            </li>
            <li>
                <p>Blockchain</p>
                <ul>
                    <li>Blockchain based AI and cloud computing </li>
                    <li>Blockchain based Machine and Deep Learning of Knowledge</li>
                    <li>Blockchain-based Software defined networks</li>
                </ul>
            </li>
        </ol>
    </div>
            </div>
        )
    }
} 

export default Paper;