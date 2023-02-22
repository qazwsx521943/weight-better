

import { ClassNames } from '@emotion/react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, FormGroup } from '@mui/material';
import { width } from '@mui/system';
import { styled } from '@mui/system';
import { useState } from 'react';



const StyledTextField = styled(TextField)(({theme}) => {
  
})




function BmiCard() {

  const [type, setType] = useState(0)


  return (

    <Box>
 
      <FormGroup>
        <FormControl>
          {/* <InputLabel id="type-label">type</InputLabel> */}
          <InputLabel id="type-label">飲食習慣</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <MenuItem value="normal">一般</MenuItem>
            <MenuItem value="vegetarian">素食者</MenuItem>
          </Select>
        </FormControl>
          <TextField mt="2" label="年齡" /> 
          <TextField mt="2" label="實際體重" />
          <TextField mt="2" label="目標體重" />

    
          {/* <Button variant="contained" type="submit">Submit</Button> */}


      </FormGroup>


    </Box>
  );
}

export default BmiCard


