import React from "react";
import { Grid,Box,Rating,Typography} from "@mui/material";

function Shop() {
    return (
        
        <Grid container spacing={3}>
            <Grid item xs={8}>
            <Box>Item 1</Box>
        <Typography>
        $960
        </Typography>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={4} readOnly />
</Grid>
        
        <Box
        m="100px 10 0 10"
        component="img"
        sx={{
          height:608,
          width: 837,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
        </Grid>
        
    );
}
export default Shop;
