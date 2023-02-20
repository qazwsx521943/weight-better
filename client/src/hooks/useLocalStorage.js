import { useState } from "react";

export const useLocalStorage = (token, defaultValue) => {
    const [storedToken, setStoredToken] = useState(() => {
        // 檢查 localStorage 是否已有 JWT token
        try {
            const token = localStorage.getItem("user");
            if (token) {
                return JSON.parse(token);
            } else {
                // 沒有則建立一個字定義 token
                localStorage.setItem(token, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });

    // for setting token in useAuth hook
    const setToken = (newToken) => {
        try {
            localStorage.setItem(token, JSON.stringify(newToken));
        } catch (err) {}
        setStoredToken(newToken);
    };

    // 類useState return value
    return [storedToken, setToken];
};
