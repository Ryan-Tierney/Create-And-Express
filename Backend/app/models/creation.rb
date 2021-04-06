class Creation < ApplicationRecord
    belongs_to :user
    belongs_to :category 
    belong_to :location 

    has_many :comments, dependent: :destroy 
    has_many :users, through: :comments 

    validates :image, :date, presence: true 
end
