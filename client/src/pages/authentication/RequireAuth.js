import React from "react";
import { useAuth } from "../../hooks/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default AuthRequired;
