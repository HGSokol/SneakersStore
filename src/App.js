function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='logo'/>
          <div>
            <h3 className='text-uppercase'>Sneakers Store</h3>
            <p className='opacity-5'>Магазин кроссовок</p>
          </div>
        </div>
          <ul className='d-flex'>
            <li className='mr-30'>
              <img width={18} height={18} src='/img/cart.svg' alt='cart'/>
              <span>
                  1205 руб.
              </span>
            </li>
            <li>
              <img width={18} height={18} src='/img/user.svg' alt='user'/>
            </li>
          </ul>
      </header>
      <div className='content p-40' >
        <div className='d-flex align-center mb-40 justify-between'>
          <h1 >Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск ...'/>
          </div>
        </div>
        
        <div className='d-flex justify-between'>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='f-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} heigth={11} src='/img/plus.svg' alt='add card' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/2.jpg' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='f-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} heigth={11} src='/img/plus.svg' alt='add card' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='f-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} heigth={11} src='/img/plus.svg' alt='add card' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/4.jpg' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='f-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} heigth={11} src='/img/plus.svg' alt='add card' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
