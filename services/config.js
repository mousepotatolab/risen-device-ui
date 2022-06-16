const baseurl = 'http://localhost:5100/it-20y/us-central1/api/';

export const makeApiCall = async (url, option) => {
    // const baseurl = 'http://localhost:5000'
    // if (getToken()) {
    //     option.headers = option.headers ? option.headers : {};
    //     option.headers["memorial-access-token"] = getToken();
    // }
    let response = await fetch(`${baseurl}${url}`, option)
    response = await response.json()
    // if ("message" in response && response.message == "Not token found") {
    //     localStorage.removeItem("lalo_user");
    //     localStorage.removeItem("lalo_token");
    //     window.location.href="/"
    // }
    return response;
}