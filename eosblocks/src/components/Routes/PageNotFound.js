// Packages
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { Header, Button, Icon } from "semantic-ui-react";

// 404 component
export const PageNotFound = () => {
  // Re-direct state
  const [homePage, setHomePage] = useState(false);

  // Conditional rendering
  if (homePage) {
    return <Redirect to={{ pathame: "/" }} />;
  } else {
    return (
      <Fragment>
        <Header as="h1">
          <Icon name="warning" />
          Oops <br />
          Sorry ... I couldn't find the page you're looking for.
        </Header>
        <Button onClick={() => setHomePage(true)}>Go Back</Button>
      </Fragment>
    );
  }
};

export default PageNotFound;
