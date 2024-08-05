import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    label: 'Всё'
                },
                {
                    key: 'table',
                    label: 'Столы'
                },
                {
                    key: 'chair',
                    label: 'Стулья'
                },
                {
                    key: 'sofa',
                    label: 'Диваны'
                },
                {
                    key: 'bedside_table',
                    label: 'Тумбы'
                },
                {
                    key: 'light',
                    label: 'Освещение'
                },
                {
                    key: 'wardrobe',
                    label: 'Гардероб'
                },
                {
                    key: 'shelf',
                    label: 'Полки'
                },
            ]
        }
    }
    render() {
        return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.label}</div>
            ))}
        </div>
        )
    }
}

export default Categories