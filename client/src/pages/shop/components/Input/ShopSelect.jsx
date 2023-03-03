import styled from "styled-components"

const MySelect = styled.select`
    background-color:#eee;
    width:200px;
    height:35px;
    border-radius:12px;

`

const ShopSelect = () => {
  return (
    <div>
        <MySelect>
          <option></option>
        </MySelect>
    </div>
  )
}

export default ShopSelect