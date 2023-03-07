import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/useCart';

    
const Container = styled.div `
    ${'' /* flex:1; */}
    display:flex;
    flex-direction:column;
    margin:15px 10px;
    align-item:center;
    justify-align:center;
    ${'' /* min-width: 280px; */}
    width: 310px;
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
    object-fit:contain;
    display:flex;
    justify-align:center;
    align-items:center;
    cursor:pointer;
    
    

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
    cursor:pointer;
    
`




const Product = ({item, id, title, image, price}) => {
    const navigate = useNavigate();
    const gotoDetail = (pid) => {
        console.log('click')
        navigate(`/shop/productdetails/${pid}`)
    }
    // const gotoCategory =() => {
    //     navigate(`/shop/${category}`)
    // }

    const {
        cart,
        items,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
        plusOne,
        minusOne,
    } = useCart()

    
    return (
        <Container >
            <Circle />
            <Image src={item.img_src} onClick={() => {gotoDetail(item.product_id)}}/>
            <ProductInfo onClick={() => {gotoDetail(item.product_id)}}>{item.name}</ProductInfo>
            <ProductInfo>${item.unit_price}</ProductInfo>
            <Info>
                <Icon>
                    <ShoppingCartIcon onClick={()=>addItem({
                        id: item.product_id, 
                        quantity: 0, 
                        name: item.name, 
                        price: item.unit_price
                        ,...item
                    })} />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
                <Icon>
                    <SearchIcon onClick={() => {gotoDetail(item.product_id)}}/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product