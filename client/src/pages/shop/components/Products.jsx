
import React, { useEffect, useState } from 'react'
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
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const url = `http://localhost:8080/product/getProduct`
    fetch(url, {
      method: 'get'
    })
    .then(r => r.json())
    .then(rData => {
      console.log(url, rData)
      setProducts(rData)
    })
  }

  


  return (
  <>
  
    <Container>
    
      {/* {[1, 2, 3].map((ele) => {return ele +2 })} */}
        {products.map((item)=>(
            <Product item={item} key={item.product_id} />)) }
    
    </Container>
  </>
  )
}

export default Products