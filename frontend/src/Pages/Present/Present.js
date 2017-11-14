import React, { Component } from 'react';
import Sidebar from '../../Sidebar'
import Content from './Content'
import Avatar from './Avatar'
import Footer from './Footer'

class Present extends Component {
render() {
    return (
        <div className="container present">
            <Sidebar />
            <div className="home-body">
                    <div className="home-layout">
                        <div className="home-avatar">
                            <Avatar/> 
                        </div>
                        <div className="home-content">
                            <Content/> 
                        </div>
                    </div>
                    <br/>
                    <div className="home-button">
                        <button className="button-join">Join</button>
                    </div>
                        <Footer/> 
                </div>
        </div>
        );
    }   
}

export default Present;