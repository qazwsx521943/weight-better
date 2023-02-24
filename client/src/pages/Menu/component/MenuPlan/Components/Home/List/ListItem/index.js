import React from 'react'
import './styles.css'


function ListItem(props) {
    const {coverSrc, title, price, deliveryFee, serviceTime, rating} = props.item
    // console.log({coverSrc, title, price, deliveryFee, serviceTime, rating})
    // console.log('aaaaaaaa')
    
  return (
    <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
  )
}

export default ListItem