import React, { useEffect, useState } from "react";
import * as Mui from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyTextField from "@/components/TextField/TextField";

const Item = Mui.styled(Mui.Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));


const itemData = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174',
    title: 'Breakfast2',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174',
    title: 'Breakfast',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174',
    title: 'Burger',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174',
    title: 'Bike',
  },
];

function Shop() {

    const {pid} = useParams()

    const [prodLevel1, setProdLevel1] = useState({})

    const [prodLevel2, setProdLevel2] = useState({
        list: [],
        size: '',
        color: ''
    })

    const handleChangeSize = (e) => {
        const newSize = e.target.value
        const newProdLevel2 = {...prodLevel2, size: newSize}
        setProdLevel2(newProdLevel2)
    }

    const handleChangeColor = (e) => {
        const newColor = e.target.value
        const newProdLevel2 = {...prodLevel2, color: newColor}
        setProdLevel2(newProdLevel2)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/products/prodl1/${pid}`).then((res) => {
            console.log('1', res.data)
            const newProdLevel1 = res.data[0]
            setProdLevel1(newProdLevel1)
        })
        axios.get(`http://localhost:8080/products/prodl2/${pid}`).then(async (res) => {
            console.log('2', res.data)
            const newProdLevel2 = {
                list: res.data,
                size: res.data[0].size,
                color: res.data[0].color}
            setProdLevel2(newProdLevel2)
            
        })
    }, [])

    return (
        <Mui.Grid container spacing={2}>
            <Mui.Grid item xs={8}>
                <Item>Item</Item>
                <MyTextField></MyTextField>
                <Mui.Box
                    component="img"
                    sx={{
                        height: 408,
                        width: 637,
                        ml: 10,
                    }}
                    alt="The house from the offer."
                    src="https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174"
                />
            <Mui.ImageList
                sx={{ width: 500, height: 450 ,mx:'auto'}}
                cols={4}
                rowHeight={64}
            >
                {itemData.map((item, idx) => (
                    <Mui.ImageListItem key={idx}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Mui.ImageListItem>
                ))}
            </Mui.ImageList>
            </Mui.Grid>
            
            <Mui.Grid item xs={4}>
                <Item>Detail</Item>
                <Mui.Typography variant="h1">{prodLevel1.products_level1_name}</Mui.Typography>
                <Mui.Typography variant="h2">{'$ '}{prodLevel1.price}</Mui.Typography>
                <Mui.Rating name="read-only" value={4} readOnly />
                <Mui.FormControl fullWidth>
                    <Mui.InputLabel id="demo-simple-select-label">
                        尺寸
                    </Mui.InputLabel>
                    <Mui.Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={prodLevel2.size}
                        label="尺寸"
                        onChange={handleChangeSize}
                    >
                    {prodLevel2['list'].map((el) => {
                        return el.size
                    }).filter((el, idx, arr) => {
                        return arr.indexOf(el) === idx
                    }).map((el, idx) => {
                        return <Mui.MenuItem key={idx} value={el}>{el}</Mui.MenuItem>
                    })}
                    </Mui.Select>
                </Mui.FormControl>
                <Mui.FormControl fullWidth>
                    <Mui.InputLabel id="demo-simple-select-label">
                        顏色
                    </Mui.InputLabel>
                    <Mui.Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={prodLevel2.color}
                        label="顏色"
                        onChange={handleChangeColor}
                    >
                    {prodLevel2['list'].map((el) => {
                        return el.color
                    }).filter((el, idx, arr) => {
                        return arr.indexOf(el) === idx
                    }).map((el, idx) => {
                        return <Mui.MenuItem key={idx} value={el}>{el}</Mui.MenuItem>
                    })}
                    </Mui.Select>
                </Mui.FormControl>
                <Mui.Button variant="contained" color="success">
                    加入購物車
                </Mui.Button>
                <Mui.Typography variant="h6">商品資訊</Mui.Typography>
                <Mui.Typography variant="h6">
                    {prodLevel1.description}
                </Mui.Typography>
            </Mui.Grid>
        </Mui.Grid>


        

        
    );
}
export default Shop;
