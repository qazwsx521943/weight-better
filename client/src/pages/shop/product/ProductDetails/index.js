import React from "react";
import { Grid,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductDetails () {
    const navigate = useNavigate();
    return (
        
        <Grid item xs={8}>
            <Button onClick={() => navigate("")}>
            Products
        </Button>
            <Button onClick={() => navigate("")}>
            Product Details
        </Button>
        </Grid>
        
    );
};

export default ProductDetails;