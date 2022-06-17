const baseurl = 'http://localhost:5100/it-20y/us-central1/api/';
import { getToken } from "./UserService";

export const makeApiCall = async (url, option) => {
    const token = getToken();
    if (token) {
        option.headers = option.headers ? option.headers : {};
        option.headers["risen-access-token"] = token;
    }
    let response = await fetch(`${baseurl}${url}`, option)
    response = await response.json()
    if ("message" in response && response.message == "Not token found") {
        localStorage.clear();
        window.location.href="/login";
    }
    return response;
}