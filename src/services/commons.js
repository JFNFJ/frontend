export function handleErrors(response) {
    if (!response.ok) {
        return response.json().then((e) => {
            return Promise.reject(e);
        }, () => Promise.reject({error: "Ha ocurrido un error inesperado"}));
    }
    return response.json();
}