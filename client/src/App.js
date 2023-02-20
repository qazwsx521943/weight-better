import { Route, Routes } from "react-router-dom";
// 導入MUI預設覆蓋 for themeProvider
import theme from "./Styles/themeMui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import AuthService from "./pages/services/auth.service";
import { AuthProvider } from "./hooks/AuthContext";
import { useAuth } from "./hooks/AuthContext";
// route import
// import Login from "./pages/login";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/ErrorPage";
import AuthRequired from "./pages/authentication/RequireAuth";

//**? 會員 */
import ProfileLayout from "./pages/user/Layouts/ProfileLayout";
// import User from "./pages/user";
import Reels from "./pages/user/reels";

import TestButton from "./pages/test_button/TestButton";

//**? 商品 */
import ProductDetails from "./pages/shop/product/ProductDetails";

//**? 商品 */
import MainContent from "./pages/shop/product/mainConent";

//**? 部落格 */

//**? 客製化菜單 */
import Menu from "./pages/menu";

//**? 短影音 */
import HomeStory from "./pages/story/Home";
import Player from "./pages/story/Player";
import Test from "./pages/story/Test";

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
import Shop from "./pages/shop/product";
import Layout from "./pages/global/Layout";
import Favorites from "./pages/user/favorites/Favorites";
import OrderList from "./pages/user/orderList";
import Profile from "./pages/user/profile";
import RegisterForm from "./pages/authentication/forms/RegisterForm";
// import Menu from "./pages/menu";

function App() {
    // const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <div className="app">
                    {/* ⬇︎ same as css reset */}
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route
                                path="/:username"
                                element={
                                    <AuthRequired>
                                        <ProfileLayout />
                                    </AuthRequired>
                                }>
                                <Route index element={<Profile />} />
                                <Route path="reels" element={<Reels />} />
                                <Route path="favorites" element={<Favorites />} />
                                <Route path="orders" element={<OrderList />} />
                            </Route>
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
                                <Route path="home" element={<HomeStory></HomeStory>}></Route>
                                <Route path="player/:sid" element={<Player></Player>}></Route>
                                <Route path="test-button" element={<TestButton></TestButton>}></Route>
                                <Route path="test" element={<Test></Test>}></Route>
                            </Route>

                            <Route path="*" element={<ErrorPage />} />
                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
