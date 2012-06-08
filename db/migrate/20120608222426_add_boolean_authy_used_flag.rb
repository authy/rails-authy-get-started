class AddBooleanAuthyUsedFlag < ActiveRecord::Migration
  def up
    change_table :users do |t|
      t.boolean :authy_used, :default => false
    end
  end

  def down
  end
end
