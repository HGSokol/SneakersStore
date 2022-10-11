import { useState, useEffect } from 'react'

import { Card } from "./components/Card";
import { Header } from './components/Header'
import { Drawer } from './components/Drawer'


const App = () => {
  const [cart, setCart] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://63457c9fdcae733e8ff3f06d.mockapi.io/items')
      .then(res => res.json())
      .then(item => setItems(item))
      .catch(e => console.warn(e))
  },[])


  const onAddToCard = (obj) => {
    setCartItems(item => [...item, obj])
  }
  

  return (
    <div className="wrapper clear">
      {
        cart && (<Drawer cartItems={cartItems} setCart={setCart}/>)
      }
      <Header setCart={setCart}/>
      <div className='content p-40' >
        <div className='d-flex align-center mb-40 justify-between mb-40'>
          <h1 >Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск ...'/>
          </div>
        </div>
        <div className='items d-flex'>
          {
            items.map(e => (
              <Card  
                key={e.id} title={e.title} 
                price={e.price} 
                img={e.img}
                id={e.id}
                onAddToCard={onAddToCard}
                />) )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
