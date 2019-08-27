import { ModuleHeaderModel } from './../../models/ModuleHeader';

export const hydrateSection = (data: any): ModuleHeaderModel => {

  const dataHydrate: ModuleHeaderModel = {
    code: data.code,
    message: data.message,
    moduleHeader: data.data
  };

  return dataHydrate;
}
