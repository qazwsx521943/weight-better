import React from 'react'
import CircleButton from '@/components/Buttons/CircleButton'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

function TestButton() {
  return (
    <div>
      {/* 1. 圓形 實心 文字 */}
      <CircleButton 
        type="contained"
        text= "確認"
        bgColor= "pink.main" 
        fontColor= "black.main"
        fontSize= "14"
        size= "50"
        >
      </CircleButton>

      {/* 2. 圓形 空心 文字 */}
      <CircleButton 
        type="outlined"
        text= "取消"
        borderColor= "teal.main" 
        fontColor= "black.main"
        fontSize= "14"
        size= "60"
        >
      </CircleButton>

      {/* 3. 圓形 實心 Icon */}
      <CircleButton 
        type="contained"
        text= <DeleteIcon></DeleteIcon>
        bgColor= "yellow.light" 
        fontColor= "black.main"
        fontSize= "14"
        size= "50"
        >
      </CircleButton>

      {/* 4. 圓形 空心 Icon */}
      <CircleButton 
        type="outlined"
        text= <CheckIcon />
        borderColor= "teal.main" 
        fontColor= "black.main"
        fontSize= "14"
        size= "50"
        >
      </CircleButton>

    </div>
  )
}

/*
// --[使用前先 import]
import CircleButton from '@/components/Buttons/CircleButton'

// --[圓形 實心 文字]
<CircleButton 
  type="contained"
  text= "按鈕上的字"
  bgColor= "按鈕背景顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[圓形 空心 文字]
<CircleButton 
  type="outlined"
  text= "按鈕上的字"
  borderColor= "按鈕邊界顏色" 
  fontColor= "字的顏色"
  fontSize= "字的大小"
  size= "按鈕上的大小(直徑)"
  >
</CircleButton>

// --[圓形 實心 Icon]
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

// --[圓形 空心 Icon]
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
