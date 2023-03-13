import React from "react";
import styled from "styled-components";
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate, } from "react-router-dom"
import ShoppingCart from "./component/ShoppingCart";
import { useState } from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useCart } from '@/context/useCart';
import OrderSummary from "./component/OrderSummary";


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
${'' /* text-align:center; */}
box-shadow: 10px 5px 20px #A9A9A9;


&:hover{
background-Color:#1BB6B2;
color:#fff;
border:none;
}
`
const Button3 = styled.button`
padding:0px 20px;
width:300px;
height:50px;
${'' /* background-Color:#fff ; */}
${'' /* border:3px solid #FFA5AE;
border-radius:12px; */}
color:#FFA5AE;
font-size:26px;
margin:20px;
display:flex;



&:hover{
Color:#1BB6B2;
border:none;
}
`
// const Image =styled.img`
// width:300px;
// `




const Cart = ( ) => {

const navigate = useNavigate();
const [quantity,setQuantity] = useState(1)

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

console.log('items', items)

const continueShop =()=>{
    navigate(`/shop`)
}
const checkOut =()=>{
    navigate(`/shop/mycheckout`)
}


const handleQuantity = (type)=>{
    if(type === "dec"){
        quantity >1 && setQuantity(q=>q-1)
    }else{
        setQuantity(q=>q+1)

    }
}


    // const [cartItem,setcartItem]= useState([])
  
    // const {pid} = useParams()
  
    // useEffect (()=>{
    //   getProduct()
    // },[])
  
    // const getProduct = ()=>{
    //   const url = `http://localhost:8080/product/getProduct/${pid}`
    //   fetch(url,{
    //     method:'get'
    //   })
    //   .then(r =>r.json())
    //   .then(rData=>{
    //     console.log(url,rData)
    //     setcartItem(rData)
    //   })
  
    // }

    return (

    <Container >
        <Wrapper>
                <Title>My Cart  <AutoAwesomeIcon style={{color:"orange",fontSize:"30px"}}/></Title>
                <hr style={{}}/>
                {items?.map((item, idx) => (
            <ShoppingCart
              key={item.id}
              id={item.id}
              image={item.img_src}
              title={item.name}
              price={item.price} 
              color={item.color}
              size={item.size}
              quantity={item.quantity}
            />
          ))}
            <ButtonBox>
                <Button2 onClick={()=>continueShop()}>Continue Shopping</Button2>
                <Button onClick={()=>checkOut()}>Check out</Button>
            </ButtonBox>

            <ButtonBox>
                <Button3 onClick={()=>{clearCart()}}>Reset</Button3>
            </ButtonBox>
        </Wrapper>
        <OrderSummary/>
    </Container>
      

    )
}

export default Cart;
            
