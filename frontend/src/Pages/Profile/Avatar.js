import React, { Component } from 'react';
import './Avatar.css'

class Avatar extends Component {
render() {
    return (
        <div className="container avatar">
            <div>
                <img className="avatar-image" src="http://via.placeholder.com/130x130" alt="test"/>
                <label className="avatar-label">Jane Doe</label>
            </div>
        </div>
        );
    }   
}

export default Avatar;