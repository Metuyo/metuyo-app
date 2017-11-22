import React, { Component } from 'react';
import './Home.css'
import Contentlist from './Contentlist'
import axios from "axios";


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        };
    }

    componentWillMount() {
        this.getEvents();
    }
    
    getEvents() {
        axios
        .request({
            method: "get",
            url: process.env.REACT_APP_API_URL + "/notes"
        })
        .then(response => {
            this.setState({ datas: response.data }, () => {
            console.log(this.state);
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

render() {
    return (
        <div className="container home">
            <div className="home-content">
                <Contentlist datas={this.state.data}/> 
            </div>
        </div>
        );
    }   
}

export default Home;