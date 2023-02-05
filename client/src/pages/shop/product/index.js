import React from "react";
import { Grid,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Shop() {
    const navigate = useNavigate();
    return (
        
        <Grid item xs={8}>
            <Button onClick={() => navigate("")}>
            Products
        </Button>
            <Button onClick={() => navigate("/shop/ProductDetails")}>
            Product Details
        </Button>
        </Grid>
        
    );
}
export default Shop;
