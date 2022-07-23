const baseurl = 'http://localhost:5100/risen-devices/us-central1/api/';
import { getSupplierToken } from "./SupplierService";
import { getToken } from "./UserService";
// const baseurl = 'https://us-central1-risen-devices.cloudfunctions.net/api/';

export const makeApiCall = async (url, option, issupplier = false) => {
    let token = await getToken();
    if (issupplier) {
        token = await getSupplierToken();
    }
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
};

export const baseapiurl = baseurl;