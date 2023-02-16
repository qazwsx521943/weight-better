import React, { useState } from 'react'
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material'
import { FormControl } from 'react-bootstrap'

function BmiCard() {
  // const [DietType,setDietType]= useState()


  return (
    <Stack
      sx={{
        alignItems: 'center',
        "&.MuiTextField-root": { width: '100%', maxWidth: 500, m: 1 }
      }}
    >
    {/* <FormControl>
      <RadioGroup
      name='DietType'
      value={}
      row
      onChange={handleDietTypeChange}
      >
      <FormControlLabel value={0} control={<Radio />} label="素食"/>
      <FormControlLabel value={0} control={<Radio />} label="一般"/>

      </RadioGroup>
    </FormControl> */}

      

    </Stack>
  )
}

export default BmiCard 