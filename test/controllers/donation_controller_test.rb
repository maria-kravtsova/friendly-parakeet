require 'test_helper'

class DonationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get donation_index_url
    assert_response :success
  end

end
