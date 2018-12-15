import React from "react";
import { Button, Container, Row } from "reactstrap";
import PropTypes from "prop-types";

const donationAmounts = [25, 50, 75];
export default class SelectDonation extends React.Component {
  getButton() {
    return donationAmounts.map(amount => (
      <Row key={amount} className="mx-auto">
        <Button
          outline={this.props.amount == amount ? false : true}
          color="info"
          value={amount}
          onClick={this.props.donationHandler}
          style={{ margin: 10 }}
        >
          ${amount}
        </Button>
      </Row>
    ));
  }

  render() {
    return (
      <div>
        <h2>{this.props.nonprofitName}</h2>
        {this.getButton()}
        <Button color="info" onClick={this.props.nextPage}>{`Donate $${
          this.props.amount
        }`}</Button>
      </div>
    );
  }
}

SelectDonation.propTypes = {
  amount: PropTypes.string,
  donationHandler: PropTypes.func,
  nextPage: PropTypes.func,
  nonprofitName: PropTypes.string
};
