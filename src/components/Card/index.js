import { useState } from 'react'

import styles from'./Card.module.scss'


export const Card = ({id,title, price, img, onAddToCard, onAddFavorite, onDeleteFavorite, favorited = false}) => {
    const [toggleLike, setLikeToggle] = useState(favorited)
    const [cartAdd, setCartAdd] = useState(false)

    const toggleLiked = () => {
        setLikeToggle(toggle => !toggle)
        if(toggleLike) {
            onDeleteFavorite(id)
        } else {
            onAddFavorite({id, title, price, img})
        }
    }
    const toggleCardAdd = () => {
        setCartAdd(cartAdd1=> !cartAdd1)
        onAddToCard({id, title, price, img})
    }
    
    return (
        <div className={styles.card} >
            <div onClick={toggleLiked} className={styles.favorite}>
                <img src={`/img/${toggleLike ? 'liked':'unliked'}.svg`} alt='Unliked'/>
            </div>
            <img width={133} height={112} src={img} alt='Sneakers'/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='f-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                    <img 
                        className={styles.plus}
                        onClick={toggleCardAdd}  
                        src={`/img/${cartAdd ? 'btn-checked' : 'btn-plus'}.svg`} 
                        alt='add card' />
            </div>
        </div>
    )
}