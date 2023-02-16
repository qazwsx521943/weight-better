import React from "react";
import styles from "./gallery.module.css";
import { useEffect, useState } from "react";

// generate randomNum
const randomNum = (limit) => Math.floor(Math.random() * limit) + 1;

// generate random classname for gallery
const digits = Array.from({ length: 20 }, () => [
    "h" + randomNum(2),
    "v" + randomNum(2),
]);

const Gallery = () => {
    return (
        <div className={`${styles.container} w-full grid`}>
            {/* generate gallery img html */}
            {digits.map(([h, v], i) => (
                <img
                    key={i}
                    src={require(`./gallery/${randomNum(6)}.jpg`)}
                    className={`${styles.gridImg} ${styles[h]} ${styles[v]}`}
                    alt="img"
                />
            ))}
        </div>
    );
};

export default Gallery;
