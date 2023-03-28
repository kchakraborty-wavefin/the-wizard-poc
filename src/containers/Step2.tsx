import React from "react";

const Step2Container = () => {
  const secretWordRef = React.useRef(null);

  return (
    <section>
      <p>Here is the second step ....</p>
      <p>Ye must type the words "hexodus" before you can proceed"</p>
      <br />
      <p className="step-requirement">
        * If you type an invalid word, you should not be able to proceed
      </p>
      <input type="text" ref={secretWordRef} />
    </section>
  );
};

export default Step2Container;
