import React from "react";
import styled from "styled-components";
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate, } from "react-router-dom"
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Container = styled.div`
    padding:50px 100px;
    display:flex;
`
const Wrapper = styled.div`
padding:0px 100px;
display:flex;
flex-direction:column;
flex:2;
`
const CheckOut = styled.div`
padding:20px;
border:dashed 3px #ccc;
width:600px;
height:300px;
border-radius:12px;
display:flex;
flex-direction:column;
flex:1;

`
// const ShoppingCart = styled.div`
// display:flex;
// padding:10px;

// `
const ButtonBox=styled.div`
display:flex;
padding:20px;
`

const Title = styled.h1`
text-align:center;
font-weight:bold;
font-size:36px;
margin-bottom:20px;
color:#2F2D3F;
`
const ProductInfo = styled.div`
width:500px;
${'' /* padding:10px; */}
`
// const Icon = styled.div`
// display:flex;

// `
// const MyNumber = styled.div`
// padding:0px 20px;
// `
const Button = styled.button`
padding:0px 20px;
width:300px;
height:50px;
background-Color:#FFA5AE ;
border-radius:12px;
color:#fff;
font-size:20px;
margin:20px;
display:flex;
align-item:center;
justify-content:center;
box-shadow: 10px 5px 20px #A9A9A9;


&:hover{
background-Color:#1BB6B2;
box-shadow: inset 10px 10px 10px #21a29e;

}
`
const Button2 = styled.button`
padding:0px 20px;
width:300px;
height:50px;
background-Color:#fff ;
border:3px solid #FFA5AE;
border-radius:12px;
color:#FFA5AE;
font-size:20px;
margin:20px;
display:flex;
align-item:center;
justify-content:center;
box-shadow: 10px 5px 20px #A9A9A9;


&:hover{
background-Color:#1BB6B2;
color:#fff;
border:none;
}
`
// const Image =styled.img`
// width:300px;
// `
const OrderSummary =styled.h1`
font-size:24px;
text-align:center;
margin:0px 0px 15px 0px;
color: #2F2D3F;
`



const Cart = () => {

const navigate = useNavigate();
const [quantity,setQuantity] =useState(1)

const continueShop =()=>{
    navigate(`/shop`)
}

const handleQuantity = (type)=>{
    if(type === "dec"){
        quantity >1 && setQuantity(q=>q-1)
    }else{
        setQuantity(q=>q+1)

    }
}

    return (
    <Container>
        <Wrapper>
                <Title>My Cart  <AutoAwesomeIcon style={{color:"orange",fontSize:"30px"}}/></Title>
                <hr style={{}}/>
                <ShoppingCart url={'https://media.fastretain.com/cdn-cgi/image/width=960,f=webp/media/sale/plan/image/46858/Kettlebell-30.png'} />
                <ShoppingCart url={'https://media.fastretain.com/cdn-cgi/image/width=960,f=webp/media/sale/plan/image/46860/Kettlebell-50.png'} />
                <ShoppingCart url={'https://media.fastretain.com/cdn-cgi/image/width=960,f=webp/media/sale/plan/image/46862/Kettlebell-70.png' } />
            <ButtonBox>
                <Button2 onClick={()=>continueShop()}>Continue Shopping</Button2>
                <Button>Check out</Button>
            </ButtonBox>    
        </Wrapper>
        <CheckOut>
            <OrderSummary>Order Summary</OrderSummary>
            <p>Subtotal:</p>
            <p>Shipping Discount</p>
            <p>Total:</p>
        </CheckOut>
    </Container>

    )
}

export default Cart;
            
