import React from "react";

export default class SelectDonation extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
      <h2>{this.props.nonprofitName}</h2>
      <button value="25" onClick={this.props.donationHandler}>
        $25
      </button>
      <button value="50" onClick={this.props.donationHandler}>
        $50
      </button>
      <button value="75" onClick={this.props.donationHandler}>
        $75
      </button>
      <button onClick={this.props.nextPage}>{`Donate $${this.props.amount}`}</button>
    </div>
    )
  }
}