import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./Styles/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import ReactSidebar from "./pages/global/Sidebar";

// route import
import Login from "./pages/login";
// import Home from "./pages/home";
//**? 會員 */
import Profile from "./pages/user/profile";
import OrderList from "./pages/user/orderList";
import Cart from "./pages/user/cart";
import Reels from "./pages/user/reels";
import Article from "./pages/user/article";
import Coupon from "./pages/user/coupon";
import Friends from "./pages/user/friends";
import Favorites from "./pages/user/favorites";
import Register from "./pages/register";

//**? 商品 */
import ProductDetails from "./pages/shop/product/ProductDetails";
//**? 部落格 */

//**? 客製化菜單 */

//**? 短影音 */

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
import Shop from "./pages/shop/product";
import SidebarV2 from "./pages/global/SidebarV2";
// import Menu from "./pages/menu";
// import Card from "./pages/card";
const isAuth = true;
function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {/* ⬇︎ same as css reset */}
                <CssBaseline />
                <div className="app">
                    {!isAuth && (
                        <Routes>
                            <Route path="/" element={<Login />}></Route>
                        </Routes>
                    )}
                    {/* {isAuth && <ReactSidebar />} */}
                    <Topbar />
                    {isAuth && (
                        <main className="content">
                            <SidebarV2 />
                            {/* TODO 各自命名 url */}
                            <Routes>
                                {/* <Route path="/" element={<Home />}></Route> */}
                                <Route
                                    path="register"
                                    element={<Register />}
                                ></Route>
                                {/* 會員 */}

                                <Route path="/user">
                                    <Route
                                        path="profile"
                                        element={<Profile />}
                                    ></Route>
                                    <Route
                                        path="orderList"
                                        element={<OrderList />}
                                    ></Route>
                                    <Route
                                        path="cart"
                                        element={<Cart />}
                                    ></Route>
                                    <Route
                                        path="reels"
                                        element={<Reels />}
                                    ></Route>
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
                                    <Route
                                        path="friends"
                                        element={<Friends />}
                                    ></Route>
                                </Route>

                                <Route path="/shop/:pid" element={<Shop />}>
                                    <Route
                                        path="ProductDetails"
                                        element={<ProductDetails />}
                                    ></Route>
                                </Route>
                                {/* <Route path="/blogs" element={<Blogs />}></Route> */}
                                {/* <Route path="/menu" element={<Menu />}></Route> */}
                                {/* <Route path="/reels" element={<Reels />}></Route> */}
                                {/* <Route path="/card" element={<Card />}></Route>  */}
                            </Routes>
                        </main>
                    )}
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
