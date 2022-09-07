class CreateLeases < ActiveRecord::Migration[7.0]
  def change
    create_table :leases do |t|
      t.string :pdf
      t.float :base_rent
      t.float :nnn_expenses
      t.float :electric
      t.float :gas
      t.string :user_id
      t.timestamps
    end
  end
end
