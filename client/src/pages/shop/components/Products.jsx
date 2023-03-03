
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {product_card} from './product_data'
import Product from './Product'
import { useNavigate, useParams } from 'react-router-dom'


const Container = styled.div`
  
  padding: 20px;
  margin:0px 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  ${'' /* justify-content:center; */}
  align-items:center;
  ${'' /* justify-content: left; */}
`


const Products = ({cateId,sort,filters}) => {
  const [products, setProducts] = useState([])
  // const [categoryId, setCategoryId] = useState('')
  // const [categoryId, setCategoryId] = useState('')

  console.log('cateId2', cateId)


  console.log(sort,filters)
  useEffect(() => {
    console.log('effect')
    getProducts()
  }, [])

  const getProducts = () => {
    const url = cateId? `http://localhost:8080/product/getProductbycate/${cateId}` : `http://localhost:8080/product/getProduct`
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