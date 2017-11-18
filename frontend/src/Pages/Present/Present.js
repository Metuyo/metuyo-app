import React, { Component } from 'react';
import Content from './Content'
import Avatar from './Avatar'
import Footer from './Footer'

class Present extends Component {
render() {
    return (
        <div className="container present">
            <div className="present-body">
                    <div className="present-layout">
                        <div className="present-avatar">
                            <Avatar/> 
                        </div>
                        <div className="present-content">
                            <Content/> 
                        </div>
                    </div>
                    <br/>
                    <div className="present-button">
                        <button className="button-join">Joined</button>
                    </div>
                        <Footer/> 
                </div>
        </div>
        );
    }   
}

export default Present;