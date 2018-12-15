Rails.application.routes.draw do
  root to: 'donation#index'

  get 'nonprofit-name', to: 'donation#nonprofit_name'

  post 'submit-email', to: 'donation#submit_email'
end
