import { useContext } from 'react';
import AppContext from '../context';


export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = (cartItems.reduce((sum, obj) => obj.price + sum, 0)).toFixed(2);

  return { cartItems, setCartItems, totalPrice };
};