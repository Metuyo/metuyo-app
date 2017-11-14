import React, { Component } from 'react';
import Sidebar from '../Sidebar'
import Avatar from './Profile/Avatar';
import Content from './Profile/Content';

class Profile extends Component {
render() {
    return (
        <div className="container profile">
            <Sidebar />
            <Avatar/>
            <Content/>
        </div>
        );
    }   
}

export default Profile;