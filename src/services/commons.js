export function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response;
}