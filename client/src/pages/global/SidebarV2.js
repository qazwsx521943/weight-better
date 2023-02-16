import React from "react";
import { HiOutlineUserCircle, HiMenuAlt3 } from "react-icons/hi";
import {
    MdOutlineHistory,
    MdOutlineShoppingCart,
    MdOutlineFavorite,
    MdOutlineLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { AuthContext } from "./store/AuthContext";

const SidebarV2 = () => {
    const { setLogin, login } = useContext(AuthContext);
    let navigate = useNavigate();
    const [open, setOpen] = useState(true);
    // 選單內容陣列
    const profileList = [
        {
            name: "基本資料",
            link: "/user/profile/",
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
    // remove localstorage
    const logoutHandler = () => {
        localStorage.removeItem("userToken");
        setLogin({ ...login, status: false });

        // 轉向首頁
        navigate("/");
    };

    return (
        <section className="flex gap-6 absolute right-0 top-0">
            <div
                className={`${styles.sidebar} bg-[#6677C8] ${
                    open
                        ? `${styles.sidebarOpen} w-60 max-[400px]:w-full`
                        : `${styles.sidebarClose} w-0`
                }  min-h-screen relative overflow-visible`}
            >
                <div
                    className={`${styles.sidebarBtn} absolute ${
                        open ? "" : `${styles.trans}`
                    }`}
                >
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
                    <Link
                        to="/"
                        className="flex items-center gap-3.5 text-sm p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>
                            <MdOutlineLogout
                                size={20}
                                onClick={logoutHandler}
                            />
                        </div>
                        <h2>登出</h2>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SidebarV2;
