import { Route, Routes, useLocation } from "react-router-dom";
// 導入MUI預設覆蓋 for themeProvider
import theme from "./Styles/themeMui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "./pages/services/auth.service";
// route import
// import Login from "./pages/login";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/register";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/ErrorPage";

//**? 會員 */

import User from "./pages/user";
import TestButton from "./pages/test_button/TestButton";

//**? 商品 */
import ProductDetails from "./pages/shop/product/ProductDetails";

//**? 商品 */
import MainContent from "./pages/shop/product/mainConent";

//**? 部落格 */

//**? 客製化菜單 */
import Menu from "./pages/menu";

//**? 短影音 */

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
import Shop from "./pages/shop/product";
import Layout from "./pages/global/Layout";
// import Menu from "./pages/menu";

function App() {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                {/* ⬇︎ same as css reset */}
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
                        {/* <Route index element={<Home />} /> */}
                        <Route path="login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                        <Route path="register" element={<Register />} />
                        <Route path="user/:username" element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                        <Route path="/shop/:pid" element={<Shop />}>
                            <Route path="ProductDetails" element={<ProductDetails />} />
                        </Route>
                        {/* <Route path="/shop" element={<Shop />}></Route> */}
                        <Route path="/shop" element={<MainContent />}></Route>

                        {/* <Route path="/blogs" element={<Blogs />}></Route> */}
                        {/* <Route path="/menu" element={<Menu />}></Route> */}

                        <Route path="/menu" element={<Menu />}></Route>

                        {/* <Route path="/reels" element={<Reels />}></Route> */}
                        <Route path="/reels">
                            <Route path="test-button" element={<TestButton></TestButton>}></Route>
                        </Route>

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
