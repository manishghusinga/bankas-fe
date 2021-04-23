const GET_HEADER = {
    method: 'GET',
}

let API_PATH = "http://localhost:3000";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

export const apiService = {
    getApiData: (url) => {
        let _url = API_PATH + url;
        return fetch(_url, GET_HEADER)
            .then(handleErrors)
            .catch(error => ({ success: false, msg: error }));
    },
}