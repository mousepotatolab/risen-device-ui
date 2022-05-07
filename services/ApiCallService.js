export async function generateNewQRBatch(data) {
    const response = await makeApiCall(`generate-qr-code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function loadAllQrBatch() {
    const response = await makeApiCall(`load-qr-batch`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    return response;
}

const makeApiCall = async (url, option) => {
    const baseurl = 'http://localhost:5100/it-20y/us-central1/api/'
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

