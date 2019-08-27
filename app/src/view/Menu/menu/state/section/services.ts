// let url = process.env.API_SESSION;
let url = "http://localhost/api/v1/sections"

import { axiosAjax } from './../../../../../config/axios';
import { ModuleHeaderModel } from './../../models/ModuleHeader'
import { hydrateSection } from './hydrators';

export const serviceSection = {
  async all(): Promise<ModuleHeaderModel> {
    try {
      const { data } = await axiosAjax.get(url, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      return hydrateSection(data)

    } catch (e) {
      throw new Error(e.message);
    }
  }
}
