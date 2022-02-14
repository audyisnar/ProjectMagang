export const login = (token) => {
    console.log(token);
    localStorage.setItem("TOKEN", token);
};

export const logout = () => {
    localStorage.removeItem("TOKEN");
};

export const isLogin = () => {
    if (localStorage.getItem("TOKEN")) {
        return true;
    }
    return false;
};

export const getToken = () => {
    return localStorage.getItem("TOKEN");
};