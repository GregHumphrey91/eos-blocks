// Packages
import React, { Fragment } from "react";
import { Header, Modal, Button, Card } from "semantic-ui-react";
import moment from "moment";
import PropTypes from "prop-types";

// CSS
import "./css/Block.css";

// Block component
export const Block = props => {
  // De-structure props
  const {
    timestamp,
    producer,
    confirmed,
    previous,
    transaction_mroot,
    action_mroot,
    schedule_version,
    new_producers,
    header_extensions,
    producer_signature,
    transactions,
    block_num,
    id
  } = props.block;

  // Block Info Modal
  const blockModal = () => (
    <Modal
      className="eos-card"
      trigger={
        <Button fluid color="green">
          Show Details
        </Button>
      }
    >
      <Modal.Header>Details</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Header>
            <strong>Block Number</strong> {block_num}
          </Header>
          <article>
            <strong>Timestamp:</strong>{" "}
            {moment(timestamp).format("MMMM Do YYYY HH:mm A")} <br />
            <strong> Producer:</strong> {producer} <br />
            <strong>Confirmed:</strong> {confirmed} <br />
            <strong>Previous:</strong> {previous}
            <br />
            <strong>Transaction_mroot:</strong> {transaction_mroot} <br />
            <strong>Action_mroot:</strong> {action_mroot} <br />
            <strong>Schedule_version:</strong> {schedule_version} <br />
            <strong>New_producers:</strong> {new_producers} <br />
            <strong>Header_extensions:</strong> {header_extensions} <br />
            <strong>Producer_signature:</strong> {producer_signature} <br />
            <strong>Transactions:</strong>{" "}
            {transactions
              ? transactions.map((transaction, index) => {
                  return (
                    <div key={index}>
                      status: {transaction.status}
                      <br />
                      cpu_usage_us: {transaction.cpu_usage_us}
                      <br />
                      cpu_usage_us: {transaction.net_usage_words},
                      <br />
                      <br />
                    </div>
                  );
                })
              : ""}{" "}
            <br />
          </article>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

  return (
    <Fragment>
      <Card centered className="card-div">
        <Card.Content>
          <Card.Header>
            Block Number: {block_num}
            <br />
            <br />
          </Card.Header>
          <Card.Meta>
            <strong>Block ID:</strong> {id} <br />
            <br />
          </Card.Meta>
          <Card.Description>
            <Card.Description>
              <strong>Actions:</strong> {transactions.length} <br />
              <br />
            </Card.Description>
            <strong>TimeStamp:</strong>{" "}
            {moment(timestamp).format("MMMM Do YYYY HH:mm A")}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>{blockModal()}</Card.Content>
      </Card>
    </Fragment>
  );
};

// Type Checking
Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    block_num: PropTypes.number,
    timestamp: PropTypes.string,
    transactions: PropTypes.array,
    producer: PropTypes.string,
    confirmed: PropTypes.number,
    previous: PropTypes.string,
    transaction_mroot: PropTypes.string,
    action_mroot: PropTypes.string,
    schedule_version: PropTypes.number,
    header_extensions: PropTypes.array,
    producer_signature: PropTypes.string,
    transactions: PropTypes.array,
    block_extensions: PropTypes.array,
    ref_block_prefix: PropTypes.number
  })
};

export default Block;
