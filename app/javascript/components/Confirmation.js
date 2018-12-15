import React from "react";
import PropTypes from "prop-types";

export default class Confirmation extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.userName}, thank you for your donation</h2>
        <h2>
          of {this.props.amount} to {this.props.nonprofitName}
        </h2>
      </div>
    );
  }
}

Confirmation.propTypes = {
  amount: PropTypes.string,
  nonprofitName: PropTypes.string,
  userName: PropTypes.string
};
