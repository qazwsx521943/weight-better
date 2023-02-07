import React from 'react'
import {Link} from 'react-router-dom';
import  './headerStyle.css'
// import  * as Mui from '@mui/material'


function Header() {
  return (
    <div>
      <div className='headerGroup'>
        <ul>
          <li><Link to="/">/重量訓練</Link></li>
          <li><Link to="/">/瑜珈</Link></li>
          <li><Link to="/">/高蛋白粉</Link></li>
          <li><Link to="/">/拉筋舒緩</Link></li>
        </ul>
      
      </div>
    </div>
    
  )
}

export default Header