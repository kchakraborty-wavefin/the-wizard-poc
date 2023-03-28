import React from "react";
import { MFAWizardContext } from "../contexts/MFAWizardContext";

export interface MFAWizardProps {
  steps: React.ReactNode[];
}

const MFAWizard: React.FC<MFAWizardProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const wizardContext = React.useContext(MFAWizardContext);

  const stepsCount = steps.length;

  const moveToNextStep = () => {
    if (currentStep < stepsCount) {
      setCurrentStep((currStep) => currStep + 1);
    }
  };

  const moveToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((currStep) => currStep - 1);
    }
  };

  const stepToRender = steps[currentStep - 1];

  return (
    <div>
      <div className="step-indicator">
        Step {currentStep} of {stepsCount}
      </div>

      <div className="step-body">{stepToRender}</div>

      <nav className="actions-container">
        <button
          type="button"
          className="btn-secondary"
          onClick={moveToPreviousStep}
        >
          Previous
        </button>
        <button type="button" className="btn-primary" onClick={moveToNextStep}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default MFAWizard;
