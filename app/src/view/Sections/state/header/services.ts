// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/sections"

import { axiosAjax } from './../../../../config/axios';
import { ModuleHeader } from './../../models/ModuleHeader';

export const serviceSectionsHeader = {
    async get(): Promise<ModuleHeader[]> {
        try {
            const { data } = await axiosAjax.get(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            return data;
        } catch (e) {
            throw new Error();
        }
    }
}
