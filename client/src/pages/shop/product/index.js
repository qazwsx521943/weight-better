import React, { useEffect, useState } from "react";
import * as Mui from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import styled from "styled-components";
import Categories from "../components/Categories";
import { useLocation } from "react-router-dom";

import { useCart } from "@/context/useCart";

// import ShopSelect from "../components/Input/ShopSelect";

const Container =styled.div`
${'' /* padding:50px 0px; */}
margin:0px 0px;
position:relative;
${'' /* display:flex; */}
justify-content:center;
align-items:center;
`
const Filter = styled.div`
margin:0px 0px 0px 0px;
position:absolute;
top:0px;
right:100px;


`
const SearchContainer =styled.div`
${'' /* width:100%; */}
position:relative;
margin:20px 0px 0px 100px;
display:flex;
align-items:center;

`
const Search =styled.input`
background-color:#eee;
border:solid 1px #aaa;
border-radius:5px;
width:200px;
height:30px;

`
const Wrapper =styled.div`
margin: 0px 0px 0px 0px;
display:flex;
justify-content:center;
align-items:center;
`



const Shop = () => {

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

    
    const location = useLocation();
    const cate =location.pathname.split("/")[2]
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");
    const [cid, setcid] = useState('')
    
    const {cateId} = useParams()

    console.log('cateId1', cateId)

    return (
        <div key={window.location.pathname}>
        
        <Container>
            <Categories/>
        <SearchContainer>
            <Search placeholder=" Search"/>
            <Filter>
            <select onChange={(e)=>setSort(e.targrt.value)} style={{backgroundColor:"#eee", borderRadius:"5px",width:"200px",height:"30px",marginRight:"10px"}}>
                <option value="newest">最新</option>
                <option value="asc">價錢由高至低</option>
                <option value="desc">價錢由低至高</option>
            </select>
            <select onChange={(e)=>setFilters(e.targrt.value)} style={{backgroundColor:"#eee", borderRadius:"5px",width:"200px",height:"30px"}}>
                <option value="500">500元以下</option>
                <option value="1000">500~1000元</option>
                <option value="1500">1000~1500元</option>
            </select>
            </Filter>
        </SearchContainer>
        
            <Wrapper>
                <Products cateId={cateId} sort={sort} filters={filters}/>
            </Wrapper>
        </Container>
        </div>
    )
}

export default Shop