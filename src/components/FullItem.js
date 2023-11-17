import React, { Component } from 'react'

export default class FullItem extends Component {
  render() {
    return (
      <div className='full__item'>
        <div className='modal__card'>
            <img src={'./img/' + this.props.item.img} alt="" onClick={() => this.props.showItems(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <span className='item_price'>{this.props.item.price}</span>
            <div className='add__cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}
