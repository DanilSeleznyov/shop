import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt="" onClick={()=> this.props.showItems(this.props.item)}/>
        <p>{this.props.item.desc}</p>
        <span className='item__price'>{this.props.item.price} $</span>
        <div className='add__cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item;