import { apiRoute } from "config/api";

function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response;
}


function real_login(name, password) {
    const req = {
        method: 'POST',
        body: {
            name: name,
            password: password
        }
    };

    return fetch(apiRoute + 'login', req)
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('name', response.name);
            localStorage.setItem('token', response.token);
        });
}

function fake_login(name, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name.includes("gmail")) {
                resolve('Logged in!')
            } else {
                reject('Invalid user name')
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