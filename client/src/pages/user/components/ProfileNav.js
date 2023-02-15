import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
    { title: "影片收藏", link: "/user/?tab=reels" },
    { title: "最愛商品", link: "/user/?tab=favorites" },
    { title: "購物車", link: "/user/?tab=cart" },
    { title: "我的優惠券", link: "/user/?tab=coupon" },
    { title: "過去訂單", link: "/user/?tab=orderList" },
];

const ProfileTitle = (props) => {
    const [active, setActive] = useState(1);
    return (
        <div className="col-start-2 self-center">
            <nav className="flex gap-6 border-b-teal border-b-2 p-3">
                {tabs.map((tab, i) => (
                    <Link to={tab.link} key={i} onClick={() => setActive(i)}>
                        <span
                            className={`inline-block rounded-lg p-2 text-teal ${
                                active === i ? "bg-teal text-white" : ""
                            } hover:bg-teal-light hover:text-white`}
                        >
                            {tab.title}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ProfileTitle;
