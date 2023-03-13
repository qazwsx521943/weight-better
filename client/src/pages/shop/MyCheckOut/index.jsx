import OrderSummary from '@/pages/user/social/cart/component/OrderSummary'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ShippingAddress from './components/ShippingAddress'

const Container= styled.div`
    margin:50px 100px;
    display:flex;
    place-content:center;
`


const MyCheckOut = () => {

  const uid = localStorage.getItem('user')!=='null'? JSON.parse(localStorage.getItem('user')).id : 0
    console.log('uid', uid)
  const [userInfo,setUserInfo] = useState([])
    useEffect(() => {
      console.log('effect')
      getUserInfo()
    }, [uid])

    const getUserInfo = () => {
      const url = `http://localhost:8080/product/getUserInfo/${uid}`
      fetch(url, {
        method: 'get'
      })
      .then(r => r.json())
      .then(rData => {
        console.log(url, rData)
        setUserInfo(rData)
      })
    }
    
    // const getUserInfo = () => {
    //   const url = `http://localhost:8080/product/getUserInfo/${uid}`
    //fetch(url, {
    //     method: 'get'
    //   })
    //   .then(r => r.json())
    //   .then(rData => {
    //     console.log(url, rData)
    //     setProductList(rData)
    //   })
    // }
  return (
    <Container>
      <ShippingAddress getUserInfo={getUserInfo} setUserInfo={setUserInfo} userInfo={userInfo} />
      <OrderSummary style={{margin:'100px 100px'}}/>
    </Container>
  )
}

export default MyCheckOut