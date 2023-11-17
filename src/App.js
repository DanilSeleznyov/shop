import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import FullItem from './components/FullItem';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items: [
        {
          id:1,
          title:'Крісло',
          img: 'armchair.png',
          desc:'qrwqe qerwqw rqw erwqreqw erwq qwrwerqw r weqwrw erewe ewq.',
          category:'armchair',
          price:'45.99',
        },
        {
          id:2,
          title:'Стільчик',
          img:'chair.png',
          desc:'qrwqe qerwqw rqw erwqreqw erwq qwrwerqw r weqwrw erewe ewq.',
          category:'chair',
          price:'15.99',
        },
        {
          id:3,
          title:'Софа',
          img:'sofa1.png',
          desc:'qrwqe qerwqw rqw erwqreqw erwq qwrwerqw r weqwrw erewe ewq.',
          category:'sofa',
          price:'65.99',
        },
        {
          id:4,
          title:'Диван',
          img:'sofa2.png',
          desc:'qrwqe qerwqw rqw erwqreqw erwq qwrwerqw r weqwrw erewe ewq.',
          category:'sofa',
          price:'95.99',
        },
        {
          id:5,
          title:'Кухонний стіл',
          img:'table.png',
          desc:'qrwqe qerwqw rqw erwqreqw erwq qwrwerqw r weqwrw erewe ewq.',
          category:'table',
          price:'55.99',
        },
      ],
      showFullItem: false,
      fullItem:{},
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el=>{
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id) })
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  render(){
    return (
      <div className="app_wrapper">
        <Header orders={this.state.orders} deleteOrder={this.deleteOrder}/>
        <Categories onCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd = {this.addToOrder} showItems={this.onShowItem}/>
        {this.state.showFullItem && <FullItem item={this.state.fullItem} showItems={this.onShowItem} onAdd={this.addToOrder}/>}
        <Footer/>
        
      </div>
    );
  }
  
}

export default App;
