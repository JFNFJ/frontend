export function handleErrors(response) {
    if (!response.ok) {
        return response.json().then(Promise.reject, () => Promise.reject(response));
    }
    return response.json();
}