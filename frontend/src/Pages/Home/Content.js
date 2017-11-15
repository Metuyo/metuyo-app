import React, { Component } from 'react';
import './Home.css'
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
        <p className="title-content">Angular Vs React</p>
        <h2 className="title">Locations</h2>
        <p className="location-content">Impact Hub Kemang</p>
        <h2 className="title">Message</h2>
        <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus lectus id velit consectetur luctus. Quisque faucibus, risus nec fringilla viverra, lorem nunc aliquam arcu, sed bibendum dui purus ac sapien. Donec lobortis laoreet ante nec mollis. Aliquam venenatis quam velit, sit amet pretium odio sagittis eget.</p>
    </div>
    )   ;
    }
}

export default Content;