import React from 'react';
import ReactDOM from 'react-dom';

class Node extends React.Component{

    constructor(props) {
        super(props);
    }

    dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0 );
    }

    dragOver = e => {
        e.stopPropagation();
    }

    render(props){
        return (
            <div
                id={props.id}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                className={props.className}
                draggable={props.draggable}
            >
                {props.children}
            </div>
        );
    }

}

export default Node