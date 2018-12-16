import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchNonprofit } from '../actions/index'
import SelectDonation from "./SelectDonation";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 25,
      userName: "",
      view: 0,
      emailValue: ""
    };
  }

  componentDidMount() {
    this.props.fetchNonprofit();
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
          donationHandler={this.onAmountSelect}
          nextPage={this.nextPage}
        />
      );
    } else if (this.state.view === 1) {
      return (
        <PaymentForm
          amount={this.state.amount}
          nameHandler={this.submitName}
          nextPage={this.nextPage}
          userName={this.state.userName}
        />
      );
    } else {
      return (
        <Confirmation
          amount={this.state.amount}
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

function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchNonprofit }, dispatch)
}

export default connect(null, mapDispathToProps)(App)
