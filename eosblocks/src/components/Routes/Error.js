// Packages
import React, { Fragment } from "react";
import {
  Container,
  Header,
  Segment,
  Button,
  Divider
} from "semantic-ui-react";

// CSS
import "./css/Error.css";

// Error component
export const Error = ({ ...props }) => {

  // De-structure props
  const { error, goBack } = props;

  return (
    <Fragment>
      <Container>
        <Segment className="error-section" padded="very" size="massive">
          <Header textAlign="left" as="h1">
            Error
          </Header>

          <Divider></Divider>
          <h2>{error.errorMsg}</h2>
        </Segment>

        <Button
          color="red"
          className="btn-error"
          size="massive"
          onClick={goBack}
        >
          Return
        </Button>
      </Container>
    </Fragment>
  );
};
export default Error;
