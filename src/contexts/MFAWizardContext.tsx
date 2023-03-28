import React from "react";

export interface ContextType {
  stepsCount: number;
  currentStep: number;
  moveToNextStep: () => void;
  moveToPreviousStep: () => void;
  setStepsCount: (count: number) => void;
}
export const MFAWizardContext = React.createContext({} as ContextType);
export const useContext = () => React.useContext(MFAWizardContext);

export interface MFAWizardContextProviderProps {
  children: React.ReactNode;
}

export const MFAWizardContextProvider: React.FC<
  MFAWizardContextProviderProps
> = ({ children }) => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [stepsCount, setStepsCount] = React.useState<number>(0);

  const _defaultNextButtonClickHandler = () => {
    if (currentStep < stepsCount) {
      setCurrentStep((currStep) => currStep + 1);
    }
  };

  const _defaultPrevButtonClickHandler = () => {
    if (currentStep > 1) {
      setCurrentStep((currStep) => currStep - 1);
    }
  };

  const nextClickHandlerRef = React.useRef(_defaultNextButtonClickHandler);
  const prevClickHandlerRef = React.useRef(_defaultPrevButtonClickHandler);

  const overrideNextClickHandler = (handler: () => {}) => {
    nextClickHandlerRef.current = handler;
  };

  const overridePrevClickHandler = (handler: () => {}) => {
    prevClickHandlerRef.current = handler;
  };

  const moveToNextStep = () => {
    _defaultNextButtonClickHandler.call(null);
  };

  const moveToPreviousStep = () => {
    _defaultPrevButtonClickHandler.call(null);
  };

  const contextValue = {
    stepsCount,
    setStepsCount,
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
    overrideNextClickHandler,
    overridePrevClickHandler,
  };

  return (
    <MFAWizardContext.Provider value={contextValue}>
      {children}
    </MFAWizardContext.Provider>
  );
};
