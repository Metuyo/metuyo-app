import React, { Component } from 'react';
import './Avatar.css'

class Avatar extends Component {
render() {
    return (
        <div className="container avatar">
            <img className="avatar-image" src="http://via.placeholder.com/100x100" alt="test"/>
            <br/>
            <label className="avatar-label">Jane Doe</label>
        </div>
        );
    }   
}

export default Avatar;