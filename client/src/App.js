import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./Styles/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import ReactSidebar from "./pages/global/Sidebar";

// route import
// import Home from "./pages/home";
//**? 會員 */
import Profile from "./pages/member/profile";
import OrderList from "./pages/member/orderList";
import Cart from "./pages/member/cart";
import Reels from "./pages/member/reels";
import Article from "./pages/member/article";
import Coupon from "./pages/member/coupon";
import Friends from "./pages/member/friends";
import Favorites from "./pages/member/favorites";

//**? 商品 */

//**? 部落格 */

//**? 客製化菜單 */

//**? 短影音 */

//**? 抽卡 */
// import Reels from "./pages/reels";
// import Blogs from "./pages/blogs";
// import Shop from "./pages/shop";
// import Menu from "./pages/menu";
// import Card from "./pages/card";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <ReactSidebar />
                    <main className="content">
                        <Topbar />
                        {/* TODO 各自命名 url */}
                        <Routes>
                            {/* <Route path="/" element={<Home />}></Route> */}
                            {/* 會員 */}
                            <Route path="/member">
                                <Route path="" element={<Profile />}></Route>
                                <Route
                                    path="orderList"
                                    element={<OrderList />}
                                ></Route>
                                <Route path="cart" element={<Cart />}></Route>
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
                                <Route
                                    path="friends"
                                    element={<Friends />}
                                ></Route>
                            </Route>

                            {/* <Route path="/shop" element={<Shop />}></Route> */}
                            {/* <Route path="/blogs" element={<Blogs />}></Route> */}
                            {/* <Route path="/menu" element={<Menu />}></Route> */}
                            {/* <Route path="/reels" element={<Reels />}></Route> */}
                            {/* <Route path="/card" element={<Card />}></Route>  */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
