import React, { Component } from 'react';

class Tile extends Component {
    state = {  }

    constructor(props) {
        super(props);
        this.state = {      
            color: props.color,
        };
    }

    render() { 
        return (<div onClick={() => {this.setState({color: "black"})}} class="Tile" style={{backgroundColor: this.state.color}}>  
            
        </div>);
    }
}
 
export default Tile;