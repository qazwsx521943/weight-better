import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { alpha } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   '& .MuiInputBase-root': {
  //     color: 'black',
  //     background: 'white',
  //     borderRadius: '5px',
  //     border: '1px solid #e2e2e1',
  //     fontSize: '16px',
  //     padding: '10px',
  //     width: '100%',
  //     boxSizing: 'border-box',
  //   },
  //   '& .Mui-focused .MuiInputBase-root': {
  //     border: '1px solid #c8c8c8',
  //   },
  // },
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
  kg1:{
    margin:'10px',
    width: '582px',
    height: '93px',
    background: '#D9D9D9',
    borderRadius:'40px',
    boxSizing: 'border-box',
    
    '& .MuiInputBase-input': {
      fontSize: '46px',
      // move the text down
      paddingTop: '23px',
      paddingLeft: '26px',
    },

    //完全移除底線
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
  },
  login1:{
    margin:'10px',
    width: '300px',
    height: '50px',
    background: '#6677C8',
    border: '1px solid #BDBDBD',
    borderRadius: '4px',
    // backgroundColor: alpha( 0.5)
  },
  kg2:{
    margin:'10px',
    width: '411px',
    height: '90px',
    background: 'E1E1E1',
    borderRadius: '12px'
  }
}));

const MyTextField = React.memo(({ className, ...props }) => {
  return <TextField className={useStyles()[className] } {...props} />;
});



export default MyTextField;