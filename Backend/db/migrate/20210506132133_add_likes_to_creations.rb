class AddLikesToCreations < ActiveRecord::Migration[6.1]
  def change
    add_column :creations, :likes, :integer
  end
end
