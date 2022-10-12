import { Card } from '../Card';


const Home = ({items, input, setInput, onAddToCard, onAddFavorite, onDeleteFavorite}) => {
    return (
    <div className='content p-40' >
        <div className='d-flex align-center mb-40 justify-between mb-40'>
          <h1 >
            {
              input? `Поиск по запросу: "${input}"` : 'Все кроссовки'
            }
          </h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            {input && (<img 
                className ='clear cu-p' 
                src='/img/btn-remove.svg' 
                alt='Clear'
                onClick={()=>setInput('')}/>)}
            <input 
              placeholder='Поиск ...'
              value={input}
              onChange={e => setInput(e.target.value)}/>
          </div>
        </div>
        <div className='items d-flex'>
          {
            items.filter(e => e.title
                .toLowerCase()
                .includes(input.toLowerCase())).map(e => (
              <Card  
                key={e.id} 
                onDeleteFavorite={onDeleteFavorite}
                onAddFavorite={onAddFavorite}
                onAddToCard={onAddToCard}
                {...e}
              />) 
            )
          }
        </div>
      </div>
    )
}

export default Home;