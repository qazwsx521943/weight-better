import React from "react";
import { HiOutlineUserCircle, HiMenuAlt3 } from "react-icons/hi";
import {
    MdOutlineHistory,
    MdOutlineShoppingCart,
    MdOutlineFavorite,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";

const SidebarV2 = () => {
    const [open, setOpen] = useState(true);
    // 選單內容陣列
    const profileList = [
        {
            name: "基本資料",
            link: "/user",
            icon: HiOutlineUserCircle,
        },
        {
            name: "購物車",
            link: "/user/cart",
            icon: MdOutlineShoppingCart,
        },
        {
            name: "最愛商品",
            link: "/user/favorites",
            icon: MdOutlineFavorite,
        },
        {
            name: "過去訂單",
            link: "/user/historyOrder",
            icon: MdOutlineHistory,
        },
    ];

    return (
        <section className="flex gap-6">
            <div
                className={`${styles.sidebar} bg-[#6677C8] ${
                    open
                        ? `${styles.sidebarOpen} w-60 max-[400px]:w-full`
                        : `${styles.sidebarClose} w-0`
                }  min-h-screen relative overflow-visible`}
            >
                <div className={`${styles.sidebarBtn} absolute`}>
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-10 flex flex-col gap-4 relative items-center">
                    {profileList?.map((item, i) => (
                        <Link
                            to={item.link}
                            key={i}
                            className="flex items-center gap-3.5 text-sm p-2 hover:bg-gray-800 rounded-md"
                        >
                            <div>
                                {React.createElement(item?.icon, {
                                    size: "20",
                                })}
                            </div>
                            <h2>{item.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SidebarV2;
