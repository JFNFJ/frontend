export function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response.json();
}