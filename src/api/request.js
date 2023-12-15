import {Api, BASE_URL} from "~/api/api.js";

export const Articles = {
    // n:数量，p:页数
    getAll: async ({n, p}) => Api.get(`${BASE_URL}/articles?n=${n}&p=${p}`)
}