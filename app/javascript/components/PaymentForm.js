import React from 'react';

export default class PaymentForm extends React.Component {
  state = {
    emailValue: ''
  }

  submitEmail = () => fetch('/submit-email', {
    method: 'POST',
    body: JSON.stringify({email: this.state.emailValue}),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(this.props.nextPage())

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
      <h2>{this.props.nonprofitName}</h2>
      <h3>Donation ${this.props.amount}</h3>
      <form onSubmit={this.submitEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={this.props.nameHandler} value={this.state.userName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => this.setState({ emailValue: e.target.value })} value={this.state.emailValue}/>
        </div>
        <div>
          <label>Credit Card Number</label>
          <input type="number" />
        </div>
        <div>
          <label>Expiration</label>
          <input type="date" />
        </div>
        <div>
          <label>CVC</label>
          <input type="number" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    )
  }
}