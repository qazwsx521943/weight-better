import React from 'react'
import styled from 'styled-components'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



const Container =styled.div`
    ${'' /* margin:50px 100px; */}
`
const Title =styled.h1`
    margin:20px 0px;
    font-size:36px;
    font-weight:bold;
    
    color:#2F2D3F;
`
const InfoSession =styled.div`
padding:50px;
border:dashed #ccc 3px;
border-radius:12px;
width:800px;
height:600px;
`
const Info = styled.input`
padding:10px;
margin:15px;
border:solid 1px #ccc;
border-radius:5px;
width:300px;
height:50px;
`

const SaveButton =styled.button`
    width:300px;
    height:50px;
    border-radius:12px;
    color:#fff;
    background-color:teal;
    margin:20px 0px;
    box-shadow: 10px 5px 20px #A9A9A9;

    &:hover{
        color:teal;
        background-color:#fff;
        border:solid 3px teal;
    }
`


const ShippingAddress = ({getUserInfo , userInfo ,setUserInfo}) => {

    // const userInfo= getUserInfo

  return (
    <Container>
        <Title>Shipping Address <AutoAwesomeIcon style={{color:'orange',fontSize:'35px'}}/>
        </Title>
        {/* <hr style={{margin:'20px 0px',fontSize:'4px',color:'#2F2D3F'}}/> */}
            {userInfo.map((user)=>(
        <InfoSession key={user.id}>
            <h1 style={{fontSize:'24px',color:'#2F2D3F',fontWeight:'bold'}}>訂購者資訊</h1>
            <br/>
            <hr/>
            <br/>
            <h1>姓名</h1>
            <Info placeholder=' Name' defaultValue={user.fullname}/>
            <h1>電話</h1>
            {/* <Info placeholder=' Phone' defaultValue={user.fullname}/> */}
            <Info placeholder=' Phone'/>
            <h1>Email</h1>
            <Info placeholder=' Email Address' defaultValue={user.email}/>
            <h1>寄件地址</h1>
            {/* <Info placeholder=' Address' style={{width:'500px'}} defaultValue={user.fullname}/> */}
            <Info placeholder=' Address' style={{width:'500px'}}/>
        </InfoSession>
))}
        <SaveButton>Save</SaveButton>
    </Container>
  )
}

export default ShippingAddress