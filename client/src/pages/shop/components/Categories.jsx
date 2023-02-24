
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Container = styled.div`
    display:flex;
    margin:50px 100px 0px 100px;
    align-items:center;
    justify-align:center;
`
const Category =styled.div`
    margin:0px 25px 0px 0px;
    display:flex;
    align-items:center;
    justify-align:center;

`


const Categories = () => {

  // const {category} = useParams()

  // const navigate = useNavigate();

  // const gotoCategory =() => {
  // navigate(`/shop/${category}`)
// }
  return (
    <Container>
        {/* <Category><Link>/乳清蛋白營養品</Link></Category>
        // <Category onClick={()=>{gotoCategory(item.category)}}>/乳清蛋白營養品</Category>
        // <Category onClick={gotoCategory}>/瑜珈器材</Category>
        // <Category onClick={gotoCategory}>/重訓器材</Category> */}
        <Category >/乳清蛋白營養品</Category>
        <Category >/瑜珈器材</Category>
        <Category >/重訓器材</Category>
    </Container>
  )
}

export default Categories