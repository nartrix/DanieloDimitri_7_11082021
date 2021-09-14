function Logout() {
    localStorage.removeItem("user");
    window.location.href = '/';
}

export default Logout;