function Logout() {
    localStorage.removeItem("user");
    return document.location.href = '/login';
}

export default Logout;