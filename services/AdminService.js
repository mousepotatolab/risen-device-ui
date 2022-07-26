import { makeApiCall } from "./config";

export async function adminLogin(data) {
    const response = await makeApiCall(`admin/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }, false, true)
    return response;
}

export async function getUserList() {
    const response = await makeApiCall(`admin/users`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }, false, true)
    return response;
}

export async function getChildByUserID(userid) {
    const response = await makeApiCall(`admin/child-users?userid=${userid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }, false, true)
    return response;
}

export async function getDashboardData() {
    const response = await makeApiCall(`admin/dashboard-data`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }, false, true)
    return response;
}

export async function storeAdminToken(result) {
    localStorage.setItem("risen_device_admin_token", result.token);
    localStorage.setItem("risen_device_admin_user", result.user);
}

export async function getAdminToken() {
    return localStorage.getItem("risen_device_admin_token");
}


