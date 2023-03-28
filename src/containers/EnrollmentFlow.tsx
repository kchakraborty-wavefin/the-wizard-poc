import React from "react";

import MFAWizard from "./MFAWizard";
import { MFAWizardContextProvider } from "../contexts/MFAWizardContext";

import Step1Container from "./Step1";
import Step2Container from "./Step2";
import Step3Container from "./Step3";

const EnrollmentFlow = () => {
  return (
    <div className="flow-container">
      <div className="flow-content">
        <MFAWizardContextProvider>
          <MFAWizard
            steps={[<Step1Container />, <Step2Container />, <Step3Container />]}
          />
        </MFAWizardContextProvider>
      </div>
    </div>
  );
};

export default EnrollmentFlow;
