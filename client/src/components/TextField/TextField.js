import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      color: 'black',
      background: 'white',
      borderRadius: '5px',
      border: '1px solid #e2e2e1',
      fontSize: '16px',
      padding: '10px',
      width: '100%',
      boxSizing: 'border-box',
    },
    '& .Mui-focused .MuiInputBase-root': {
      border: '1px solid #c8c8c8',
    },
  },
  primary: {
    '& .MuiInputBase-root': {
      color: 'white',
      background: 'blue',
      borderRadius: '5px',
      border: '1px solid #e2e2e1',
      fontSize: '16px',
      padding: '10px',
      width: '100%',
      boxSizing: 'border-box',
    },
    '& .Mui-focused .MuiInputBase-root': {
      border: '1px solid #c8c8c8',
    },
  },
  secondary: {
    '& .MuiInputBase-root': {
      color: 'white',
      background: 'green',
      borderRadius: '5px',
      border: '1px solid #e2e2e1',
      fontSize: '16px',
      padding: '10px',
      width: '100%',
      boxSizing: 'border-box',
    },
    '& .Mui-focused .MuiInputBase-root': {
      border: '1px solid #c8c8c8',
    },
  },
}));

const MyTextField = React.memo(({ className, ...props }) => {
  return <TextField className={useStyles()[className] } {...props} />;
});



export default MyTextField;