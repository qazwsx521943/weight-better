import React, { useState } from 'react'
import FileterPanel from '../../Components/Home/FilterPanel'
import List from '../../Components/Home/List'
import SearchBar from '../../Components/Home/SearchBar'
import './styles.css';

function Home() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [selectedRating,setSelectedRating] = useState(null);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);



  const handleSelectCategory=(event,value)=>
  !value?null:selectedCategory(value)

  const handleSelectRating=(event,value)=>
  !value?null:setSelectedRating(value)
  return (
    <div className='home'>
      {/* search  Bar */}
      <SearchBar />

      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          {/* side Panels */}
          <FileterPanel 
          selectToggle={handleSelectCategory} 
          selectedCategory={selectedCategory}
          selectRating={handleSelectRating}
          selectedRating={selectedRating}
          cuisines={cuisines}
          // changeChecked={handleChangeChecked}
            
          />
        </div>
        <div className='home_list-wrap'>
          {/* list & Empty View  Bar */}
          <List />
        </div>
      </div>
    </div>


  );
};

export default Home