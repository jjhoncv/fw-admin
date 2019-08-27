export interface SectionHeader {
  id: number;
  name: string;
  url: string;
}

export interface ModuleHeader {
  id: number;
  name: string;
  icon: string;
  sections: SectionHeader[]
}

export interface ModuleHeaderModel {
  code: number;
  message: string;
  moduleHeader ?: ModuleHeader[];
}