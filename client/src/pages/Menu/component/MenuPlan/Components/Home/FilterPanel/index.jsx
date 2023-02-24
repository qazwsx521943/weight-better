// import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { categoryList, ratingList } from '../../../Contents'
import CheckboxProton from '../../Common/CheckboxProton'
import FilterListToggle from '../../Common/FilterListToggle'
import SliderProton from '../../Common/SliderProton'
import './styles.css'


function FileterPanel(
{  selectedCategory, 
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  changedPrice,
  selectedPrice,
}
  
  ) {
  return (
    <div>
      {/* Category 素食 一般*/}
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
          
        />
      </div>

      {/* Cusines  減脂 正常 增肌*/}
      <div className='input-group'>
      <p className='label'>Cuisine</p>
      {/* <CheckboxProton/> */}
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          id={cuisine.id}
          // cuisine={cuisine.label}
          checked={cuisine.checked}
          label={cuisine.label}
          changeChecked={changeChecked}
        />
      ))}

      </div>


      {/* Price Range (Calories) */}
      <div className='input-group'>
      <p className='label-range'>Cuisine</p>
      <SliderProton value={selectedPrice} changedPrice={changedPrice} />

      </div>
      {/* Star Rating */}
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />

      </div>



    </div>
  )
}

export default FileterPanel