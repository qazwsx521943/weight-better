import { Checkbox } from '@mui/material'
import React from 'react'
import { FormControlLabel } from '@mui/material';
// import { makeStyles } from '@mui/material'



  const CheckboxProton = ({ changeChecked, cuisine }) => {
    // const classes = useStyles();
    const { checked, label, id } = cuisine;
    return (
      <div>




      
        <FormControlLabel
         
          control={
            <Checkbox
              
              size='small'
              checked={checked}
              onChange={() => changeChecked(id)}
              inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
          }
          label={label}
        />
      </div>
    );
  };
  
  export default CheckboxProton;







// function CheckboxProton({cuisine,changeChecked}) {
//     const{checked,label,id}=cuisine;
//   return (
//     <div>
//     <FromControlLabel
//     label:label

//     size='small'
//     checked={checked}
//     onChange={()=>changeChecked(id)}
   

//     />
    
//     </div>
//   )
// }

// export default CheckboxProton