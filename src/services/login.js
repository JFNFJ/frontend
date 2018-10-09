import { apiRoute } from "config/api";

function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response;
}


function real_login(email, password) {
    const req = {
        method: 'POST',
        body: {
            name: email,
            password: password
        }
    };

    return fetch(apiRoute + 'login', req)
        .then(handleErrors)
        .then(response => response.json())
        .then(_ => ({name: email}));
}

function emailUsername(emailAddress) {
    return emailAddress.match(/^(.+)@/)[1];
 }

function fake_login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("gmail")) {
                resolve({ name: emailUsername(email)})
            } else {
                reject('Invalid email')
            }
        }, 800)
    });
}

export function login() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_login(...arguments);
    } else {
        return real_login(...arguments);
    }
}