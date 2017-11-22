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
            <div className="home-body">
                <div className="home-layout">
                    <div className="home-avatar">
                        <Avatar/> 
                    </div>
                </div>
                <br/>
                <div>     
                    {this.props.datas.map(data => {
                        return <Content key={data._id} data={data} />
                    })}
                </div>
                <div className="home-button">
                    <button className="button-join" onClick={this.klik}>{this.state.diklik ? 'Joined' : 'Not Join'}</button>
                </div>
                
        </div>
        );
    }   
}
export default Contentlist;