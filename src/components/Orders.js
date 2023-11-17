import React, { Component } from 'react'
import {FaTrash} from "react-icons/fa"

class Orders extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt="" />
        <div className='item__text'>
            <h2>{this.props.item.title}</h2>
            <span className='item__price'>{this.props.item.price} $</span>
        </div>
        <FaTrash className='delete__icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Orders;