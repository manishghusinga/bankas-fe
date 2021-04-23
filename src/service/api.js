import { apiService } from "./service";

function musicList() {
    return apiService.getApiData("/music/list")
        .then(resp => resp)
}

export const apis = {
    musicList,
}