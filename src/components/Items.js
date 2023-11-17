import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
    render() {
        return (
            <main className='main'>
                {this.props.items.map(el=>(
                    <Item key={el.id} item={el} onAdd={this.props.onAdd} showItems={this.props.showItems}/>
                    
                ))}
            </main>
        );
    }
}

export default Items;