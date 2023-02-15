import React from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileSidebar from "./components/ProfileSidebar";
import ProfileNav from "./components/ProfileNav";
import { useSearchParams } from "react-router-dom";
import Reels from "./reels";
import OrderList from "./orderList";
import Favorites from "./favorites/Favorites";
import Cart from "./cart";
import Coupon from "./coupon";
const User = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab");
    return (
        // 切割版面
        <div className="grid grid-cols-[350px_1fr] w-full mx-32">
            <ProfileSidebar></ProfileSidebar>
            <div className="w-full p-10">
                <ProfileNav></ProfileNav>
                <ProfileCard>
                    {activeTab === "reels" && <Reels />}
                    {activeTab === "orderList" && <OrderList />}
                    {activeTab === "favorites" && <Favorites />}
                    {activeTab === "cart" && <Cart />}
                    {activeTab === "coupon" && <Coupon />}
                </ProfileCard>
            </div>
        </div>
    );
};

export default User;
