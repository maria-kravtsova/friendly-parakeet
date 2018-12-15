class DonationController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def nonprofit_name
    render json: { name: "Women Who Code" }
  end

  def submit_email
    payment = Payment.new({ email: params[:email]})
    if payment.save
      render json: "Payment saved!"
    else
      render json: { error: "We couldn't process your payment."}
    end
  end
end
