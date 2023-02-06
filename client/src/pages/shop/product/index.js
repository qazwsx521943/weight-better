import React from "react";
import * as Mui from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Shop() {
    return (
        
        <Mui.Grid container spacing={2}>
            <Mui.Grid item xs={8}>
            <Item>Item</Item>
            Box
        component="img"
        sx={{
          height:408,
          width: 637,
          ml :15,
        }}
        alt="The house from the offer."
        src="https://cdn.shopify.com/s/files/1/0564/1283/1950/collections/1W9A3573_1_1_1400x.jpg?v=1621515174"
      />
            </Mui.Grid>
            <Grid item xs={4}>
            <Item>Detail</Item>
            <Typography variant="h1">
        啞鈴
        </Typography>
        <Typography variant="h2" >
        $960
        </Typography>
        <Rating name="read-only" value={4} readOnly />
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        </Grid>
        
        </Mui.Grid>
        
    );
}
export default Shop;
