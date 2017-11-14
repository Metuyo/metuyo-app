import React, { Component } from 'react';
import './Home.css'
import Sidebar from '../../Sidebar'
import Content from './Content'
import Avatar from './Avatar'
import Footer from './Footer'

class Home extends Component {
render() {
    return (
        <div>
            <Sidebar/>
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

export default Home;