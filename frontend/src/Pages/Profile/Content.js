import React, { Component } from 'react';
import './Avatar.css'

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
        <label>Email</label>
        <label>Job Title</label>
        <label>Bio</label>
    </div>
    )   ;
    }
}

export default Content;