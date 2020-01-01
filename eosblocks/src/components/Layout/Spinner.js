// Packages
import React, { Fragment } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

// Spinner component
export const Spinner = () => {
  return (
    <Fragment>
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    </Fragment>
  );
};

export default Spinner;
