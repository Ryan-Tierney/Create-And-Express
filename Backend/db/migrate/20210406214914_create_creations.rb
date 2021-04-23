class CreateCreations < ActiveRecord::Migration[6.1]
  def change
    create_table :creations do |t|
      t.references :user, null: false, foreign_key: true 
      t.string :image 
      t.references :category, null: false, foreign_key: true 
      t.string :name 
      t.date :date 
      t.text :notes
      t.references :location, null: false, foreign_key: true 

      t.timestamps
    end
  end
end
