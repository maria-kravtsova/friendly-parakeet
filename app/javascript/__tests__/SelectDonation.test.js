import React from "react";
import renderer from "react-test-renderer";
import SelectDonation from '../components/SelectDonation'

describe('select donation amount', () => {
  it('renders correctly', () => {
    const props = {
      amount: 50,
      donationHandler: jest.fn(),
      nextPage: jest.fn(),
      nonprofitName: "Mom Hugs"
    }

    const wrapper = renderer.create(
      <SelectDonation {...props} />
  ).toJSON();

  expect(wrapper).toMatchSnapshot();
  })
})