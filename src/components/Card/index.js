import {useState} from 'react'

import styles from'./Card.module.scss'


export const Card = ({title, price, img}) => {
    const [toggle, setToggle] = useState(false)

    const toggleLike = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <div className={styles.card}>
            <div onClick={toggleLike} className={styles.favourite}>
                <img src={`/img/${toggle ? 'liked':'unliked'}.svg`} alt='Unliked'/>
            </div>
            <img width={133} height={112} src={img} alt='Sneakers'/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='f-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                    <button className='button'>
                    <img width={11} heigth={11} src='/img/plus.svg' alt='add card' />
                </button>
            </div>
        </div>
    )
}