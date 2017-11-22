import React, { Component } from 'react';
import Content from './Content';
import Avatar from './Avatar'
import './Home.css'


class Contentlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            diklik:false,
        };
    }
    klik = () => {
        this.setState({
            diklik: !this.state.diklik,
        })
    }
render() {
    return (
        <div>     
        {this.props.datas.map(data => {
            return <Content key={data._id} data={[data]} />
        })}
            <div className="home-body">
                    <div className="home-layout">
                        <div className="home-avatar">
                            <Avatar/> 
                        </div>
                    </div>
                    <br/>
                    <div className="home-button">
                        <button className="button-join" onClick={this.klik}>{this.state.diklik ? 'Joined' : 'Not Join'}</button>
                    </div>
                </div>
        </div>
        );
    }   
}

export default Contentlist;