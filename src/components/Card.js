import React from 'react';

class Card extends React.Component {

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

    render() {
        return (
            <div
                id={this.props.id}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                className={this.props.className}
                draggable={this.props.draggable}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Card