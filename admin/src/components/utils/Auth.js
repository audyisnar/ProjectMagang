import axios from 'axios';
import { USER } from '../utils/Url';

export const login = (refToken, userID) => {
    console.log(refToken);
    console.log(userID);
    localStorage.setItem("REFTOKEN", refToken);
    localStorage.setItem("USERID", userID);
};

export const logout = () => {
    localStorage.removeItem("REFTOKEN");
    localStorage.removeItem("USERID");
};

export const isLogin = () => {
    if (localStorage.getItem("REFTOKEN")) {
        return true;
    }
    return false;
};

export const getRefToken = () => {
    return localStorage.getItem("REFTOKEN");
};

export const getUserID = () => {
    return localStorage.getItem("USERID");
};