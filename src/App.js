import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
//import { render } from "@testing-library/react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стол',
          img: 'table2.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'table',
          price: '149.00'
        },
        {
          id: 2,
          title: 'Стул',
          img: 'chair.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chair',
          price: '49.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.webp',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'sofa',
          price: '549.00'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'light',
          price: '29.00'
        },
        {
          id: 5,
          title: 'Шкаф',
          img: 'wardrobe.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'wardrobe',
          price: '329.00'
        },
        {
          id: 6,
          title: 'Рейл',
          img: 'rail.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'wardrobe',
          price: '169.00'
        },
        {
          id: 7,
          title: 'Полка',
          img: 'shelf.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'shelf',
          price: '39.00'
        },
        {
          id: 8,
          title: 'Тумба',
          img: 'bedside_table.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'bedside_table',
          price: '69.00'
        },
        {
          id: 9,
          title: 'Кофейный столик',
          img: 'coffee table.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'table',
          price: '79.00'
        },
        {
          id: 10,
          title: 'Кресло',
          img: 'armchair.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chair',
          price: '309.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.toOrder = this.toOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
      return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.toOrder}/>
          {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.toOrder} item={this.state.fullItem} />}
          <Footer/>
        </div>
      );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  toOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
