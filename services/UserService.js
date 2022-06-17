import { makeApiCall } from "./config";

export async function userSignup(data) {
    const response = await makeApiCall(`user/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
};

export async function userLogin(data) {
    const response = await makeApiCall(`user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
};

export async function verifyUserOtp(data) {
    const response = await makeApiCall(`user/verify`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
};

export async function storeUserToken(token) {
    localStorage.setItem("risen_device_user_token", token);
}

export async function getToken() {
    return localStorage.getItem("risen_device_user_token");
}

export async function storeUserProfile(data) {
    const response = await makeApiCall(`user/create-profile`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}