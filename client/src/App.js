import { Route, Routes } from "react-router-dom";
// 導入MUI預設覆蓋 for themeProvider
import theme from "./Styles/themeMui";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";

import { AuthContext } from "./pages/global/store/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
// route import
import Login from "./pages/login";
import Register from "./pages/register";
// import Home from "./pages/home/Home";
import ErrorPage from "./pages/ErrorPage";

//**? 會員 */
import User from "./pages/user";
import Profile from "./pages/user/profile";
import TestButton from "./pages/test_button/TestButton";

//**? 商品 */
import ProductDetails from "./pages/shop/product/ProductDetails";

//**? 商品 */
import MainContent from "./pages/shop/product/mainConent";

//**? 部落格 */

//**? 客製化菜單 */
import Input from "./pages/menu/component/input/index";

//**? 短影音 */

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
import Shop from "./pages/shop/product";
import SidebarV2 from "./pages/global/SidebarV2";
import Layout from "./pages/global/Layout";
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
                    setLogin({ ...login, status: false });
                } else {
                    setLogin({
                        username: res.data.username,
                        id: res.data.id,
                        status: true,
                    });
                }
            });
    }, []);

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <AuthContext.Provider value={{ login, setLogin }}>
                    {/* ⬇︎ same as css reset */}
                    <CssBaseline />
                    {/* TODO 各自命名 url */}
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {/* <Route path="/" element={<Home />}></Route> */}
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            {/*SECTION 會員 */}
                            <Route path="/user">
                                <Route path="" element={<User />} />
                                <Route
                                    path="profile/:username"
                                    element={<Profile />}
                                />
                            </Route>
                            {/*SECTION 商城 */}
                            <Route path="/shop/:pid" element={<Shop />}>
                                <Route
                                    path="ProductDetails"
                                    element={<ProductDetails />}
                                />
                            </Route>
                            {/* <Route path="/shop" element={<Shop />}></Route> */}
                            <Route
                                path="/shop"
                                element={<MainContent />}
                            ></Route>

                            {/* <Route path="/blogs" element={<Blogs />}></Route> */}
                            {/* <Route path="/menu" element={<Menu />}></Route> */}
                            <Route path="/menu">
                                <Route path="input" element={<Input />}></Route>
                            </Route>

                            {/* <Route path="/reels" element={<Reels />}></Route> */}
                            <Route path="/reels">
                                <Route
                                    path="test-button"
                                    element={<TestButton></TestButton>}
                                ></Route>
                            </Route>

                            <Route path="*" element={<ErrorPage />} />
                        </Route>
                    </Routes>
                </AuthContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
