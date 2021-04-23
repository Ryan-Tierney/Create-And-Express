class AddPublicToCreations < ActiveRecord::Migration[6.1]
  def change
    add_column :creations, :public, :boolean
  end
end
