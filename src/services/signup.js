import { handleErrors } from "services/commons";

function real_signup(name, email, password) {
    const req = {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        })
    };

    return fetch('/api/sign_up', req)
        .then(handleErrors)
}

function fake_signup(name, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ email: email, name: name, token: 'a token'})
        }, 800)
    });
}

export function signup() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_signup(...arguments);
    } else {
        return real_signup(...arguments);
    }
}