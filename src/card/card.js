import React, { Component } from 'react';
import Draggable from 'react-draggable';


class Card extends Component {
    render() {
        return (
            <Draggable bounds="parent" >
                <div className={"test"}>

                </div>
            </Draggable>
        );
    }
}


export default Card;