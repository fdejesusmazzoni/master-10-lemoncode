import { createContext, useContext } from "react";
import { CompanyModel, createEmptyCompanyModel } from "./company.model";

export const CompanyContext = createContext<CompanyModel>(
  createEmptyCompanyModel()
);

export const useCompanyContext = () => useContext<CompanyModel>(CompanyContext);
