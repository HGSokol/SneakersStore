import { Card } from '../Card';


const Favorites = ({favorite, onAddToCard, onAddFavorite, onDeleteFavorite}) => {
    return (
    <div className='content p-40' >
        <div className='items d-flex'>
          {
            favorite.map(e => (
              <Card  
                key={e.id} 
                onDeleteFavorite={onDeleteFavorite}
                onAddFavorite={onAddFavorite}
                onAddToCard={onAddToCard}
                favorited={true}
                {...e}
              />) 
            )
          }
        </div>
      </div>
    )
}

export default Favorites;