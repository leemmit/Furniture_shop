import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
        <div className='full-item'>
            <div>
                <img src={'./img/' + this.props.item.img} alt=""/>
                <div>
                    <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.title}</h2>
                    <p>{this.props.item.description} Quibusdam nobis tempore qui pariatur, 
                    nisi similique dignissimos excepturi!</p>
                    <b>{this.props.item.price}$</b>
                    <button className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</button>
                </div>
                <p className='close-btn' onClick={() => this.props.onShowItem(this.props.item)}>&#10006;</p>
            </div>
        </div>
        )
    }
}

export default ShowFullItem