import React, { Component } from "react"
import "./App.css"

class Floorplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: true
        }
    }
    
    render() { 
       
            return ( 
                <div>
                <h1>TP</h1>
                <h3>(not the<img src="https://www.stickpng.com/assets/images/589395bc8370b70e212f3e63.png"></img>)</h3>
                </div>
             )
        
    }
}

export default Floorplan;