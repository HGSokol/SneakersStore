import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Orders from './components/pages/Orders';


const { Provider } = AppContext

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/cart'),
          axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite'),
          axios.get('https://63457c9fdcae733e8ff3f06d.mockapi.io/items'),
        ]);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://63457c9fdcae733e8ff3f06d.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://63457c9fdcae733e8ff3f06d.mockapi.io/favourite',obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        isLoading,
        onRemoveItem,
        cartOpened,
      }}>
      <div className="wrapper clear">
        <Drawer items={cartItems} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/orders" element={<Orders />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;