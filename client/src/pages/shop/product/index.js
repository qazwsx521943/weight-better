import React, { useEffect, useState } from "react";
import * as Mui from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import BasicSelect from "../components/Input/select";
import styled from "styled-components";
import Categories from "../components/Categories";



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

   

    return (
        <div>
        
        <Container>
            <Categories/>
        <SearchContainer>
                <Search placeholder=" Search"/>
            {/* <BasicSelect fontSize={'16px'} style={{justifyContent:"right",}}/> */}
            <Filter>
            <BasicSelect fontSize={'16px'} style={{}}/>
        </Filter>
        </SearchContainer>
        
            <Wrapper>
                <Products/>
            </Wrapper>
        </Container>
        </div>
    )
}

export default Shop