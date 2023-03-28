import React from "react";

export interface ContextType {}
export const MFAWizardContext = React.createContext({} as ContextType);
export const useContext = () => React.useContext(MFAWizardContext);

export interface MFAWizardContextProviderProps {
  children: React.ReactNode;
}

export const MFAWizardContextProvider: React.FC<
  MFAWizardContextProviderProps
> = ({ children }) => {
  const contextValue = {};

  return (
    <MFAWizardContext.Provider value={contextValue}>
      {children}
    </MFAWizardContext.Provider>
  );
};
