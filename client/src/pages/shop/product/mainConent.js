import React from 'react'
import product_card from './product_data'
import  './contentStyle.css'
import Header from './header'
import Input from '../../../components/Input/select'
import Tools from './tools'
// import Footer from './footer'
import {Box} from '@mui/material'



    
const MainContent =()=>{
    console.log(product_card);
    const listItems = product_card.map((item)=>

    <div className ="card" key={item.id}>

        <div className='card_img'>
            <img src={require(`${item.thumb}`)} alt={"prod"}/>
            </div>

             <div className='card_header'>
                <h2>{item.prosuct_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
            <div className='btn'>add to cart</div>
       </div>

        
    </div>

    
        

    );


    return(

        
      <box m="20px">
        <rearchTools/>
        <Header/>
        <Input/>
  
        

                <div className="Main_content">
                <div className="main_content">
                    {/* <h3>Headphones</h3> */}
                        {listItems}
                </div>
                </div>
     </box>
        
    )
   }



   
   
export default MainContent;

