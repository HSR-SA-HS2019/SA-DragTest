import React from 'react';

const Item = props => (
    <li>{props.time}</li>
);

class List extends React.Component
{
    constructor() {
        super();
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        let item = {
            id: this.state.items.length + 1,
            time: +new Date()
        };

        this.setState({
            items: this.state.items.concat([item])
        });
    }

    removeItem() {
        this.setState({
            items: this.state.items.concat().splice(1)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem}>Add Item</button>
                <button onClick={this.removeItem}>Remove Item</button>
                <ul className='list'>
                    {this.state.items.map(item => (
                        <Item key={item.id} time={item.time} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List