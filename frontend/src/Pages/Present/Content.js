import React, { Component } from 'react';
import './Present.css'
// const API_URL="http://localhost:4000/notes"

class Content extends Component {
//     constructor(props){
//     super(props)
//     this.state = {
//     data:[]
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
    return (
    <div className="container content">
        <h2 className="title">Title</h2>
        <p className="title-content">Vue js</p>
        <h2 className="title">Locations</h2>
        <p className="location-content">Mcdonald Kemang</p>
        <h2 className="title">Message</h2>
        <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus lectus id velit consectetur luctus.</p>
    </div>
    )   ;
    }
}

export default Content;