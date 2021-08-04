import * as React from "react";

import { CompanyContext } from "./company.context";

export const CompanyProvider: React.FC = (props) => {
  const { children } = props;
  const [companyName, setCompanyName] = React.useState("lemoncode");

  return (
    <CompanyContext.Provider
      value={{ name: companyName, setName: setCompanyName }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
