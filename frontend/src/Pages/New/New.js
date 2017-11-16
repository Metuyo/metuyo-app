import React, { Component } from 'react';
import Sidebar from '../../Sidebar'
import './New.css'

class New extends Component {
render() {
    return (
        <div className="container new">
            <Sidebar/>
            <div className="new-body">
                    <div>
                        <label className="new-label">Title Event</label>
                        <input className="input title" placeholder="Title"></input>
                    </div>
                    <div>
                        <label className="new-label">Location</label>
                        <input className="input location" placeholder="Location"></input>
                    </div>
                    <div>
                        <label className="label-message">Message</label>
                        <textarea className="new-textarea" placeholder="Type Your Message" rows="4"></textarea>
                    </div>
                    <div className="new-button">
                        <button className="new-button-create">Create</button>
                    </div>
                </div>
        </div>
        );
    }   
}

export default New;