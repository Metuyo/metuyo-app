import React, { Component } from 'react';
import Present from '../Present/Present'
import Avatar from './Avatar'
import Profilecontent from './Content'

class Profile extends Component {
render() {
    return (
        <div className="container profile">
            <div className="profile-body">
                <div className="profileavatar">
                    <Avatar/>
                </div>
                <div className="profilecontent">
                    <Profilecontent/>
                </div>
            </div>
            <Present/>
        </div>
        );
    }   
}

export default Profile;