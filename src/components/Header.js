import { Link } from "react-router-dom"

export const Header = ({setCart, cartItems}) => {

    const openCart = () => {
        setCart(true)
    }
    
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img 
                        width={40} 
                        height={40}
                        src='/img/logo.png' 
                        alt='Logotype'/>
                <div>
                    <h3 className='text-uppercase'>Sneakers Store</h3>
                    <p className='opacity-5'>Магазин кроссовок</p>
                </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li 
                    className='mr-20 cu-p'
                    onClick={openCart}>
                    <img 
                        width={18} 
                        height={18} 
                        src='/img/cart.svg' 
                        alt='Cart'/>
                    <span>
                    {
                        +(cartItems.reduce((e,i) => e + Number(i.price),0)) + +((cartItems.reduce((e,i) => e + Number(i.price),0)/100*5).toFixed(2))
                    }
                    </span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <img  
                            className='mr-20 cu-p' 
                            width={18} 
                            height={18} 
                            src='/img/heart.svg' 
                            alt='Favorite'/>
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src='/img/user.svg' alt='User'/>
                </li>
            </ul>
        </header>
    )
}