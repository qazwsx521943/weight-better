import React from "react";
import { TextField } from "@mui/material";
// import { withStyles } from "@mui/styles";
import { styled } from "@mui/material";

const styles = {
  general: {
    backgroundColor: "#f2f2f2",
  },
  success: {
    backgroundColor: "#d1e7dd",
  },
  warning: {
    backgroundColor: "#fff3cd",
  },
  error: {
    backgroundColor: "#f8d7da",
  },
  info: {
    backgroundColor: "#d1ecf1",
  },
};
const MyTextField = styled(TextField)(({ theme, variant }) => ({
  // 根據variant屬性選擇不同的樣式
  ...styles[variant],
  "& .MuiInputBase-input": {
    borderRadius: "4px", // 根據需求自己設定樣式
    padding: "10px",
  },
}));
export default MyTextField;