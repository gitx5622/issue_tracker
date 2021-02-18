export const SignOut = () => {
    window.localStorage.clear(); //update the localstorage
    window.location.reload(true);
};

