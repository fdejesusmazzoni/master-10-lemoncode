export interface CompanyModel {
  name: string;
  setName: (name: string) => void;
}

export const createEmptyCompanyModel = (): CompanyModel => ({
  name: "lemoncode",
  setName: null,
});
