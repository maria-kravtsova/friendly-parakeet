import React from "react";
import { connect } from "react-redux";
import { Button, Container, Row } from "reactstrap";
import PropTypes from "prop-types";

const donationAmounts = [25, 50, 75];
class SelectDonation extends React.Component {
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

const mapStateToProps = ({ nonprofit }) => {
  // This is kind of ugly because it's just name right now, but I wanted to leave
  // it extandable because I want the amount to come from the model...
  return { nonprofitName: nonprofit.length > 0 ? nonprofit[0].name : "" };
};

export default connect(mapStateToProps)(SelectDonation);

SelectDonation.propTypes = {
  amount: PropTypes.number,
  donationHandler: PropTypes.func,
  nextPage: PropTypes.func,
  nonprofitName: PropTypes.string
};
