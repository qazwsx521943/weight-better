import React from 'react'
import CircleButton from '@/components/Buttons/CircleButton'
import RectButton from '@/components/Buttons/RectButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

function TestButton() {
  return (
    <div>
      {/* 1. 圓形 實心 文字 */}

      {/* 2. 圓形 空心 文字 */}

      {/* 3. 圓形 實心 Icon */}

      {/* 4. 圓形 空心 Icon */}

    </div>
  )
}

/*
// --[實心 文字]
<CircleButton 
  type="contained"
  text= "按鈕上的字"
  bgColor= "按鈕背景顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[空心 文字]
<CircleButton 
  type="outlined"
  text= "按鈕上的字"
  borderColor= "按鈕邊界顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[實心 Icon]
import DeleteIcon from '@mui/icons-material/Delete';

<CircleButton 
  type="contained"
  text= <DeleteIcon></DeleteIcon>
  bgColor= "按鈕背景顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[空心 Icon]
import CheckIcon from '@mui/icons-material/Check';

<CircleButton 
  type="outlined"
  text= <CheckIcon />
  borderColor= "按鈕邊界顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[Material Icon]
https://mui.com/material-ui/material-icons/

*/

export default TestButton
