import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class PaymentForm extends React.Component {
  state = {
    emailValue: "",
    userName: ""
  };

  submitEmail = () =>
    fetch("/submit-email", {
      method: "POST",
      body: JSON.stringify({ email: this.state.emailValue }),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(this.props.nextPage());

  render() {
    return (
      <div>
        <h2>{this.props.nonprofitName}</h2>
        <h3>Donation ${this.props.amount}</h3>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.props.nameHandler}
              value={this.props.userName}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={e => this.setState({ emailValue: e.target.value })}
              value={this.state.emailValue}
            />
          </FormGroup>
          <FormGroup>
            <Label>Credit Card Number</Label>
            <Input type="number" />
          </FormGroup>
          <FormGroup>
            <Label>Expiration</Label>
            <Input type="date" />
          </FormGroup>
          <FormGroup>
            <Label>CVC</Label>
            <Input type="number" />
          </FormGroup>
          <Button onClick={this.submitEmail}>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ nonprofit }) => {
  return { nonprofitName: nonprofit.length > 0 ? nonprofit[0].name : "" };
};

export default connect(mapStateToProps)(PaymentForm);

PaymentForm.propTypes = {
  nextPage: PropTypes.func,
  nonprofitName: PropTypes.string,
  amount: PropTypes.number,
  nameHandler: PropTypes.func
};
