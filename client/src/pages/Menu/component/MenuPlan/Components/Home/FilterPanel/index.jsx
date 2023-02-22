// import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { categoryList, ratingList } from '../../../Contents'
import CheckboxProton from '../../Common/CheckboxProton'
import FilterListToggle from '../../Common/FilterListToggle'
import './styles.css'


function FileterPanel(
  selectedCategory, 
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  
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
      {/* {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))} */}

      </div>


      {/* Price Range (Calories) */}
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