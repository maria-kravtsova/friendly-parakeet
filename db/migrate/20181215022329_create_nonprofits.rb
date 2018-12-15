class CreateNonprofits < ActiveRecord::Migration[5.2]
  def change
    create_table :nonprofits do |t|
      t.string   :name

      t.timestamps
    end
  end
end
