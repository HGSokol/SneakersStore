import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';

import { Header } from './components/Header'
import { Drawer } from './components/Drawer'
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import axios from 'axios'


const App = () => {
  const [cart, setCart] = useState(false)
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [favorite, setFavorite] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/items')
      .then(item => setItems(item.data))
    axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/cart')
      .then(item => setCartItems(item.data))
    axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite')
      .then(item => setFavorite(item.data))
  },[])

  const onAddToCard = (obj) => {
    axios.post('https://63457c9fdcae733e8ff3f06d.mockapi.io/cart', obj)
    setCartItems(item => [...item, obj])
  }
  const onDeleteCard = (id) => {
    axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/cart/${id}`)
    setCartItems(item => item.filter(e => e.id !== id ))
  }
  
  const onAddFavorite = async (obj) => {
    try{
      if(favorite.find(ob => ob.id === obj.id)){
        axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite/${obj.id}`)
        setFavorite(item => item.filter(e => e.id !== obj.id ))
      } else {
        const { data } = await axios.post('https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite', obj)
        setFavorite(item => [...item, data])
      }
    } catch(error) {
      alert('Error add')
    }
  }
  const onDeleteFavorite = (id) => {
    axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite/${id}`)
    setFavorite(item => item.filter(e => e.id !== id ))
  }

  return (
    <div className="wrapper clear" >
      {
        cart && (<Drawer cartItems={cartItems} setCart={setCart} onDeleteCard={onDeleteCard}/>)
      }
      <Header cartItems={cartItems} setCart={setCart}/>
      <Routes>
          <Route path='/' element={
            <Home 
              items={items} 
              input={input} 
              setInput={setInput}
              onAddToCard={onAddToCard}
              onAddFavorite={onAddFavorite}
              onDeleteFavorite={onDeleteFavorite}/>}/>
          <Route path='/favorites' element={
            <Favorites
              favorite={favorite} 
              onAddToCard={onAddToCard}
              onAddFavorite={onAddFavorite}
              onDeleteFavorite={onDeleteFavorite}/>}/>
      </Routes>
    </div>
  );
}

export default App;
