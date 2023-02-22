import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useNavigate } from 'react-router-dom'


    
const Container = styled.div `
    ${'' /* flex:1; */}
    ${'' /* display:flex; */}
    margin:15px 10px;
    align-item:center;
    justify-align:center;
    ${'' /* min-width: 280px; */}
    width: 300px;
    ${'' /* max-width:310px; */}
    ${'' /* max-height:414px; */}
    height:414px;
    ${'' /* min-height:330px; */}
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    overflow:hidden;
    
    

    &:hover {
        ${'' /* transform:scale(1.1); */}
    transform: translate3d(5px,0px,2px);
    transition:all .3s ease-in-out ;
    }
    
`
const Circle = styled.div `
    
    ${'' /* width:200px;
    height:200px;
    border-radius:50%;
    background-color:white; */}
`
const Image = styled.img `
    height:65%;
    object-fit:cover;
    display:flex;
    justify-align:center;
    align-items:center;
    
    

`
const Info = styled.div `
    padding:5px 0px;
    width:100%;
    height:100%;
    display:flex;
    
    

`
const Icon = styled.div `
    width:40px;    
    height:40px;
    margin-right:5px;
    margin:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    cursor:pointer;

    &:hover {
        transform:scale(1.1);
        background-color: #FFA5AE;
        
    }
    
`
const ProductInfo = styled.h2`
    margin:10px;
    font-weight:bold;
    
`




const Product = ({item}) => {
    const navigate = useNavigate();

    const gotoDetail = () => {
        console.log('click')
        navigate('/shop/productdetails')
    }


    
    return (
        <Container onClick={gotoDetail}>
            <Circle />
            <Image src={item.img} />
            <ProductInfo>{item.product_name}</ProductInfo>
            <ProductInfo>{item.currency}{item.price}</ProductInfo>
            <Info>
                <Icon>
                    <ShoppingCartIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product