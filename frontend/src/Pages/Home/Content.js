import React, { Component } from 'react';
import './Home.css'
// const API_URL="http://localhost:4000/notes"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: props.data
        };
    }
//     constructor(props){
//     super(props)
//     this.state = {
//         event: props.event,
//         data:[]
//     }
// }

//     async componentWillMount(){
//     const RESPONSE = await fetch(API_URL)
//     const DATA = await RESPONSE.json()
//     console.log(DATA)
//     this.setState({
//     data:DATA
//         }
//     )
// }

render() {
    console.log(this.props.data);

    const data = this.state.data;
    return (
    <div className="container content">
            <h2 className="title">Title</h2>
            <p className="title-content">{data.title}</p>
            <h2 className="title">Locations</h2>
            <p className="location-content">{data.location}</p>
            <h2 className="title">Message</h2>
            <p className="message-content">{data.message}</p>
    </div>
    )   ;
    }
}

export default Content;