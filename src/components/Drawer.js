

export const Drawer = ({setCart, cartItems = []}) => {
  const closeCart = () => {
    setCart(false)
  } 

  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex justify-between mb-30 '>
          Корзина 
          <img 
            className='removeBtn cu-p' 
            src ='/img/btn-remove.svg' 
            alt='Close'
            onClick={closeCart} />
        </h2>
        <div className='items'>
          {
            cartItems.map(e => {
              return (
                <div className='cartItem d-flex align-center mb-20'>
                  <div style={{'backgroundImage': `url(${e.img})` }} className='cartItemImg'></div>
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{e.title}</p>
                    <b>{e.price} руб.</b>
                  </div>  
                  <img className='removeBtn' src ='/img/btn-remove.svg' alt='Remove' />
                </div>
              )
            })
          }
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow'/></button>
        </div>
      </div>
    </div>
  )
}