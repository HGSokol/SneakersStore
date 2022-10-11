import { Card } from "./components/Card";
import { Header } from './components/Header'
import { Drawer } from './components/Drawer'


const card =[
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', img: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: '15 600 руб.', img: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', img: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', img: '/img/sneakers/4.jpg'},
]

const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className='content p-40' >
        <div className='d-flex align-center mb-40 justify-between'>
          <h1 >Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск ...'/>
          </div>
        </div>
        <div className='d-flex justify-between'>
          {
            card.map(e => <Card key={e.title} title={e.title} price={e.price} img={e.img}/> )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
