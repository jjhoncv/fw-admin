export interface SectionHeader {
    id: number;
    name: string;
    url: string;
}

export interface ModuleHeader {
    id: number;
    name: string;
    sections: SectionHeader[]
}