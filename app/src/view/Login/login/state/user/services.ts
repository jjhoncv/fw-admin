// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/session"

import { axiosAjax } from './../../../../../config/axios';
import { hydrateUser } from './hydrators';

export const serviceUser = {
    async login(values) {
        try {
            const { data } = await axiosAjax.post(url, { ...values });
            return hydrateUser(data);
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
