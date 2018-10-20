import { handleErrors } from "services/commons";

function real_login(email, password) {
    const req = {
        method: 'POST',
        body: JSON.stringify({
            name: email,
            password: password
        })
    };

    return fetch('/api/login', req)
        .then(handleErrors)
}

function emailUsername(emailAddress) {
    return emailAddress.match(/^(.+)@/)[1];
 }

function fake_login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("gmail")) {
                resolve({ name: emailUsername(email), token: 'a token'})
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