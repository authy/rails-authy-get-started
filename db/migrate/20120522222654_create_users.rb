class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :authy_id, :default => 0
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
