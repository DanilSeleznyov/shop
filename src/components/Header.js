import {HiShoppingCart} from 'react-icons/hi'
import {useState} from 'react'
import Orders from './Orders'

const showOrders = (props) => {

  let sum = 0

  props.orders.forEach(el => sum += Number.parseFloat(el.price));
  return (
    <div className='card__orders'>
      {props.orders.map(el =>(
        <Orders key={el.id} item={el} onDelete={props.deleteOrder}/>
))}
      <p className='sum'>Сума: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  )
}

const showEmpty = () =>{
  return(
    <h2 className='title__empty'>Корзина порожня</h2>
  )
}


export default function Header(props) {



  const [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div className='header_wrapper'>
            <span className='logo'>House Staff</span>
            <nav className='nav'>
                <ul className='nav__list'>
                    <HiShoppingCart className={`header__cart ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(!cartOpen)}/>
                    <li>Головна</li>
                    <li>Про нас</li>
                    <li>Мій кабінет</li>
                </ul>
            </nav>
            {
              cartOpen && (
                <div className='shop__cart'>
                  {props.orders.length > 0 ? showOrders(props) : showEmpty()}
                </div>
              )
            }
        </div>
        <div className='presentation'></div>
    </header>
  )
}

