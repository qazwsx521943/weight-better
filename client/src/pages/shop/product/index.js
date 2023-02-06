import React from "react";
import * as Mui from "@mui/material";

const Item = Mui.styled(Mui.Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const handleChange = (event) => {
    setWeight(event.target.value);
    setColor(event.target.value);
};
const [weight, setWeight] = "";
const [color, setColor] = "";

const itemData = [
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
    return (
        <Mui.Grid container spacing={2}>
            <Mui.Grid item xs={8}>
                <Item>Item</Item>
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
            </Mui.Grid>
            <Mui.ImageList
                sx={{ width: 500, height: 450 ,ml:10}}
                cols={3}
                rowHeight={64}
            >
                {itemData.map((item) => (
                    <Mui.ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Mui.ImageListItem>
                ))}
            </Mui.ImageList>
            <Mui.Grid item xs={4}>
                <Item>Detail</Item>
                <Mui.Typography variant="h1">啞鈴</Mui.Typography>
                <Mui.Typography variant="h2">$960</Mui.Typography>
                <Mui.Rating name="read-only" value={4} readOnly />
                <Mui.FormControl fullWidth>
                    <Mui.InputLabel id="demo-simple-select-label">
                        尺寸
                    </Mui.InputLabel>
                    <Mui.Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={weight}
                        label="尺寸"
                        onChange={handleChange}
                    >
                        <Mui.MenuItem value={10}>10公斤</Mui.MenuItem>
                        <Mui.MenuItem value={20}>20公斤</Mui.MenuItem>
                        <Mui.MenuItem value={30}>30公斤</Mui.MenuItem>
                    </Mui.Select>
                </Mui.FormControl>
                <Mui.FormControl fullWidth>
                    <Mui.InputLabel id="demo-simple-select-label">
                        顏色
                    </Mui.InputLabel>
                    <Mui.Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={color}
                        label="顏色"
                        onChange={handleChange}
                    >
                        <Mui.MenuItem value={"black"}>黑色</Mui.MenuItem>
                        <Mui.MenuItem value={"gray"}>灰色</Mui.MenuItem>
                    </Mui.Select>
                </Mui.FormControl>
                <Mui.Button variant="contained" color="success">
                    加入購物車
                </Mui.Button>
                <Mui.Typography variant="h6">商品資訊</Mui.Typography>
                <Mui.Typography variant="h6">
                    小型的器材–啞鈴，就能練出相當程度的效果，並且不管在健身房或家裡，都可以做自主訓練！由教官來教學5個超有感的訓練動作，每次只要15分鐘。
                </Mui.Typography>
            </Mui.Grid>
        </Mui.Grid>
    );
}
export default Shop;
