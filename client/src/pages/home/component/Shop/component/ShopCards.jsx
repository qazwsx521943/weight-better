import React from 'react'
import styled from 'styled-components'
import ShopCard from './ShopCard'

const Wrapper =styled.div`

`
const Container = styled.div`
  position:absolute;
  left:70px;
  padding: 20px;
  margin:auto;
  display: flex;
  place-content:center;
  flex-wrap: wrap;
  ${'' /* justify-content:center; */}
  align-items:center;
  ${'' /* justify-content: left; */}
  animation: fadeInOut 10s ;
  backface-visibility: hidden;
`
const Container2 = styled.div`
  position:absolute;
  left:70px;

  padding: 20px;
  margin:auto;
  display: flex;
  place-content:center;
  flex-wrap: wrap;
  ${'' /* justify-content:center; */}
  align-items:center;
  ${'' /* justify-content: left; */}
  animation: fadeInOut 10s ;
  transform: rotateY(-180deg);
  backface-visibility: hidden;

  &:hover{
    ${'' /* transform: rotateY(0); */}
  }
`

const ShopCards = () => {
  return (<>
    <Container>
            <ShopCard/>
    </Container>
    <Container2>
    <ShopCard/>
    </Container2>
    </>
  )
}

export default ShopCards