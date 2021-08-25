export const authLogin = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export const authLogout = () => {
    localStorage.removeItem('tkn_id')
    return {
        type: "LOGOUT"
    }
}