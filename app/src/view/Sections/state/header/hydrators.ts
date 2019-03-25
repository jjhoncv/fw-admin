import { ModuleHeader } from './../../models/ModuleHeader';

export const FormatModuleHeader = (data): ModuleHeader => {
    let dataValue: ModuleHeader = {
        id: 0,
        name: '',
        sections: []
    };
    if (Object.keys(data).length) {
        let dataHeader: ModuleHeader = data;
        dataValue = {
            id: dataHeader.id,
            name: dataHeader.name,
            sections: dataHeader.sections
        };
    }
    return dataValue;
}
