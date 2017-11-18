import React, { Component } from 'react';
import './Home.css'
import Content from './Content'
import Avatar from './Avatar'
import Footer from './Footer'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            diklik:false,
        }
    }

    klik = () => {
        this.setState({
            diklik: !this.state.diklik,
        })
    }
render() {
    return (
        <div className="container home">
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
                        <button className="button-join" onClick={this.klik}>{this.state.diklik ? 'Join' : 'Not Join'}</button>
                    </div>
                        <Footer/> 
                </div>
        </div>
        );
    }   
}

export default Home;