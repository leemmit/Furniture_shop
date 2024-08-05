import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt="" onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price}$</b>
        <button className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</button>
      </div>
    )
  }
}

export default Item