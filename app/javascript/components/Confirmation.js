import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";

class Confirmation extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3>{this.props.userName}, thank you for your donation
            of ${this.props.amount} to {this.props.nonprofitName}
          </h3>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = ({ nonprofit }) => {
  return { nonprofitName: nonprofit.length > 0 ? nonprofit[0].name : "" };
};

export default connect(mapStateToProps)(Confirmation);

Confirmation.propTypes = {
  amount: PropTypes.number,
  nonprofitName: PropTypes.string,
  userName: PropTypes.string
};
