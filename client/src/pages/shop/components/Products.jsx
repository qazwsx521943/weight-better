
import React from 'react'
import styled from 'styled-components'
import {product_card} from './product_data'
import Product from './Product'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
  
  padding: 20px;
  margin:0px 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  ${'' /* justify-content:center; */}
  align-items:center;
  ${'' /* justify-content: left; */}
`


const Products = () => {



  return (
  <>
  
    <Container>
    
      {/* {[1, 2, 3].map((ele) => {return ele +2 })} */}
        {product_card.map((item)=>(
            <Product item={item} key={item.id} />)) }
    
    </Container>
  </>
  )
}

export default Products