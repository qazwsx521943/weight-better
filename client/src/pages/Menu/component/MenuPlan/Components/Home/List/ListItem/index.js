// import WeightCard from '@/pages/Menu/component/WeightCard'
import React from 'react'
import './styles.css'

function ListItem(props) {
  const { coverSrc, title, calories, protein, foodWeight, rating, carbs, fat } =
    props.item
  // console.log({coverSrc, title, price, deliveryFee, serviceTime, rating})
  // console.log('aaaaaaaa')

  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="" />
      <header>
        <h4>{title}</h4>
        <span>👍{rating}</span>
      </header>
      <footer>
        <div>
          <p>
            <b>卡路里：{calories}</b>
          </p>
        </div>
        <div>
          <p>
            <b>重量：{foodWeight}g</b>
          </p>
        </div>
      </footer>
      <footer>
        <div>
          <p>
            <b>蛋白質：{protein}g</b>
          </p>
        </div>

        <div>
          <p>
            <b>脂肪：{fat}g</b>
          </p>
        </div>
      </footer>
      <footer>
        {/* <div className='btn'>
          <button>選擇</button>
        </div> */}
      </footer>
    </div>
  )
}

export default ListItem
