import React from 'react';
import Card from "./Card";

class Board extends React.Component {

    constructor(props) {
        super(props);
    }


    drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    dragOver = e => {
        e.preventDefault();
    }

    render(props) {
        return (
            <div
                id={this.props.id}
                onDrop={this.drop}
                onDragOver={this.dragOver}
                className={this.props.className}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Board