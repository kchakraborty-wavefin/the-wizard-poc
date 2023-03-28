import React from "react";
import { MFAWizardContext } from "../contexts/MFAWizardContext";

export interface MFAWizardProps {
  steps: React.ReactNode[];
}

const MFAWizard: React.FC<MFAWizardProps> = ({ steps }) => {
  const {
    setStepsCount,
    stepsCount,
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
  } = React.useContext(MFAWizardContext);

  React.useEffect(() => {
    setStepsCount(steps.length);
  }, [steps, setStepsCount]);

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
