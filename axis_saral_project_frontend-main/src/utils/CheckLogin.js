export const logOut = () => localStorage.removeItem("jwt");

export const logIn = (jwt) => {
    localStorage.setItem("jwt", jwt);
}

export const isLogin = localStorage.getItem("jwt") ? true : false;
