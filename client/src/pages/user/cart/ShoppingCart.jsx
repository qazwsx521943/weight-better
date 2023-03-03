import React,{useState} from 'react'
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
// const ShoppingCart = styled.div`
// display:flex;
// padding:10px;

// `;
const Container = styled.div`
    padding:50px 100px;
    display:flex;
`
const Wrapper = styled.div`
padding:0px 100px;
display:flex;
flex-direction:column;
`
const CheckOut = styled.div`
padding:15px;
border:solid 1px #ccc;
width:400px;
height:300px;
border-radius:12px;
display:flex;
flex-direction:column;
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
const ProductInfo = styled.div`
width:500px;
${'' /* padding:10px; */}
`
const Icon = styled.div`
display:flex;

`
const MyNumber = styled.div`
padding:0px 20px;
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
box-shadow: 10px 5px 20px #A9A9A9;


&:hover{
background-Color:#1BB6B2;
color:#fff;
border:none;
}
`
const Image =styled.img`
width:300px;
`
const OrderSummary =styled.h1`
font-size:24px;
text-align:center;
margin:0px 0px 15px 0px;
color: #2F2D3F;
`

function ShoppingCartItem({url,}) {
    const [count,setCount] = useState(1);
  return (<>
    <div style={{    padding:"50px 100px",
        display:"flex"}}>
            <Image src={url} />
            <ProductInfo>
                <p>product name:</p>
                <p>color:</p>
                <p>size:</p>
                <p>price:</p>
                
            </ProductInfo>
            <Icon>
            <RemoveIcon fontSize={'small'} onClick={()=>setCount(count-1) }/>
                <MyNumber>{count}</MyNumber>
            <AddIcon  fontSize={'small'} onClick={()=>setCount(count+1) }/>
            </Icon>
            <DeleteIcon/>
            </div>
            <hr/>
            </>
  )
}

export default ShoppingCartItem