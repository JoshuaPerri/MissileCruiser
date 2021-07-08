import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {
    state = {  }
    render() {
        let array = ["red", "red", "green"];
        
        return (<div>{array.map((x) => <Tile key={x} color={x}/>)}</div>);
    }
}
 
export default Board;