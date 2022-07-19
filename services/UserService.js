import { makeApiCall } from "./config";
import { baseapiurl } from "services/config";
const axios = require("axios");

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

export async function getUserInfo() {
    const response = await makeApiCall(`user/user-info`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    return response;
}

export async function createMedicalProfile(data) {
    const response = await makeApiCall(`user/create-medical-profile`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function updateMedicalProfile(data) {
    const response = await makeApiCall(`user/update-medical-profile`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function createEmptyField(data) {
    const response = await makeApiCall(`user/create-empty-field`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function getUserInfoById(userid) {
    const response = await makeApiCall(`user/user-info-by-id?userid=${userid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    return response;
}

export async function updateProfileInfo(data) {
    const response = await makeApiCall(`user/update-user-profile`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function createDependentProfile(data) {
    const response = await makeApiCall(`user/create-dependent-profile`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function saveDocuments (data) {
    const response = await makeApiCall(`user/save-uploaded-document`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function deleteMedicalItem(data) {
    const response = await makeApiCall(`user/delete-medical-item`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function deleteDocumentItem(data) {
    const response = await makeApiCall(`user/delete-document-item`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function updateEditedDocument(data) {
    const response = await makeApiCall(`user/update-document`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function connectDeviceByUser(data) {
    const response = await makeApiCall(`user/connect-device`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function updateDeviceTemporaryActivity(data) {
    const response = await makeApiCall(`user/update-temporary-device-activity`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function updateProfileImage (formData) {
    const headers = {};
    const url = baseapiurl + `user/update-profile-image`;
    const token = await getToken();
    if (token) {
        headers["risen-access-token"] = token;
        headers["Content-Type"] = "multipart/form-data";
    }
    const data = await axios.post(
        url,
        formData,
        {
          headers
        }
        
    );
    return data;
  }

  export async function deleteProfileImageData(userid) {
    const response = await makeApiCall(`user/delete-profile-image?userid=${userid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    return response;
  }

  export async function deleteConnectedDevice(data) {
    const response = await makeApiCall(`user/delete-connected-device`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
  }

  export async function toggleDeactivateUser(data) {
    const response = await makeApiCall(`user/toggle-deactivate-user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
  }

  export async function deleteUser(data) {
    const response = await makeApiCall(`user/delete-user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
  }

  export async function lookupDevice(data) {
    const response = await makeApiCall(`user/lookup-device-info`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
  }