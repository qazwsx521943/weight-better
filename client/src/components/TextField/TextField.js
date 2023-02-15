import React from 'react';
import * as Mui from "@mui/material";

const colorStyles = {
  red: {
    color: 'red',
    backgroundColor : 'pink',
    sx:{ m: 1, width: '25ch' }
  },
  blue: {
    color: 'blue',
    backgroundColor : 'lightblue'
  },
  green: {
    color: 'green',
    backgroundColor : 'lightgreen'

  },
};

function MyComponent({ className }) {
  const style = colorStyles[className] || {};

  return (
    <Mui.TextField
      style= {style}
      // 其他 TextField 屬性...
      
    />
  );
}

function MyTextField(props) {
  return (
    <div>
      <MyComponent className={props.className} />
    </div>
  );
}

export default MyTextField;
