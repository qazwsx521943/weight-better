import { Route, Routes } from "react-router-dom";
// 導入MUI預設覆蓋 for themeProvider
import theme from "./Styles/themeMui";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./pages/global/Topbar";

import { AuthContext } from "./pages/global/store/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
// route import
import Login from "./pages/login";
// import Home from "./pages/home/Home";
import ErrorPage from "./pages/ErrorPage";

//**? 會員 */
import Profile from "./pages/user/profile";
import OrderList from "./pages/user/orderList";
import Cart from "./pages/user/cart";
import Reels from "./pages/user/reels";
import Article from "./pages/user/article";
import Coupon from "./pages/user/coupon";
import Favorites from "./pages/user/favorites";
import Register from "./pages/register";
import TestButton from "./pages/test_button/TestButton";

//**? 商品 */
import ProductDetails from "./pages/shop/product/ProductDetails";

//**? 商品 */
import MainContent from "./pages/shop/product/mainConent";

//**? 部落格 */

//**? 客製化菜單 */
import Input from "./pages/menu/component/input/index";



//**? 短影音 */
import HomeStory from "./pages/story/Home";
import Player from "./pages/story/Player";
import Test from "./pages/story/Test";

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
import Shop from "./pages/shop/product";
import SidebarV2 from "./pages/global/SidebarV2";
// import Menu from "./pages/menu";
// import Card from "./pages/card";

function App() {
    // 紀錄登入狀態for rerendering
    const [login, setLogin] = useState({
        username: "",
        id: 0,
        status: false,
    });
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/user/auth`, {
                headers: { userToken: localStorage.getItem("userToken") },
            })
            .then((res) => {
                if (res.data.error) {
                    setLogin(false);
                } else {
                    setLogin(true);
                }
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider value={{ login, setLogin }}>
                {/* ⬇︎ same as css reset */}
                <CssBaseline />
                <div className="app">
                    <Routes>
                        {/* <Route path="/" element={<Home />}></Route> */}

                        <Route path="/" element={<Login />}></Route>
                    </Routes>
                    <Topbar />

                    <main className="content ">
                        {login && <SidebarV2 />}
                        {/* TODO 各自命名 url */}
                        <Routes>
                            {/* <Route path="/" element={<Home />}></Route> */}
                            <Route
                                path="register"
                                element={<Register />}
                            ></Route>

                            {/*SECTION 會員 */}
                            <Route path="/user">
                                <Route
                                    path="profile/:username"
                                    element={<Profile />}
                                ></Route>
                                <Route
                                    path="orderList"
                                    element={<OrderList />}
                                ></Route>
                                <Route
                                    path="cart"
                                    element={<MainContent />}
                                ></Route>
                                <Route path="reels" element={<Reels />}></Route>
                                <Route
                                    path="articles"
                                    element={<Article />}
                                ></Route>
                                <Route
                                    path="coupons"
                                    element={<Coupon />}
                                ></Route>
                                <Route
                                    path="favorites"
                                    element={<Favorites />}
                                ></Route>
                            </Route>

                            {/*SECTION 商城 */}
                            <Route path="/shop/:pid" element={<Shop />}>
                                <Route
                                    path="ProductDetails"
                                    element={<ProductDetails />}
                                ></Route>
                            </Route>
                            {/* <Route path="/shop" element={<Shop />}></Route> */}
                            <Route
                                path="/shop" element={<MainContent />}></Route>

                            {/* <Route path="/blogs" element={<Blogs />}></Route> */}
                            {/* <Route path="/menu" element={<Menu />}></Route> */}
                            <Route path="/menu">
                                
                                <Route
                                    path="input"
                                    element={<Input />}
                                ></Route>

                                
                            </Route>

                            <Route path="reels">
                                <Route path="home" element={<HomeStory></HomeStory>}></Route>
                                <Route path="player/:id" element={<Player></Player>}></Route>
                                <Route path="test-button" element={<TestButton></TestButton>}></Route>
                                <Route path="test-menu" element={<Test></Test>}></Route>
                            </Route>
                            {/* <Route path="/card" element={<Card />}></Route>  */}
                            <Route path="*" element={<ErrorPage />}></Route>
                        </Routes>
                    </main>
                </div>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
