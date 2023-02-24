import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import BasicSelect from '../components/Input/select';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom';
// import Categories from '../components/Categories';

const Container = styled.div`
margin:50px 100px;
`
const Wrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;

  `
const ImageContainer = styled.div`
  flex:1;
  
`
const ImageDetailContainer = styled.div`
  display:flex;
`
const ImageDetail =styled.img`
  width:100px;
  height:100px;
  margin:20px;
  object-fit:contain;


&:hover{
  transform:scale(1.1);
  cursor:pointer;
}
`
const Image = styled.img`
  ${'' /* width:400px; */}
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
  flex:1;
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



const ProductDetails = () => {

  const [productDetail,setProductDetail]= useState([])


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
      setProductDetail(rData)
    })

  }

  return (
    <>
    {/* <Categories/> */}
    {productDetail.map((product)=>(
    <Container>
      <Wrapper>
      
        <ImageContainer>
          <Image src={product.img_src} />
      
          <ImageDetailContainer>
            <ImageDetail src={product.img_src2}/>
            <ImageDetail src={product.img_src3}/>
            <ImageDetail src={product.img_src4}/>
          </ImageDetailContainer>
        </ImageContainer>
        <InfoContainer>
        
          <Title>{product.name}</Title>
      
          <Price>${product.unit_price}</Price>
          <Icon>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarOutlineIcon/>
          </Icon>
          <hr/>
          <h4>尺寸</h4>
          <BasicSelect/>
          <h4>顏色</h4>
          <BasicSelect/>
          <h4>顏色</h4>
          <BasicSelect/>
          <h4>數量</h4>
          <AddToCartButton>Add To Cart</AddToCartButton>
          <Desc>產品資訊
          <SeeMore>
            <AddIcon fontSize={'small'}/>
            <RemoveIcon fontSize={'small'}/>
          </SeeMore>
          
          <br/>
          <hr/>
          <br/>
          <span>
          {product.description}
          </span>
                {/* 鍛煉從此無難度，便用於各種訓練強度，強化肌肉、改善線條。已包括指定重量的鐵餅，兩個手杆和相關杆鈴零件延長杆及螺絲。  行李箱滾輪禮盒包裝設計，方便收納設計。 */}
          </Desc>
        </InfoContainer>
      
      </Wrapper>  
    </Container>
      ))
      }
    

    </>
  )
}

export default ProductDetails