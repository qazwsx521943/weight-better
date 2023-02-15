import React from 'react';
import * as Mui from "@mui/material";

function MyTextField(props) {
  const { label, value, onChange, error } = props;
  const inputClass = error ? 'my-error-class' : 'my-normal-class';
  return (
    <Mui.TextField
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default MyTextField