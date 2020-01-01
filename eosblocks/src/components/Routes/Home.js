// Packages
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  Button,
  Divider,
  Icon,
  Card,
  Segment
} from "semantic-ui-react";

// Components
import Block from "../BlockChain/Block";
import Error from "../Routes/Error";
import Spinner from "../Layout/Spinner";

// CSS
import "./css/Home.css";

// Home component
export const Home = props => {
  // State
  const [blocks, setBlocks] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook for refetching new blocks
  useEffect(() => {
    /**
        Function: Load New
        @desc Loads more blocks from EOS Blockchain inside useEffect hook.  Uses EOSjs in Express to make the request.
        @param {null} 
        @return {object} - Newly requested blocks from EOS Blockchain.
    */
    const loadNew = async () => {
      try {
        let response = await axios.get("api/blocks");
        response = await response.data;
        await setBlocks(response.blocks);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        showErrors(err);
      }
    };

    // FUNCTIONS CALLED HERE
    setLoading(true);
    loadNew();
  }, [refetch]);

  /**
        Function: Show Errors
        @desc Catches any errors and sets them to state.
        @param {object} - The error object which is used to set error state. 
        @return {void} 
    */
  const showErrors = error => {
    setError({
      isError: true,
      errorMsg: error.message
    });
  };

  /**
        Function: Go Back
        @desc While inside the errors component, this function returns to the home page and resets error state.
        @param {null} 
        @return {void} 
    */
  const goBack = () => {
    setError({
      isError: false,
      errorMsg: ""
    });
  };

  // Conditional rendering
  if (loading) {
    return <Spinner {...props} />;
  } else if (error && error.isError) {
    return <Error {...props} error={error} goBack={goBack} />;
  } else {
    return (
      <Fragment>
        <Header>
          <h1>
            Recent Blocks <Icon color="black" name="square" />
          </h1>
        </Header>
        <Divider />
        <Segment>
          <Card.Group selection="true" size="massive">
            {blocks ? (
              blocks.map((block, index) => (
                <Block {...props} key={index} block={block} />
              ))
            ) : (
              <h1>
                No Blocks Yet
                <br />
                <br />
              </h1>
            )}
            <Button
              fluid
              onClick={() => setRefetch(!refetch)}
              className="btn-load"
              color="facebook"
              size="massive"
            >
              LOAD
            </Button>
          </Card.Group>
        </Segment>
      </Fragment>
    );
  }
};

export default Home;
