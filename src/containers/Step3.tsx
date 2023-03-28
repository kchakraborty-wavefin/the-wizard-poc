import React from "react";

const Step3Container = () => {
  return (
    <section>
      <p>
        Here is the Final Step. You should only see the final submit button here
        ....
      </p>
      <br />
      <p className="step-requirement">
        * This step should show the text "All done!" as the primary button.
      </p>
      <p className="step-requirement">
        * Back button should be hidden. You are stuck now.
      </p>
    </section>
  );
};

export default Step3Container;
