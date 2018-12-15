import React from "react";
import { Container, Row, Col } from "reactstrap";
import SelectDonation from "./SelectDonation";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nonprofitName: "",
      amount: 25,
      userName: "",
      view: 0,
      emailValue: ""
    };
  }

  componentDidMount() {
    fetch("/nonprofit-name.json").then(res =>
      res.json().then(res => this.setState({ nonprofitName: res.name }))
    );
  }

  onAmountSelect = e => {
    this.setState({ amount: e.target.value });
  };

  nextPage = () => this.setState({ view: this.state.view + 1 });

  submitName = e => this.setState({ userName: e.target.value });

  getPage() {
    if (this.state.view === 0) {
      return (
        <SelectDonation
          amount={this.state.amount}
          nonprofitName={this.state.nonprofitName}
          donationHandler={this.onAmountSelect}
          nextPage={this.nextPage}
        />
      );
    } else if (this.state.view === 1) {
      return (
        <PaymentForm
          nonprofitName={this.state.nonprofitName}
          amount={this.state.amount}
          nameHandler={this.submitName}
          nextPage={this.nextPage}
        />
      );
    } else {
      return (
        <Confirmation
          amount={this.state.amount}
          nonprofitName={this.state.nonprofitName}
          userName={this.state.userName}
        />
      );
    }
  }

  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div>
              {this.getPage()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
