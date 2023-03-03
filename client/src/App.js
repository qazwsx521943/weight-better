import { Route, Routes } from "react-router-dom";
import theme from "./Styles/themeMui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./hooks/AuthContext";
// route import

//**? 不分區router */
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/home";
import ErrorPage from "./pages/ErrorPage";
import AuthRequired from "./pages/authentication/RequireAuth";
import Layout from "./pages/global/Layout";

//**? 會員 */
import ProfileLayout from "./pages/user/Layouts/ProfileLayout";
import Reels from "./pages/user/reels";
import Profile from "./pages/user/profile";
import Settings from "./pages/user/Settings";
import Favorites from "./pages/user/favorites/Favorites";
import OrderList from "./pages/user/orderList";

//**? 商品 */
import Shop from "./pages/shop/product";
import ProductDetails from "./pages/shop/ProductDetails";

//**? 商品 */
// import MainContent from "./pages/shop/product/mainConent";
import Products from "./pages/shop/components/Products";

//**? 部落格 */
import HomePage from "./pages/blog/Pages/Home/HomePage";
import CategoryPage from "./pages/blog/Pages/CategoryPage/CategoryPage";
import WriteBlog from "./pages/blog/Pages/WriteBlog/WriteBlog";
import BlogPost from "./pages/blog/Pages/Post/BlogPost";

//**? 客製化菜單 */
import Menu from "./pages/Menu";

//**? 短影音 */
import HomeStory from "./pages/story/Home";
import Player from "./pages/story/Player";
import Test from "./pages/story/Test";

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";

import TestButton from "./pages/test_button/TestButton";
import RegisterForm from "./pages/authentication/forms/RegisterForm";
import LoginSuccess from "./pages/authentication/LoginSuccess";
import { useEffect } from "react";
import Cart from "./pages/user/cart";
import Billing from "./pages/user/Settings/billing/Billing";
import Account from "./pages/user/Settings/account/Account";
import UpdatePassword from "./pages/user/Settings/updatePassword/UpdatePassword";
import Address from "./pages/user/Settings/address/Address";
// import Menu from "./pages/menu";

function App() {
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
                            <Route path="login/success" element={<LoginSuccess />} />
                            <Route path="register" element={<Register />} />
                            <Route path="settings" element={<Settings />}>
                                <Route index element={<Account />} />
                                <Route path="billing" element={<Billing />} />
                                <Route path="updatepassword" element={<UpdatePassword />} />
                                <Route path="address" element={<Address />} />
                            </Route>
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
                                {/* <Route path="cart" element={<Cart />} /> */}
                            </Route>
                            {/*SECTION 商城 */}
                            <Route path="/shop">
                                <Route path="" element={<Shop />} />
                                <Route path=":cateId" element={<Shop />} />
                                <Route path="productdetails/:pid" element={<ProductDetails />} />
                                {/* <Route path=":id" element={<ProductDetails />} /> */}
                                <Route path="cart" element={<Cart />} />
                            </Route>
                            {/* <Route path="/shop" element={<Shop />}></Route> */}
                            <Route path="shop" element={<Products />}></Route>

                            {/*SECTION 部落格 */}
                            <Route path="/blog">
                            <Route path="" element={<HomePage />}></Route>
                            <Route path="WriteBlog" element={<WriteBlog />}></Route>
                            <Route path="BlogPost/:id" element={<BlogPost />} ></Route>
                            <Route path="CategoryPage/:id" element={<CategoryPage />} ></Route>
                            </Route>
                            {/* <Route path="/menu" element={<Menu />}></Route> */}

                            <Route path="/menu" element={<Menu />}></Route>

                            {/* <Route path="/reels" element={<Reels />}></Route> */}
                            <Route path="/reels">
                                <Route path="home" element={<HomeStory></HomeStory>}></Route>
                                <Route path="player/:sid" element={<Player></Player>}></Route>
                                <Route path="test-button" element={<TestButton></TestButton>}></Route>
                                <Route path="test/*" element={<Test></Test>}></Route>
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
