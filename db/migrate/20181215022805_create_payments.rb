class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table  :payments do |t|
      t.string    :full_name
      t.string    :email
      t.decimal   :amount
      t.integer   :credit_card_number
      t.integer   :cvc
      t.date      :expiration

      t.timestamps
    end
  end
end
