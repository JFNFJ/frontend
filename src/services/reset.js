import { handleErrors } from "services/commons";

function real_reset(email) {
    const req = {
        method: 'POST',
        body: JSON.stringify({
            email: email
        })
    };

    return fetch('/api/password/reset', req)
        .then(handleErrors)
}

function fake_reset(email) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ ok: '200' });
        }, 800)
    });
}

export function reset() {
    if (process.env.REACT_APP_USE_MOCK_API === 'true') {
        return fake_reset(...arguments);
    } else {
        return real_reset(...arguments);
    }
}