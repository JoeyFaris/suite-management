class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :category
      t.string :comment
      t.boolean :completeness
      t.integer :user_id
      t.timestamps
    end
  end
end
