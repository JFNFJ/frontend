export function handleErrors(response) {
    if (!response.ok) {
        return response.json().then(Promise.reject, () => Promise.reject({error: "Ha ocurrido un error inesperado"}));
    }
    return response.json();
}