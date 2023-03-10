import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom';

import { useCart } from '@/context/useCart';


import axios from 'axios';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import Categories from '../components/Categories';

const Container = styled.div`
margin:50px 100px;
`
const Wrapper = styled.div`
  ${'' /* border:dotted 1px #aaa; */}
  display:flex;
  align-items:center;
  justify-content:center;

  `
const ImageContainer = styled.div`
  flex:3;
  ${'' /* width:400px; */}

  
`
const ImageDetailContainer = styled.div`
  display:flex;
  
  
`
const ImageDetail =styled.img`
  width:100px;
  height:100px;
  margin:60px 20px;
  object-fit:contain;
  border:solid 1px #ccc;



&:hover{
  transform:scale(1.1);
  cursor:pointer;
}
`
const Image = styled.img`
  width:600px;

  &:hover{
    transform:scale(1.1);
  }
`
const Title = styled.h1`
  font-weight:bold;
  font-size:40px;
`
const Price = styled.span`
  font-weight:bold;
  font-size:40px;
  
`
const Desc = styled.p`
  font:16px;
  position:relative;
`
const InfoContainer = styled.div`
  ${'' /* position:relative; */}
  min-width:200px;
  border:dashed 3px #ccc;
  border-radius:12px;
  flex:2;
  
  padding:40px 100px;
`
const Icon =styled.div`
  color:orange;
`
const AddToCartButton= styled.button`
    width: 496px;
    height: 90px;
    margin: 24px;


    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 36px;
    color: #fff;
    border: none;
    background-color: #FFA5AE;
    border-radius: 15px;
    box-shadow: 10px 10px 20px #A9A9A9;

  &:hover{
    width: 496px;
    height: 90px;
    margin: 24px;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 36px;
    color: #fff;
    border: none;
    border-radius: 15px;
    background-color: #1BB6B2;
    box-shadow: inset 10px 10px 10px #21a29e;
  }
`
const SeeMore = styled.div`
  position:absolute;
  right:500px;
  top:0px;
`

const QuantitySession = styled.div`
display:flex;
margin:20px;
`

const MyNumber = styled.div`
padding:0px 10px;
height:30px;
margin:0px 20px;
border-radius:5px;
border:solid 1px #aaa;
`



const ProductDetails = ({id, title, image, price, quantity=0}) => {
  
  const [productDetail,setProductDetail]= useState([])
  const [selectImg,setSelectImg]= useState('')
  const [myQuantity,setMyQuantity] =useState(1)

  const {pid} = useParams()

  useEffect (()=>{
    getProduct()
  },[])

  const getProduct = ()=>{
    const url = `http://localhost:8080/product/getProduct/${pid}`
    fetch(url,{
      method:'get'
    })
    .then(r =>r.json())
    .then(rData=>{
      console.log(url,rData)
      setProductDetail(rData[0])
      setSelectImg(rData[0].img_src)
    })

  }


  const handleQuantity = (type)=>{
    if(type === "dec"){
      myQuantity >1 && setMyQuantity(myQuantity - 1)
    }else{
      setMyQuantity(myQuantity + 1)

    }

  }

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
    <>
    {/* <Categories/> */}

    <Container key={productDetail.product_id}>
      <Wrapper>
      
        <ImageContainer>
          {/* <Image src={productDetail.img_src} /> */}
          <Image src={selectImg} />
      
          <ImageDetailContainer>
            {/* <ImageDetail src={productDetail.img_src2}/>
            <ImageDetail src={productDetail.img_src3}/>
            <ImageDetail src={productDetail.img_src4}/> */}
            <ImageDetail src={productDetail.img_src2} onClick={(e)=>setSelectImg(productDetail.img_src2)}/>
            <ImageDetail src={productDetail.img_src3} onClick={(e)=>setSelectImg(productDetail.img_src3)}/>
            <ImageDetail src={productDetail.img_src4} onClick={(e)=>setSelectImg(productDetail.img_src4)} />
          </ImageDetailContainer>
        </ImageContainer>
        <InfoContainer>
        
          <Title>{productDetail.name}<AutoAwesomeIcon style={{color:"orange",fontSize:"60px",margin:"0px 0px 0px 20px"}}/></Title>
      
          <Price>${productDetail.unit_price}</Price>
          <Icon>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarOutlineIcon/>
          </Icon>
          <hr style={{margin:"20px",}}/>
          {/* <h4>??????</h4>
      
          <h4>??????</h4> */}
          
          <h4>??????</h4>
          <QuantitySession>
            {/* <RemoveIcon fontSize={'small'} onClick={()=>handleQuantity("dec") }/>
                <MyNumber>{myQuantity}</MyNumber>
            <AddIcon  fontSize={'small'} onClick={()=>handleQuantity("inc") }/> */}

              <RemoveIcon fontSize={'small'} onClick={()=>{handleQuantity('dec')}}/>
              <MyNumber>{myQuantity}</MyNumber>

            <AddIcon  fontSize={'small'} onClick={()=> {handleQuantity('inc')}}/>
            <AddToCartButton onClick={()=>addItem({
                        id: productDetail.product_id, 
                        quantity: myQuantity, 
                        name: productDetail.name, 
                        price: productDetail.unit_price
                        ,...productDetail
                    })} style={{margin:"50px"}}>Add To Cart</AddToCartButton>
            
          </QuantitySession>
          <Desc style={{margin:""}}>????????????
          <SeeMore>
            {/* <AddIcon fontSize={'small'}/>
            <RemoveIcon fontSize={'small'}/> */}
          </SeeMore>
          
          <br/>
          <hr/>
          <br/>
          <span>
          {productDetail.description}
          </span>
                {/* ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  ????????????????????????????????????????????????????????? */}
          </Desc>
        </InfoContainer>
      
      </Wrapper>  
    </Container>
      ))

    

    </>
  )
}

export default ProductDetails