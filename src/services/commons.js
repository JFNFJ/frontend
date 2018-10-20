export function handleErrors(response) {
    return response.json().then(r => {
        if (!response.ok) {
            return Promise.reject(r);
        }
        return r;
    })
}