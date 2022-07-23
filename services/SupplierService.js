import { makeApiCall } from "./config";

export async function generateNewQRBatch(data) {
    const response = await makeApiCall(`supplier/generate-qr-code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }, true)
    return response;
};

export async function loadAllQrBatch() {
    const response = await makeApiCall(`supplier/load-qr-batch`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }, true)
    return response;
};

export async function downloadZip(docId) {
    const response = await makeApiCall(`supplier/download-zip?id=${docId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }, true)
    return response;
}

export async function supplierLogin(data) {
    const response = await makeApiCall(`supplier/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }, true)
    return response;
}

export async function storeSupplierToken(result) {
    localStorage.setItem("risen_device_supplier_token", result.token);
    localStorage.setItem("risen_device_supplier_user", result.user);
}

export async function getSupplierToken() {
    return localStorage.getItem("risen_device_supplier_token");
}


