// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/token/refresh"

import { axiosAjax } from './../../../../config/axios';
import { Login } from './../../models/Login';

export const serviceToken = {
    async get(): Promise<any> {
        try {
            const { data } = await axiosAjax.get(url);
            return data;
        } catch (e) {
            throw new Error();
        }
    }
}
