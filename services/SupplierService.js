import { makeApiCall } from "./config";

export async function generateNewQRBatch(data) {
    const response = await makeApiCall(`generate-qr-code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
};

export async function loadAllQrBatch() {
    const response = await makeApiCall(`load-qr-batch`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    return response;
};



